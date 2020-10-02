const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {

  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;

  var groundProperties={
    isStatic:true
  }

  var ballProperties={
    restitution:1
  }
  ground=Bodies.rectangle(400,380,800,10,groundProperties);
  World.add(world,ground);

  console.log(ground);

  ball=Bodies.circle(200,200,20,ballProperties);
  World.add(world,ball);

}

function draw() {
  background("black");  
 Engine.update(engine);
  fill ("green");
  rectMode (CENTER);
 rect(ground.position.x,ground.position.y,800,10);

 fill("lightblue");
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
}