<script>
    import Figure from './lib/Figure.svelte'
    import Highlight from './lib/Highlight.svelte'
    
    import { onMount } from 'svelte';
    import WS from './ws.js'


    const ws = WS();

    
    const raw_response = ws.getResponse()

    let own_team;
    let enemy_team;

    $: response = $raw_response.toString()

    $: check_messages(response);

    function check_messages(up_response) {
        console.log("message: " + up_response)
        
        if (up_response == "black") {
            own_team = "black"
            enemy_team = "white"
    

            set_own_figures("black");
            set_enemy_figures("white");
        }
        else if (up_response == "white") {
            own_team = "white"
            enemy_team = "black"

            set_own_figures("white");
            set_enemy_figures("black");

        }
        else if (up_response == "none") {
            game_full_screen = true;
        }
        else if (up_response == 0) {
            console.log("0")
        }
        else {
            // execute move
            
            let turn_dict = JSON.parse(up_response);

            console.log("move enemy")

            if(own_team != turn_dict.team) {

                console.log(turn_dict);

                fields[turn_dict.old_pos.y][turn_dict.old_pos.x].move_to = {bool: true, pos: turn_dict.new_pos}

                fields = fields
            }
        }
    }

    let join_screen = true;

    let game_full_screen = false;

    let current_team = "white";

    let moved = {bool: false, old_pos: {y: 0, x:0}, new_pos: {y: 0, x:0}};



    $: if(moved.bool) {
        
        console.log("moved")


        let turn_dict = JSON.stringify({team: own_team,old_pos: {y: Math.abs(moved.old_pos.y - 7), x: Math.abs(moved.old_pos.x - 7)}, new_pos: {y: Math.abs(moved.new_pos.y - 7), x: Math.abs(moved.new_pos.x - 7)}})

        send(turn_dict);


        if(current_team == "white"){
            current_team = "black";
        }
        else if(current_team == "black"){
            current_team = "white";
        }

        moved.bool = false
    }


    function send(message) {

        if(message == "which team") {
            join_screen = false;

        }

        ws.sendMessage(message)
    }



    function set_own_figures(color) {
        for(let i = 0; i<8; i++) {
            fields[6][i] = {figure: "Pawn", team: color, move_to: {bool:false}, origin_pos: true}
        }

        fields[7][0] = {figure: "Rook", team: color, move_to: {bool:false}, origin_pos: true}
        fields[7][7] = {figure: "Rook", team: color, move_to: {bool:false}, origin_pos: true}

        fields[7][1] = {figure: "Knight", team: color, move_to: {bool:false}, origin_pos: true}
        fields[7][6] = {figure: "Knight", team: color, move_to: {bool:false}, origin_pos: true}

        fields[7][2] = {figure: "Bishop", team: color, move_to: {bool:false}, origin_pos: true}
        fields[7][5] = {figure: "Bishop", team: color, move_to: {bool:false}, origin_pos: true}

        fields[7][3] = {figure: "Queen", team: color, move_to: {bool:false}, origin_pos: true}
        fields[7][4] = {figure: "King", team: color, move_to: {bool:false}, origin_pos: true}

    }

    function set_enemy_figures(color) {
        for(let i = 0; i<8; i++) {
            fields[1][i] = {figure: "Pawn", team: color, move_to: {bool:false}, origin_pos: true}
        }

        fields[0][0] = {figure: "Rook", team: color, move_to: {bool:false}, origin_pos: true}
        fields[0][7] = {figure: "Rook", team: color, move_to: {bool:false}, origin_pos: true}

        fields[0][1] = {figure: "Knight", team: color, move_to: {bool:false}, origin_pos: true}
        fields[0][6] = {figure: "Knight", team: color, move_to: {bool:false}, origin_pos: true}

        fields[0][2] = {figure: "Bishop", team: color, move_to: {bool:false}, origin_pos: true}
        fields[0][5] = {figure: "Bishop", team: color, move_to: {bool:false}, origin_pos: true}


        
        fields[0][3] = {figure: "Queen", team: color, move_to: {bool:false}, origin_pos: true}
        fields[0][4] = {figure: "King", team: color, move_to: {bool:false}, origin_pos: true}


    }






    let fields = [];

    for(let i = 0; i<8; i++) {
        fields.push([]);

        for(let j = 0; j<8; j++) {
            fields[i].push({figure: "none", move_to: {bool: false}, is_highlight: false, origin_pos: false
            });
        }
    }


    fields = fields;

</script>

