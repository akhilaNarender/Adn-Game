var player;

gameState = 0;

function preload() {
  caveImg = loadImage("cave image.jpg");
  startingCaveImg = loadImage("cave opening image.jpg");
  flockOfBats1 = loadImage("flock of bats 1.jpg");
  flockOfBats2 = loadImage("flock of bats 2.jpg");
  flockOfBats3 = loadImage("flock of bats 3.jpg");
  playerImg = loadImage("player image.png");
  startButtonImg = loadImage("start button.png");
}

function setup() {
  createCanvas(800,500);
  caveImage = createSprite(390,250,770,500);
  caveImage.addImage(caveImg);
  caveImage.scale = 1.3;
  caveImage.x = caveImage.width/2;
  caveImage.visible = true;

  startButton = createSprite(400,320);
  startButton.addImage(startButtonImg);
  startButton.scale = 0.25;

  player = createSprite(200,325);
    player.addImage(playerImg);
    player.scale = 0.3;
    player.visible=false;

    invisibleGround = createSprite(370,450,770,10);
  invisibleGround.visible = false;


  
}

function draw() {
  //background(caveImg);
  player.collide(invisibleGround);
  
 
  
  
  if(mousePressedOver(startButton)) {
    gameState = 1;
    startButton.visible = false;
  }
  if(gameState === 1) {
    caveImage.velocityX = -3;
    if(caveImage.x < 0) {
      caveImage.x = caveImage.width/2;
    }

    player.visible=true;

    if(keyDown("space") && player.y>200) {
      player.velocityY = -15;
    }
     
    player.velocityY = player.velocityY + 0.8

  }

  drawSprites();

  if(gameState === 0) {
    textSize(24);
    fill("white");
    text ("Avoid the obstacles to reach the treasure!", 200,200);
    textSize(20);
    text ("Click the start button to start", 275,250);
    
  }
}
