var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var backgroundImage;
var particles = [];

var divisionHeight=300;
var score =0;

function preload(){
  backgroundImg=loadImage("snow1.jpg");

}





function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  


   

    
}
 


function draw() {
  background(backgroundImg);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  
   
     
   
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
  
}