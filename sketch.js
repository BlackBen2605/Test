const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var g1;
var s1,s2;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,
b21,b22,b23,b24,b25;

var chain;
var hex1;
var ball;
var hexImg;
var score = 0;
function preload() {

  hexImg = loadImage("hexagon.png");
}



function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
 
  g1 = new Ground(400,399,1750,50);
  s1 = new Ground(355,300,215,10);
  s2 = new Ground(600,200,150,10);

  b1 = new Box(265,260,30,40);
  b2 = new Box(295,260,30,40);
  b3 = new Box(325,260,30,40);
  b4 = new Box(355,260,30,40);
  b5 = new Box(385,260,30,40);
  b6 = new Box(415,260,30,40);
  b7 = new Box(445,260,30,40);
  b8 = new Box(295,220,30,40);
  b9 = new Box(325,220,30,40);
  b10 = new Box(355,220,30,40);
  b11 = new Box(385,220,30,40);
  b12 = new Box(415,220,30,40);
  b13 = new Box(325,170,30,40);
  b14 = new Box(355,170,30,40);
  b15 = new Box(385,170,30,40);
  b16 = new Box(355,130,30,40);
  b17 = new Box(540,165,30,40);
  b18 = new Box(570,165,30,40);
  b19 = new Box(600,165,30,40);
  b20 = new Box(630,165,30,40);
  b21 = new Box(660,165,30,40);
  b22 = new Box(570,125,30,40);
  b23 = new Box(600,125,30,40);
  b24 = new Box(630,125,30,40);
  b25 = new Box(600,85,30,40);

  hex1 = new Hex(55, 190, 30, 30);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  chain = new SlingShot(this.ball,{x:100, y:200});

}

function draw() {

  background("black");
  fill("yellow");
  textSize(25);
  text("Score: "+score,50,100)

  Engine.update(engine); 
  
  
  push();
  stroke("blue");
  strokeWeight(2);
  fill("red")
  textSize(20);
  text("Drag the hexagonal stone and release it to launch it towards the tower blocks and destroy them", 30, 50);
  pop();

  push();
  stroke("blue");
  strokeWeight(2.5);
  fill("red");
  textSize(20);
  text("Press Space to Try Again!", 700, 300);
  pop();

  g1.display();
  s1.display();
  s2.display();
push()
  fill("blue");
  b1.display();
  
  b2.display();
  
  b3.display();
 
  b4.display();
  
  b5.display();
  
  b6.display();
  
  b7.display();
  

  fill("yellow");
  b8.display();
 
  b9.display();
  
  b10.display();
  
  b11.display();
  
  b12.display();
  

  fill("orange");
  b13.display();
  
  b14.display();
 
  b15.display();


  fill("pink");
  b16.display();
 

  fill("red");
  b17.display();
  
  b18.display();
 
  b19.display();
  
  b20.display();
 
  b21.display();
  

  fill("green");
  b22.display();
  
  b23.display();
 
  b24.display();
 

  fill("purple")
  b25.display();
  pop()

  imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y, 50, 45);

  chain.display();
  
  push()
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  b18.score();
  b19.score();
  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score();
pop()
  

  drawSprites();
}

function mouseDragged() {

  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();

}


function keyPressed() {

	if(keyCode=== 32) {
		chain.attach(this.ball);
  }
  
}