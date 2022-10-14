
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,l,r;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,restitution:0.3,friction:0,density:1.2
	}
	ball=Bodies.circle(80,20,20,ball_options);
	World.add(world,ball)
	Engine.run(engine);
	ground=new Ground(600,690,1200,20);
	l=new Ground(950,650,20,100);
	r=new Ground(1100,650,20,100);

  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,20)
  ground.display();
  l.display();
  r.display();
 
}

function keyReleased(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



