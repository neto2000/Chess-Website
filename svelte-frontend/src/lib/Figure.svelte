<script>
  
  export let type;

  export let team;

  export let current_team;

  export let position = {x: 0, y: 0};

  export let field_array;

  export let move_to = {bool: false}


  let clicked = false;


  $: image_path = "/images/" + team + "-pixel/";
  
  $: if(move_to.bool) {
    move_to.bool = false;

    hide_highlight();
    
    console.log(position);

    field_array[position.y][position.x] = {figure: "none"};

    field_array[move_to.pos.y][move_to.pos.x] = {figure: type, team: team, move_to: {bool: false}}
  
  }



  function button_clicked() {
    
    if(current_team != team) {
      console.log("cur: " + current_team + ", team: " + team);
      return
    }


    if (clicked) {
      hide_highlight();

      clicked = false;
    }
    else {
      show_highlight();

      clicked = true;
    }
  }
  function show_highlight() {

    console.log("show highlight")
    if(position.y - 1 >= 0) {
      field_array[position.y - 1][position.x] = {figure: "highlight", origin: position}
    }
  }


  function hide_highlight() {

    if(position.y - 1 >= 0) {
      field_array[position.y - 1][position.x] = {figure: "none"}
    }
  }


  

</script>




<button class="figure-button" on:click={button_clicked}>
  <img class="figure-image" src={image_path + type + ".png"} alt=""> 
</button>



<style>
  .figure-button
  {
     
      width: 100%;
      height: 100%;

      border: none;

      background-color: rgba(0,0,0,0);

      position: relative;
      
  }

  .figure-image
  {
      max-width: 100%;
      max-height: 100%;

      width: 90%;
     
      image-rendering: pixelated;

      object-fit: fill;
  }


</style>