<main>

  <div class="board-container">
    <div class="chess-board">
      {#each {length: 64} as _, i}
        {#if (i + Math.floor(i / 8)) % 2 == 0}
            

            <div class="square-even">

                {#if fields[Math.floor(i / 8)][i % 8].figure == "none"}
                    {""} 

                    {#if fields[Math.floor(i / 8)][i % 8].is_highlight}
                        <Highlight  origin={fields[Math.floor(i/8)][i%8].origin} 
                                    position={{x: i % 8, y: Math.floor(i/8)}} 
                                    bind:field_array={fields}/>
   
                    {/if}
                
        
                {:else}

                    {#if fields[Math.floor(i / 8)][i % 8].is_highlight}
                        <Highlight  origin={fields[Math.floor(i/8)][i%8].origin} 
                                    position={{x: i % 8, y: Math.floor(i/8)}} 
                                    bind:field_array={fields}>


                            <Figure     type={fields[Math.floor(i / 8)][i % 8].figure} 
                                        team={fields[Math.floor(i / 8)][i % 8].team}
                                        bind:current_team={current_team}
                                        position={{x: i % 8, y: Math.floor(i/8)}} 
                                        bind:field_array={fields} 
                                        move_to={fields[Math.floor(i / 8)][i % 8].move_to}
                                        bind:moved={moved}
                                        own_team={own_team}
                                        enemy_team={enemy_team}/>



                        </Highlight>
                    {:else}
                        <Figure     type={fields[Math.floor(i / 8)][i % 8].figure} 
                                    team={fields[Math.floor(i / 8)][i % 8].team}
                                    bind:current_team={current_team}
                                    position={{x: i % 8, y: Math.floor(i/8)}} 
                                    bind:field_array={fields} 
                                    move_to={fields[Math.floor(i / 8)][i % 8].move_to}
                                    bind:moved={moved}
                                    own_team={own_team}
                                    enemy_team={enemy_team}/>
                    

                    {/if}

                {/if}

            </div>


        {:else}
            <div class="square-odd">

                {#if fields[Math.floor(i / 8)][i % 8].figure == "none"}
                    {""} 

                    {#if fields[Math.floor(i / 8)][i % 8].is_highlight}
                        <Highlight  origin={fields[Math.floor(i/8)][i%8].origin} 
                                    position={{x: i % 8, y: Math.floor(i/8)}} 
                                    bind:field_array={fields}/>
   
                    {/if}
                
        
                {:else}

                    {#if fields[Math.floor(i / 8)][i % 8].is_highlight}
                        <Highlight  origin={fields[Math.floor(i/8)][i%8].origin} 
                                    position={{x: i % 8, y: Math.floor(i/8)}} 
                                    bind:field_array={fields}>


                            <Figure     type={fields[Math.floor(i / 8)][i % 8].figure} 
                                        team={fields[Math.floor(i / 8)][i % 8].team}
                                        bind:current_team={current_team}
                                        position={{x: i % 8, y: Math.floor(i/8)}} 
                                        bind:field_array={fields} 
                                        move_to={fields[Math.floor(i / 8)][i % 8].move_to}
                                        bind:moved={moved}
                                        own_team={own_team}
                                        enemy_team={enemy_team}/>



                        </Highlight>
                    {:else}
                        <Figure     type={fields[Math.floor(i / 8)][i % 8].figure} 
                                    team={fields[Math.floor(i / 8)][i % 8].team}
                                    bind:current_team={current_team}
                                    position={{x: i % 8, y: Math.floor(i/8)}} 
                                    bind:field_array={fields} 
                                    move_to={fields[Math.floor(i / 8)][i % 8].move_to}
                                    bind:moved={moved}
                                    own_team={own_team}
                                    enemy_team={enemy_team}/>
                    

                    {/if}

                {/if}


            </div>

        {/if}


      {/each}
    </div>
  </div>


  <div>
        {#if join_screen}
            <div class="GameOverScreen">
                <div class="overlay-container">
                    <button class="overlay-text" on:click={() => send("which team")}>Join</button>
                </div>
                
            </div>
        {/if}
  </div>

</main>

<style>
.board-container
{
    width: 45%;
   

    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
}

.chess-board
{
    display: grid;
    
    grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;

}


.square-even
{


    aspect-ratio: 1 / 1;

    z-index: 0;

    background-color:rgb(255, 196, 129);
}
.square-odd
{

    aspect-ratio: 1 / 1;
    
    z-index: 0;

    background-color:rgb(117, 57, 0);
}

.GameOverScreen
{
    position: absolute;

    z-index: 5;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 400px;
    height: 500px;
}

.overlay-container
{
    width: 100%;
    height: 100%;

    background-color: white;

    border-radius: 10px;

    border: none;
}

.overlay-text
{
    margin: 0 0 0 0;

    font-family: Arial, Helvetica, sans-serif;

    font-size: 40px;

    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
}
</style>
