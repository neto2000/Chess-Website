let check_list = [false]


function check_check(field_array, position, enemy_team, own_team) {


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
    if(check_position("Rook",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y}) == false) break;

    if(check_position("Queen",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y}) == false) break;
  }
  for(let i = 1; i < 8; i++) {
    if(check_position("Rook",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y}) == false) break;

    if(check_position("Queen",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y}) == false) break;

  }

  for(let i = -1; i > -8; i--) {
    if(check_position("Rook",  own_team, enemy_team, field_array, {x: position.x, y: position.y + i}) == false) break;

    if(check_position("Queen",  own_team, enemy_team, field_array, {x: position.x, y: position.y + i}) == false) break;

  }

  for(let i = 1; i < 8; i++) {
    if(check_position("Rook",  own_team, enemy_team, field_array, {x: position.x, y: position.y + i}) == false) break;

    if(check_position("Queen",  own_team, enemy_team, field_array, {x: position.x, y: position.y + i}) == false) break;

  }

  





  for(let i = -1; i > -8; i--) {
    if(check_position("Bishop",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y + i}) == false) break;

    if(check_position("Queen",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y + i}) == false) break;
  }
  for(let i = 1; i < 8; i++) {
    if(check_position("Bishop",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y + i}) == false) break;

    if(check_position("Queen",  own_team, enemy_team, field_array, {x: position.x + i, y: position.y + i}) == false) break;

  }

  for(let i = -1; i > -8; i--) {
    if(check_position("Bishop",  own_team, enemy_team, field_array, {x: position.x - i, y: position.y + i}) == false) break;

    if(check_position("Queen",  own_team, enemy_team, field_array, {x: position.x - i, y: position.y + i}) == false) break;

  }

  for(let i = 1; i < 8; i++) {
    if(check_position("Bishop",  own_team, enemy_team, field_array, {x: position.x - i, y: position.y + i}) == false) break;

    if(check_position("Queen",  own_team, enemy_team, field_array, {x: position.x - i, y: position.y + i}) == false) break;

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

  if(position.y < 0 && position.y > 7 && position.x < 0 && position.y > 7) {
    return false
  }

  if(field_array[position.y][position.x].team == own_team) {
    console.log("own team!")
    return false
  }

  if(field_array[position.y][position.x].type == type && field_array[position.y][position.x].team == enemy_team) {
      check_list[0] = true

      check_list.push({type: "King", pos: position})
  }

  if(field_array[position.y][position.x].team == enemy_team) {
      return false  
  }

      

  return true;


}


