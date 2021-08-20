const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

function setup() {
  createCanvas(displayWidth,displayHeight);
  

  engine=Engine.create()
  world=engine.world
  Engine.run(engine)

  bird1=new Bird()
}

function draw() {
  background(0);  
  drawSprites();
  bird1.display()

  if(keyDown("W")) {
    bird1.body.velocityY=-12;
  }
}

