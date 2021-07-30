
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground 
var box1
var dustbin


function preload() {
  dustbin = loadImage("trashcan.png")
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,790,800,10)
	box1 = new Box(760,735,10,100)
	box2 = new Box(650,735,10,100)
	box3 = new Box(710,780,110,10)
	ball1 = new Ball(50,700,50)
	

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();
  ground.show()
  box1.show()
  box2.show()
  box3.show()
  ball1.show()
  
  image(dustbin,600,615,200,200)

  if (keyDown(UP_ARROW)){
	  Matter.Body.applyForce(ball1.ball,ball1.ball.position,{x:0.1,y:-0.05})
  }
}



