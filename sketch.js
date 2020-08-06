
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, b2 ,b3;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(900,385,200,20);
	b2 =new Box(800,339,20,100);
	b3 =new Box(1000,339,20,100);
	
	ball1 =new Ball(200,200,10,10);

	ground = new Ground(600,height,1200,20);

	keypressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  b2.display();
  b3.display();
  ball1.display();
  ground.display();
  drawSprites();
 
}

function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.Body, ball1.Body.position, {x:85,y:-85});
	}
}

