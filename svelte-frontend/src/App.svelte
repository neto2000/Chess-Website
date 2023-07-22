<script>
    import Figure from './lib/Figure.svelte'
    import Highlight from './lib/Highlight.svelte'
    
    import { onMount } from 'svelte';
    import WS from './ws.js'


    const ws = WS();

    
    const response = ws.getResponse()

    $: up_response = $response.toString()

    $: {
        console.log(up_response)
        
        if (up_response == "black") {
            set_own_figures("black");
            set_enemy_figures("white");
        }
        else if (up_response == "white") {
            set_own_figures("white");
            set_enemy_figures("black");

        }
        else if (up_response == "none") {
            game_full_screen = true;
        }
        else {
            // execute move
        }
    }

    let join_screen = true;

    let game_full_screen = false;

    let current_team = "white";


    function send(message) {

        if(message == "which team") {
            join_screen = false;

        }

        ws.sendMessage(message)
    }



    function set_own_figures(color) {
        for(let i = 0; i<8; i++) {
            fields[6][i] = {figure: "Pawn", team: color, move_to: {bool:false}}
        }

        fields[7][0] = fields[7][7] = {figure: "Rook", team: color, move_to: {bool:false}}
        fields[7][1] = fields[7][6] = {figure: "Knight", team: color, move_to: {bool:false}}
        fields[7][2] = fields[7][5] = {figure: "Bishop", team: color, move_to: {bool:false}}

        fields[7][3] = {figure: "Queen", team: color, move_to: {bool:false}}
        fields[7][4] = {figure: "King", team: color, move_to: {bool:false}}

    }

    function set_enemy_figures(color) {
        for(let i = 0; i<8; i++) {
            fields[1][i] = {figure: "Pawn", team: color, move_to: {bool:false}}
        }

        fields[0][0] = fields[0][7] = {figure: "Rook", team: color, move_to: {bool:false}}
        fields[0][1] = fields[0][6] = {figure: "Knight", team: color, move_to: {bool:false}}
        fields[0][2] = fields[0][5] = {figure: "Bishop", team: color, move_to: {bool:false}}

        fields[0][3] = {figure: "Queen", team: color, move_to: {bool:false}}
        fields[0][4] = {figure: "King", team: color, move_to: {bool:false}}


    }






    let fields = [];

    for(let i = 0; i<8; i++) {
        fields.push([]);

        for(let j = 0; j<8; j++) {
            fields[i].push({figure: "none", move_to: {bool: false}});
        }
    }

    fields[7][0].figure = "Pawn";

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
                
                {:else if fields[Math.floor(i / 8)][i % 8].figure == "highlight"}
                    
                    <Highlight  origin={fields[Math.floor(i/8)][i%8].origin} 
                                position={{x: i % 8, y: Math.floor(i/8)}} 
                                bind:field_array={fields}/>

                {:else}

                    <Figure     type={fields[Math.floor(i / 8)][i % 8].figure} 
                                team={fields[Math.floor(i / 8)][i % 8].team}
                                bind:current_team={current_team}
                                position={{x: i % 8, y: Math.floor(i/8)}} 
                                bind:field_array={fields} 
                                move_to={fields[Math.floor(i / 8)][i % 8].move_to}/>

                {/if}

            </div>


        {:else}
            <div class="square-odd">

                {#if fields[Math.floor(i / 8)][i % 8].figure == "none"}
                    {""} 
                
                {:else if fields[Math.floor(i / 8)][i % 8].figure == "highlight"}
                    
                    <Highlight  origin={fields[Math.floor(i/8)][i%8].origin} 
                                position={{x: i % 8, y: Math.floor(i/8)}} 
                                bind:field_array={fields}/>

                {:else}

                    <Figure     type={fields[Math.floor(i / 8)][i % 8].figure} 
                                team={fields[Math.floor(i / 8)][i % 8].team}
                                bind:current_team={current_team}
                                position={{x: i % 8, y: Math.floor(i/8)}} 
                                bind:field_array={fields} 
                                move_to={fields[Math.floor(i / 8)][i % 8].move_to}/>

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
