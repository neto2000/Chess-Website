<script>
  
  export let type;

  export let team;

  export let current_team;

  export let position = {x: 0, y: 0};

  export let field_array;

  export let move_to = {bool: false}

  export let moved;

  export let own_team;

  let clicked = false;


  $: image_path = "/images/" + team + "-pixel/";
  
  $: if(move_to.bool) {
    move_to.bool = false;

    console.log("move figure")

    hide_highlight();
    
    field_array[position.y][position.x] = {figure: "none", is_highlight: false};

    field_array[move_to.pos.y][move_to.pos.x] = {figure: type, team: team, move_to: {bool: false}, is_highlight: false}
    
    moved = {bool: true, old_pos: position, new_pos: move_to.pos};

  }



  function button_clicked() {
    
    if(current_team != team || own_team != team) {
      console.log("cur: " + current_team + ", team: " + team);
      return
    }


    if (clicked) {
      hide_highlight();

    }
    else {
      show_highlight();

    }
  }
  function show_highlight() {

    console.log("show highlight")
    place_highlight(-1,0) 
  }
  function hide_highlight() {

    delete_highlight(-1,0)

  }




  function place_highlight(offset_y, offset_x) {

    if(position.y + offset_y >= 0 && position.y + offset_y <= 8 && position.x + offset_x >= 0 && position.x + offset_x <= 8) {

      if(field_array[position.y + offset_y][position.x + offset_x].team == team) {
        return
      }


      field_array[position.y + offset_y][position.x + offset_x].is_highlight = true;
      field_array[position.y + offset_y][position.x + offset_x].origin = position;


      clicked = true;
    }
  }

  function delete_highlight(offset_y, offset_x) {
    

    if(position.y + offset_y >= 0 && position.y + offset_y <= 8 && position.x + offset_x >= 0 && position.x + offset_x <= 8) {
      
      if(field_array[position.y + offset_y][position.x + offset_x].team == team) {
        return
      }

      field_array[position.y + offset_y][position.x + offset_x].is_highlight = false;


      clicked = false;
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
