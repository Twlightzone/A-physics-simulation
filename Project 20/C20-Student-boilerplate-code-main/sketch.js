
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle1=50;
var angle2=100;
var angle3=150;
var poly;




function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1,
    frictionAir:0.01,
    friction:0.02,
  }
   
   var ground_options ={
     isStatic: true
   };
   var ground_options2 ={
    isStatic: true
  };
  var ground_options3 ={
    isStatic: true
  };
  

  ground = Bodies.rectangle(400,790,800,20,ground_options);
  World.add(world,ground);
  ground2 = Bodies.rectangle(600,500,300,20,ground_options2);
  World.add(world,ground2);
  ground3 = Bodies.rectangle(200,500,300,20,ground_options3);
  World.add(world,ground3);
  rotator = Bodies.rectangle(400,400,20,200,ground_options3);
  World.add(world,rotator);
  rotator2 = Bodies.rectangle(400,400,20,200,ground_options3);
  World.add(world,rotator);
  rotator3 = Bodies.rectangle(400,400,20,200,ground_options3);
  World.add(world,rotator);



  ball = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball5);
  ball6 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball6);
  ball7 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball7);
  ball8 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball8);
  ball9 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball9);

  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
  ellipse(ball6.position.x,ball6.position.y,20);
  ellipse(ball7.position.x,ball7.position.y,20);
  ellipse(ball8.position.x,ball8.position.y,20);
  ellipse(ball9.position.x,ball9.position.y,20);

  rect(ground.position.x,ground.position.y,800,20);
  rect(ground2.position.x,ground2.position.y,300,20);
  rect(ground3.position.x,ground3.position.y,300,20);

  //Making da spinne bois
  Matter.Body.rotate(rotator,angle1);
  push();
  translate(rotator.position.x,rotator.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
angle1+=0.4;
Matter.Body.rotate(rotator2,angle2);
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle2+=-0.4;
Matter.Body.rotate(rotator3,angle3);
push();
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
rect(0,0,150,20);
pop();
angle3+=0.4;
 


  
  
}

