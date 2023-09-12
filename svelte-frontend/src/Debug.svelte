<script>
    import Figure from "./lib/DebugFigure.svelte";
    import Check from "./lib/check.svelte";

    let check_comp;



    let own_team = "white";
    let enemy_team = "black";

    
    let fields = [];

    for(let i = 0; i<8; i++) {
        fields.push([]);

        for(let j = 0; j<8; j++) {
            fields[i].push({figure: "none", move_to: {bool: false}, is_highlight: false, origin_pos: false
            });
        }
    }

    fields[4][4] = {figure: "King", team: own_team, move_to: {bool: false}, is_highlight: false, origin_pos: false}

    fields = fields;


    let add_type = "none";

    let add_y = 0;
    let add_x = 0;

    let add_team = "";


    function place_figure() {
        
        console.log(add_type)
        console.log(add_y)
        console.log(add_x)
        console.log(add_team)



        fields[add_y][add_x] = {figure: add_type, team: add_team, move_to: {bool: false}, is_highlight: false, origin_pos: false}

        fields = fields;

    }




</script>

<main>

<Check bind:this={check_comp} />

<input type="text" bind:value={add_type}>

<button on:click={place_figure}>Place</button>

<button on:click={() => check_comp.check_check(fields, {x: 4, y: 4}, own_team, enemy_team)}>Check</button>

<button on:click={() => check_comp.get_check_prevent_position({x: 4, y: 4})}>Prevent Pos</button>

<br>

<p>Y</p>

<input type="number" bind:value={add_y}>

<p>X</p>

<input type="number" bind:value={add_x}>

<p>Team</p>

<input type="text" bind:value={add_team}>




<div class="board-container">
    <div class="chess-board">
      {#each {length: 64} as _, i}
        {#if (i + Math.floor(i / 8)) % 2 == 0}
            

            <div class="square-even">

                {#if fields[Math.floor(i / 8)][i % 8].figure == "none"}
                    {""} 

                                    
        
                {:else}

                    {#if fields[Math.floor(i / 8)][i % 8].is_highlight}
                        
                            <Figure     type={fields[Math.floor(i / 8)][i % 8].figure} 
                                        team={fields[Math.floor(i / 8)][i % 8].team}
                                        position={{x: i % 8, y: Math.floor(i/8)}} 
                                        bind:field_array={fields} 
                                        move_to={fields[Math.floor(i / 8)][i % 8].move_to}
                                        own_team={own_team}
                                        enemy_team={enemy_team}/>



                    {:else}
                        <Figure     type={fields[Math.floor(i / 8)][i % 8].figure} 
                                    team={fields[Math.floor(i / 8)][i % 8].team}
                                    position={{x: i % 8, y: Math.floor(i/8)}} 
                                    bind:field_array={fields} 
                                    move_to={fields[Math.floor(i / 8)][i % 8].move_to}
                                    own_team={own_team}
                                    enemy_team={enemy_team}/>
                    

                    {/if}

                {/if}

            </div>


        {:else}
            <div class="square-odd">

                {#if fields[Math.floor(i / 8)][i % 8].figure == "none"}
                    {""} 

                                    
        
                {:else}

                    {#if fields[Math.floor(i / 8)][i % 8].is_highlight}
                        
                            <Figure     type={fields[Math.floor(i / 8)][i % 8].figure} 
                                        team={fields[Math.floor(i / 8)][i % 8].team}
                                        position={{x: i % 8, y: Math.floor(i/8)}} 
                                        bind:field_array={fields} 
                                        move_to={fields[Math.floor(i / 8)][i % 8].move_to}
                                        own_team={own_team}
                                        enemy_team={enemy_team}/>



                    {:else}
                        <Figure     type={fields[Math.floor(i / 8)][i % 8].figure} 
                                    team={fields[Math.floor(i / 8)][i % 8].team}
                                    position={{x: i % 8, y: Math.floor(i/8)}} 
                                    bind:field_array={fields} 
                                    move_to={fields[Math.floor(i / 8)][i % 8].move_to}
                                    own_team={own_team}
                                    enemy_team={enemy_team}/>
                    

                    {/if}

                {/if}


            </div>

        {/if}


      {/each}
    </div>
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

