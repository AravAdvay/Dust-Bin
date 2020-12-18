
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinGreenImg;

function preload()
{
	dustbinGreeenImg=loadImage("Sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(1300,690,200,20);
	dustbin2 = new Dustbin(1200,650,20,100);
	dustbin3 = new Dustbin(1350,575,20,200);
	ground = new Ground(1300,700,2600,10);
	paper = new Paper(200,400,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
  imageMode(CENTER);
  image(dustbinGreeenImg,1300, 540);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-85});
  
	}
}



