const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backimage;
var person;
function preload() {
 backimage = loadImage("snow1.jpg");

}
function setup() {
  createCanvas(800,400); 
  engine = Engine.create();
  world = engine.world;
  person = createSprite(300, 300, 50, 50);
  snow = new Snow(random(1, 800), random(1, 400), 30)
}

function draw() {
  background(backimage);  
  Engine.update(engine);
  if(keyDown("w")) {
    person.x = person.x + 2;
  }
  if(keyDown("s")) {
    person.x = person.x - 2;
  }
  snow.display()
  drawSprites();
}