<script>
  
  export let type;

  export let team;

  export let current_team;

  export let position = {x: 0, y: 0};

  export let field_array;

  export let move_to = {bool: false}

  export let moved;

  export let own_team;

  export let enemy_team;

  let clicked = false;


  $: image_path = "/images/" + team + "-pixel/";
  
  $: if(move_to.bool) {
    move_to.bool = false;

    console.log("move figure")

    hide_highlight();
    
    field_array[position.y][position.x] = {figure: "none", is_highlight: false, origin_pos: false};

    field_array[move_to.pos.y][move_to.pos.x] = {figure: type, team: team, move_to: {bool: false}, is_highlight: false, origin_pos: false}
    
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

    if(type == "King") {
      
      for(let i = -1; i<2; i++) {
        place_highlight(-1, i)
      }

      place_highlight(0, -1)
      place_highlight(0, 1)

      for(let i = -1; i<2; i++) {
        place_highlight(1, i)
      }

    }
    else if(type == "Rook") {
      for(let i = -1; i > -8; i--) {
        if(place_highlight(i, 0) == false) break;
      }
      for(let i = 1; i < 8; i++) {
        if(place_highlight(i, 0) == false) break;
      }

      for(let i = -1; i > -8; i--) {
        if(place_highlight(0, i) == false) break;
      }

      for(let i = 1; i < 8; i++) {
        if(place_highlight(0, i) == false) break;
      }

    }
    else if(type == "Bishop") {
      for(let i = -1; i > -8; i--) {
        if(place_highlight(i, i) == false) break;
      }
      for(let i = 1; i < 8; i++) {
        if(place_highlight(i, i) == false) break;
      }

      for(let i = -1; i > -8; i--) {
        if(place_highlight(-i, i) == false) break;
      }

      for(let i = 1; i < 8; i++) {
        if(place_highlight(-i, i) == false) break;
      }

    }
    else if(type == "Queen") {
      
      // diagonal
      for(let i = -1; i > -8; i--) {
        if(place_highlight(i, i) == false) break;
      }
      for(let i = 1; i < 8; i++) {
        if(place_highlight(i, i) == false) break;
      }

      for(let i = -1; i > -8; i--) {
        if(place_highlight(-i, i) == false) break;
      }

      for(let i = 1; i < 8; i++) {
        if(place_highlight(-i, i) == false) break;
      }


      // horizontal
      for(let i = -1; i > -8; i--) {
        if(place_highlight(i, 0) == false) break;
      }
      for(let i = 1; i < 8; i++) {
        if(place_highlight(i, 0) == false) break;
      }

      for(let i = -1; i > -8; i--) {
        if(place_highlight(0, i) == false) break;
      }

      for(let i = 1; i < 8; i++) {
        if(place_highlight(0, i) == false) break;
      }

    }
    else if(type == "Knight") {
      place_highlight(-2, -1);
      place_highlight(-2, 1);

      place_highlight(2, -1);
      place_highlight(2, 1);

      place_highlight(-1, -2);
      place_highlight(1, -2);

      place_highlight(-1, 2);
      place_highlight(1, 2);
    }
    else if(type == "Pawn") {
      
      for(let i = -1; i<2; i += 2) {
        
        if(position.y - 1 < 0 || position.x + i < 0 || position.x + i > 7) {
          continue;
        }


        if(field_array[position.y - 1][position.x + i].team == enemy_team) {
          place_highlight(-1,i);
        }
      }


      

      if(field_array[position.y - 1][position.x].team != enemy_team) {

        if(field_array[position.y][position.x].origin_pos) {
          place_highlight(-2,0)
        }

        place_highlight(-1,0)


      }


      
    }
    else {

      place_highlight(-1,0) 
    }

  }
  function hide_highlight() {

    delete_highlight(-1,0)

  }




  function place_highlight(offset_y, offset_x) {
    
    console.log("PLACE " + offset_y + " " + offset_x)

    if(position.y + offset_y >= 0 && position.y + offset_y <= 7 && position.x + offset_x >= 0 && position.x + offset_x <= 7) {

      if(field_array[position.y + offset_y][position.x + offset_x].team == team) {
        console.log("own team!")
        return false
      }


      field_array[position.y + offset_y][position.x + offset_x].is_highlight = true;
      field_array[position.y + offset_y][position.x + offset_x].origin = position;


      clicked = true;

      
      // check if highlight is on enemy figure and then return false, so you cant hop over figures
      if(field_array[position.y + offset_y][position.x + offset_x].team == enemy_team) {
        return false
      }

      

      return true;
    }
    else {
      console.log("out of bounds!")
      return false;
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
