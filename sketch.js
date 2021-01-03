const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,engine, world,paper,leftSide,rightSide,bottom;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
 
  Engine.run(engine);

  paper = new Paper(100, 300, 10);
  ground = new Ground(400,390, 800, 20);
  
  leftSide = new Dustbin(620, 330, 20, 100);
  bottom = new Dustbin(680, 370, 100, 20);
  rightSide = new Dustbin(740, 330, 20, 100);
  

}

function draw() {
  
    background("black");
    rectMode(CENTER);
    
    paper.display();
    ground.display();

   leftSide.display();
   rightSide.display();
   bottom.display();
  }



function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 13,
      y: -14
    });
  }
}
