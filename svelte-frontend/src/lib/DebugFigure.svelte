<script>
  export let type;

  export let team;


  export let position = {x: 0, y: 0};

  export let field_array;

  export let move_to = {bool: false}


  export let own_team;

  export let enemy_team;
  

  
  $: image_path = "/images/" + team + "-pixel/";


</script>

<button class="figure-button">
  {type + ", " +team}
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
