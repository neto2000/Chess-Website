<script>
  
  export let origin = {x: 0, y:0};

  export let field_array;

  export let position;

  function move() {
    field_array[origin.y][origin.x].move_to = {bool: true, pos: position}

    field_array = field_array

    console.log("move from ")
  }

</script>

<button class="highlight-button" on:click={move}>
  <img class="highlight-image" src="/images/highlight.svg" alt="">

  <slot></slot>

</button>


<style>

  .highlight-button
  {

      display: inline-block;

      z-index: 2;     
      width: 100%;
      height: 100%;

      border: none;

      background-color: rgba(0,0,0,0);

      position: relative;
      
  }
  .highlight-image 
  {
      max-width: 100%;
      max-height: 100%;

      object-fit: fill;

      z-index: 2;

      position: absolute;

      top: 0;
      left: 0;
  }


</style>
