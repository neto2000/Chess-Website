# Chess-Website

 ## To-Dos

  - [x] choose backend framework in Rust (axum)
  - [x] choose frontend framework (JavaScript + React)
  
  ### Frontend
   - [x] implement turn system with websocket
   - [x] compute each position a figure can move to and place a highlight (maybe in extra file)

   - [ ] only show highlights of current figure (delete the other ones)

   - [ ] king movement does not be affected by prevent positions

   - [x] Queen/King start placement are not the same on both colors 

   - [x] implement check (integrate check.svelte in App.svelte)

    - [x] function to check if a position is in Check
    - [x] function which calculates all positions which can prevent the Chess

   - [ ] implement checkmate and game over

    - [ ] Gameover if no figure is able to move

   - [ ] implement written tests to test complicated movement (in Debug.svelte)

   - [ ] create Game Full Screen
   - [ ] create Gameover Screen
   
  ### Backend

   

 ## Idea

  A Website where you can play Chess against a friend via websockets.
  Backend written in Rust with axum.
  Frontend written in Svelte
