var car,wall,speed,weight,deformation

function setup() {
  createCanvas(1600,400);
  ;
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  wall = createSprite(1050,200,60, height/2)
  car.velocityX = speed;
  deformation = (0.5*weight*speed*speed)/22500
}

function draw() {
  background(0);  
if(deformation < 100){
car.shapeColor = "green"
}

if(deformation > 180){
  car.shapeColor = "red"
  }
else{
  car.shapeColor = "yellow"
}
car.collide(wall)
  drawSprites();
}