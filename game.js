class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      skateBoard1 = createSprite(100,200);
      skateBoard1.addImage("green", skateImg1);
      skateBoard2 = createSprite(300,200);
      skateBoard2.addImage("red", skateImg2);
      skateBoards = [skateBoard1, skateBoard2];
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
              background(rgb(198,135,103));
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
  
        var index = 0;

        var x = 0;
        var y;
  
        for(var plr in allPlayers){
          index = index + 1 ;
          
          x = x + 450;
          y = displayHeight - allPlayers[plr].distance;
          skateBoards[index-1].x = x;
          skateBoards[index-1].y = y;
  
          if (index === player.index){
            skateBoards[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = skateBoards[index-1].y
          }
        }
  
      }

      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance>3450){
        gameState=2
      }
  
      drawSprites();
    }
  
    end(){
      console.log("game has ended");
    }
    
}