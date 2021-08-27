var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg1 = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//creating boy running




}


function draw() {
  background(0);
 rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
 

spawnapple();

  drawSprites();
}


function spawnapple(){
  if(frameCount % 50 ===0){
    apple = createSprite(200,10,30,30);
    apple.addImage(appleimg1)
    apple.scale= 0.1
    apple.velocityY=5;
    apple.x=Math.round(random(1,390));
    apple.lifetime=400;
  }
}




