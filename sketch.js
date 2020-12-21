
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(365,100,500,30);
bobObject1 = new Bob(190,400,40);
bobObject2 = new Bob(270,400,40);
bobObject3 = new Bob(350,400,40);
bobObject4 = new Bob(430,400,40);
bobObject5 = new Bob(510,400,40);

rope1 = new Rope(bobObject1.body,roof.body,-160)
rope2 = new Rope(bobObject2.body,roof.body,-80)
rope3 = new Rope(bobObject3.body,roof.body,0)
rope4 = new Rope(bobObject4.body,roof.body,80)
rope5 = new Rope(bobObject5.body,roof.body,160)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("brown");
  
  drawSprites();
 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-85})
	}
}


