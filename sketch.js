const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events
var umbrella,umbrella_IMG;
var thunder, thunder_IMG;
var drops = [];
function preload(){
  thunder_IMG = loadImage("thunder.jpg");
  umbrella_IMG = loadImage("umbrella.png");
}
function setup(){
  createCanvas(300,1000);
  engine = Engine.create();
  world = engine.world;
  umbrella = createSprite(150,500);
  thunder = createSprite(150,50);
}
function draw(){
  background("white")
  umbrella.addImage(umbrella_IMG);
  thunder.addImage(thunder_IMG);
  thunder.scale = 0.2;
  Engine.update(engine); 
  if(frameCount%20===0){
    drops.push(new drop(random(width/2-30,width/2+30), 10,10));
  } 
  for (var j = 0; j < drops.length; j++) {
    drops[j].display();
  }
  drawSprites();
}