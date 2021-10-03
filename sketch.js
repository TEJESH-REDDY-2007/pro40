var canvas, backgroundImage;
var playerCount, database, allPlayers;
var gameState = 0;
var distance = 0;
var form, player, game;
var skateBoard1, skateBoard2, skateBoards;
var skateImg1, skateImg2, track;

function preload() {
   skateImg1 = loadImage("green.png");
   skateImg2 = loadImage("red.png");
   track = loadImage("track.png");
}


function setup() {
canvas = createCanvas(displayWidth-4, displayHeight-112);
database = firebase.database();
game = new Game();
game.getState();
game.start();
}


function draw() { 
  text("check the console when you reach the edge", 100, 100)
  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
    game.update(2);
  }

//  drawSprites();
}



