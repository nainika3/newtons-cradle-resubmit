const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,300,20,roof_options);
    World.add(world,roof);

   var bob_options={
	   isStatic:true,
	   restitution:1,
		friction:0,
		density:0.8
   }

	bob1=Bodies.circle(300,400,50,bob_options);
	bob2=Bodies.circle(350,400,50,bob_options);
	bob3=Bodies.circle(400,400,50,bob_options);
	bob4=Bodies.circle(450,400,50,bob_options);
	bob5=Bodies.circle(500,400,50,bob_options);
	World.add(world,bob1);
	World.add(world,bob2);
	World.add(world,bob3);
	World.add(world,bob4);
	World.add(world,bob5);

     rope1=new rope(bob1,roof,-80,10);
	 rope2=new rope(bob1,roof,-40,10);
	 rope3=new rope(bob1,roof,0,10);
	 rope4=new rope(bob1,roof,40,10);
	 rope5=new rope(bob1,roof,80,10);



	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,300,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,50);
  ellipse(bob2.position.x,bob1.position.y,50);
  ellipse(bob3.position.x,bob1.position.y,50);
  ellipse(bob4.position.x,bob1.position.y,50);
  ellipse(bob5.position.x,bob1.position.y,50);



}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){

	if(keyCode===UP_ARROW){
		
	Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});

	}
}