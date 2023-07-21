<script>
  

  function show_highlight() {
    console.log("show highlight")
  }

</script>




<button class="figure-button" on:click={show_highlight}>
  <img class="figure-image" src="/images/black-pixel/Pawn.png" alt=""> 
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

      object-fit: fill;
  }


</style>
