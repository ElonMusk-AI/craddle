const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof0;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;;



function setup() {
	createCanvas(windowWidth / 2, windowHeight / 1.5);
	var engine = Engine.create();
	var world = engine.world;

	var canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity ();
	var options = {
		mouse: canvasmouse
	};
	var mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint); 

	roof0 = new roof(width/2, 100, 500, 50);

	ball1 = new ball(400,400,"black");
	ball2 = new ball(500,400,"black");
	ball3 = new ball(600,400,"black");
	ball4 = new ball(700,400,"black");
	ball5 = new ball(800,400,"black");

	rope1 = new Rope(ball1.body, {x:400, y:100});
/** rope2 = new Rope();
	rope3 = new Rope();
	rope4 = new Rope();
	rope5 = new Rope();
*/

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  roof0.display();
  rope1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  rope1.display();
/**   rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
*/

  console.log(ball1.x);
  
  drawSprites();
 
}

function mouseDragged(){
	Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}



