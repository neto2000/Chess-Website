<script>

  let check_list = [false]



  export const check_check = (field_array,position ,own_team, enemy_team) => {

  

    check_position("Pawn", own_team, enemy_team, field_array, {x: position.x -1, y: position.y -1})

    
    check_position("Pawn",  own_team, enemy_team, field_array, {x: position.x +1, y: position.y -1})
    


    for(let y=-1; y<2; y++) {
      for(let x=-1; x<2; x++) {
        
        if(x == 0 && y == 0) {
          continue
        }

           
        check_position("King",  own_team, enemy_team, field_array, {x: position.x + x, y: position.y + y})


      }
    }


    
    for(let i = -1; i > -8; i--) {
      let r = check_position("Rook",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y});

      let q = check_position("Queen",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y});

      if(!q && !r) {
        break
      }
    }
    for(let i = 1; i < 8; i++) {
      let r = check_position("Rook",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y})

      let q = check_position("Queen",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y})
      
      if(!q && !r) {
        break
      }
    }

    for(let i = -1; i > -8; i--) {
      let r = check_position("Rook",  own_team, enemy_team, field_array, {x: position.x, y: position.y + i})

      let q = check_position("Queen",  own_team, enemy_team, field_array, {x: position.x, y: position.y + i})
  
      if(!q && !r) {
        break
      }
    }

    for(let i = 1; i < 8; i++) {
      let r = check_position("Rook",  own_team, enemy_team, field_array, {x: position.x, y: position.y + i})

      let q = check_position("Queen",  own_team, enemy_team, field_array, {x: position.x, y: position.y + i})
      
      if(!q && !r) {
        break
      }
    }

    





    for(let i = -1; i > -8; i--) {
      let b = check_position("Bishop",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y + i})

      let q = check_position("Queen",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y + i})

      if(!q && !b) {
        break
      }
    }
    for(let i = 1; i < 8; i++) {
      let b = check_position("Bishop",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y + i})

      let q = check_position("Queen",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y + i}) 
      
      if(!q && !b) {
        break
      }
    }

    for(let i = -1; i > -8; i--) {
      let b = check_position("Bishop",  own_team, enemy_team, field_array, {x: position.x - i, y: position.y + i})

      let q = check_position("Queen",  own_team, enemy_team, field_array, {x: position.x - i, y: position.y + i}) 

      if(!q && !b) {
        break
      }

    }

    for(let i = 1; i < 8; i++) {
      let b = check_position("Bishop",  own_team, enemy_team, field_array, {x: position.x - i, y: position.y + i})

      let q = check_position("Queen",  own_team, enemy_team, field_array, {x: position.x - i, y: position.y + i})
      if(!q && !b) {
        break
      }
    }


    check_position("Knight",  own_team, enemy_team, field_array, {x: position.x - 2, y: position.y + 1})
    check_position("Knight",  own_team, enemy_team, field_array, {x: position.x - 2, y: position.y - 1})

    check_position("Knight",  own_team, enemy_team, field_array, {x: position.x + 2, y: position.y + 1})
    check_position("Knight",  own_team, enemy_team, field_array, {x: position.x + 2, y: position.y - 1})

    check_position("Knight",  own_team, enemy_team, field_array, {x: position.x - 1, y: position.y + 2})
    check_position("Knight",  own_team, enemy_team, field_array, {x: position.x + 1, y: position.y + 2})

    check_position("Knight",  own_team, enemy_team, field_array, {x: position.x - 1, y: position.y - 2})
    check_position("Knight",  own_team, enemy_team, field_array, {x: position.x + 1, y: position.y - 2})





  }


  function check_position(type, own_team,enemy_team, field_array, position) {

    if(position.y < 0 || position.y > 7 || position.x < 0 || position.x > 7) {
      
      console.log("over borders!")

      return false
    }

    //console.log("Y: " + position.y + ", " + "X: " + position.x);

    if(field_array[position.y][position.x].team == own_team) {

      console.log("own team!")

      return false
    }

    if(field_array[position.y][position.x].figure == type && field_array[position.y][position.x].team == enemy_team) {
      console.log("chess")  

      check_list[0] = true

        check_list.push({type: type, pos: position})


        console.log(check_list)
    }


    if(field_array[position.y][position.x].team == enemy_team) {
        return false  
    }



    return true;


  }

  export const get_check_prevent_position = (king_position) => {

    let prevent_position = []

    for (let i = 0; i < check_list.length; i++) {
      prevent_position.push(check_list[i].pos)

      if (check_list[i].type == "Queen" || check_list[i].type == "Rook" || check_list[i].type == "Bishop") {
        
        // vertical
        if (check_list[i].pos.x == king_position.x) {
          
          if (check_list[i].pos.y > king_position.y) {
            for (let y_pos = king_position.y + 1; y_pos < check_list[i].pos.y; y_pos++) {
              prevent_position.push({x: king_position.x, y: y_pos})                                                             
            }
          }
          else {
            for (let y_pos = check_list[i].pos.y + 1; y_pos < king_position.y; y_pos++) {
              prevent_position.push({x: king_position.x, y: y_pos})                                                             
            }
          }

          continue
        }
        // horizontal
        if (check_list[i].pos.y == king_position.y) {
          
          if (check_list[i].pos.x > king_position.x) {
            for (let x_pos = king_position.x + 1; x_pos < check_list[i].pos.x; x_pos++) {
              prevent_position.push({y: king_position.y, x: x_pos})                                                             
            }
          }
          else {
            for (let x_pos = check_list[i].pos.x + 1; x_pos < king_position.x; x_pos++) {
              prevent_position.push({y: king_position.y, x: x_pos})                                                             
            }
          }


          continue
        }
        
        //diagonal
        
        if (check_list[i].pos.y > king_position.y && check_list[i].pos.x > king_position.x) {
          for(let diff = 1; king_position.x + diff < check_list[i].pos.x; diff++) {
            prevent_position.push({x: king_position.x + diff, y: king_position.y + diff})
          }
        }
        if (check_list[i].pos.y < king_position.y && check_list[i].pos.x < king_position.x) {
          for(let diff = 1; diff + check_list[i].pos.x < king_position.x; diff++) {
            prevent_position.push({x: check_list[i].pos.x + diff, y: check_list[i].pos.y + diff})
          }
        }
        if (check_list[i].pos.y > king_position.y && check_list[i].pos.x < king_position.x) {
          for(let diff = 1; diff + check_list[i].pos.x < king_position.x; diff++) {
            prevent_position.push({x: king_position.x - diff, y: king_position.y + diff})
          }
        }
        if (check_list[i].pos.y < king_position.y && check_list[i].pos.x > king_position.x) {
          for(let diff = 1; king_position.x + diff < check_list[i].pos.x; diff++) {
            prevent_position.push({x: king_position.x + diff, y: king_position.y - diff})
          }
        }


      }
      
    }

    console.log(prevent_position)

  }


</script>
