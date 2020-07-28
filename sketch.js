const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;

function setup() {
  engine = Engine.create();
  world = engine.world;

  cnv = createCanvas(400,400);

 g = new ground(300,340,600,15);
}

function draw() {

 background("yellow");  

 Engine.update(engine);
 if(mouseIsPressed)
 {
  box = new tile(mouseX,mouseY,50,50);
  box.display();
 }
 g.display();
 
}
