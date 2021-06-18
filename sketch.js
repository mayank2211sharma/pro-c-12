var boy ,boy_running  ;
var path ,invisible_path , pathImage ;
var coin , coinImage ;

function preload(){
  //pre-load images
  boy_running = loadAnimation("runner-1.png","runner-2.png");
  pathImage = loadImage("path.png");
  coinImage = loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage("path.png",pathImage);
  path.velocityY=5;
  path.y=path.height/30;

  boy = createSprite(185,300)
  boy.addAnimation("running",boy_running);
  boy.scale = 0.1;

  
  
}

function draw() {
  background(200);
  path.velocityY=5;
  if(path.y>400) 
  path.y=height/2 ;

  

drawSprites();
}
