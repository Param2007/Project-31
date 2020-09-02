const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,20);

  wall = new Ground(0,700,5,150);
  wall2 = new Ground(90,700,5,150);
  wall3 = new Ground(180,700,5,150);
  wall4 = new Ground(270,700,5,150);
  wall5 = new Ground(360,700,5,150);
  wall6= new Ground(450,700,5,150);

  for(var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,75,10));
  }
  
  for(var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,275,10));
  }
  
  for(var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,375,10));
  }

}

function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();
  
  wall.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();

  for(var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  createParticle();

  for(var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  drawSprites();
}

function createParticle() {
  if(frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
}