# Chess-Website

 ## To-Dos

  - [x] choose backend framework in Rust (axum)
  - [x] choose frontend framework (JavaScript + React)
  
  ### Frontend

   - [x] transfer existing JS into React

   - [x] simple forwarding to diffrent route on button click

   - [x] design chess board in html/css

   - [x] placing of the diffrent figures
   - [x] create dict where all images and possible movments of the figures is saved
   - [x] diffrent figures

   - [ ] place all figures on start

   - [x] highlight the possible paths of the figure

   - [x] movement of the figures
   - [x] Bug: wenn auto-fill Figuren an den rechten Rand gehen kommt eine neue Rheie
   - [x] Bug: wenn man 2 Figuren placed wird immer nur bei einer diew Highlights plaziert egal auf welche man klickt
   - [x] Bug: wenn man ein 2. Mal auf die Figur klickt werden somit neue Highlights erstellt, somit entstehen neue Schach Felder
   - [ ] Bug: bei läufern am rechten Rand gehen zwei Highlights über die border in die nächste Reihe
   - [ ] special movements of figures (knight, pawn(start: 2 instead of 1))

  ### Backend

   - [x] implement axum

   - [ ] websockets

   - [ ] get move of the first client (vice versa)
   - [ ] send move to the second client (vice versa)



 ## Idea

  A Website where you can play Chess against a friend, maybe via websockets.
  Only written in Rust!
