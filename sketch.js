const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1;
var button2;

function setup() {
  createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;

  button1 = createImg("right.png");
  button1.position(220, 30);
  button1.size(50, 50);
  button1.mouseClicked(hForce);

  button2 = createImg("up.png");
  button2.position(120, 30);
  button2.size(50, 50);
  button2.mouseClicked(vForce);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
  restitution : 0.95,
  frictionAir : 0.8
  }

 ball = Bodies.circle(200, 200, 40, ball_options);
 World.add(world, ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 

{
  background(51);
  ellipse(ball.position.x, ball.position.y, 40);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

//function to apply force horizontally
function hForce(){
 Matter.Body.applyForce(ball, {x : 0, y : 0}, {x : 0.05, y : 0});
}

//function to apply force vertically
function vForce(){
  Matter.Body.applyForce(ball, {x : 0, y : 0}, {x : 0, y : -0.05});
 }

