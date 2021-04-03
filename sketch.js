const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var count = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white")
 text("Score : "+score,20,30);
 text(mouseX+"," + mouseY, 30, 65)
 text("Lives: "+count, 20, 90)

 text("0", 20, 550)
 text("50", 100, 550)
 text("100", 180, 550)
 text("250", 260, 550)
 text("500", 340, 550)
 text("500", 420, 550)
 text("250", 500, 550)
 text("100", 580, 550)
 text("50", 660, 550)
 text("0", 740, 550)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
 
  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760&& particle.body.position.x<800 && particle.body.position.x>730){
      particle=null;
      count = count+1;
    }
  }

   if(particle!=null){
     particle.display()
     if(particle.body.position.y>760&& particle.body.position.x<723 && particle.body.position.x>650){
       score=score+50;
       particle=null;
       count = count+1;
     }
   }

   if(particle!=null){
    particle.display()
    if(particle.body.position.y>760&& particle.body.position.x<645 && particle.body.position.x>565){
      score=score+100;
      particle=null;
      count = count+1;
    }
  }

  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760&& particle.body.position.x<565 && particle.body.position.x>490){
      score=score+250;
      particle=null;
      count = count+1;
    }
  }

  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760&& particle.body.position.x<490 && particle.body.position.x>405){
      score=score+500;
      particle=null;
      count = count+1;
    }
  }

  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760&& particle.body.position.x<405 && particle.body.position.x>325){
      score=score+500;
      particle=null;
      count = count+1;
    }
  }

  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760&& particle.body.position.x<325 && particle.body.position.x>250){
      score=score+250;
      particle=null;
      count = count+1;
    }
  }

  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760&& particle.body.position.x<250 && particle.body.position.x>170){
      score=score+100;
      particle=null;
      count = count+1;
    }
  }

  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760&& particle.body.position.x<163 && particle.body.position.x>85){
      score=score+50;
      particle=null;
      count = count+1;
    }
  }

  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760&& particle.body.position.x<85 && particle.body.position.x>0){
      particle=null;
      count = count+1;
    }
  }

  if(count === 5){
    gameState = "end" 
    textSize(30)
    text("Game is Over", 290, 130)
   }

}

function mouseReleased() {
  if (gameState==="play"){
    particle =new Particle(mouseX, 35, 10);
  }
  }
