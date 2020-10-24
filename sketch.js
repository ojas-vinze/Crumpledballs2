
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	dustbinimg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new paper(40,670,20);
	ground = new Ground(width/2,height-20,width,20);


	Engine.run(engine);
	dustbin1 = new dustbin(height-80,670,100,20);
	dustbin2 = new dustbin(height-80-59,670-70,20,120);
	dustbin3 = new dustbin(height-80+59,670-70,20,120);
	dustbin4 = new dustbin(0,0,100,150);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
   
  paperball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:60,y:-65});
	}
}

