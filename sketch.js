const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new paper(40,670,50);
	ground = new Ground(width/2,height-20,width,20);
	dustbin = new Dustbin(height-80,670,200,200);

	boxLeftBody = Bodies.rectangle(540,580,10,180,{isStatic:true});
	World.add(world,boxLeftBody);

	boxRightBody = Bodies.rectangle(700,580,10,180,{isStatic:true});
	World.add(world,boxRightBody);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine);
   
  paperball.display();
  dustbin.display();
  ground.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:40,y:-55});
	}
}

