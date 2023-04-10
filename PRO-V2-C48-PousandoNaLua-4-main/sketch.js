var ground;
var nave_img;
var moedas_img;
var espaco_img;



function preload()
{
  nave_img = loadImage("nave.jpeg");
  //bg_img = loadImage("bg.png");
  //thrust = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png");
  //crash= loadAnimation("crash1.png","crash2.png","crash3.png");
  //land = loadAnimation("landing1.png" ,"landing2.png","landing_3.png");
  //rcs_left = loadAnimation("left_thruster_1.png","left_thruster_2.png");
  moedas_img = loadAnimation("moedas.jpeg");
  //rcs_right = loadAnimation("right_thruster_1.png","right_thruster_2.png");
  //obstacle_img = loadImage("obstacle.png");
  espaco_img = loadImage("espaco.png");


}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  timer = 1500;

  //thrust.frameDelay = 5;
  //land.frameDelay = 5;
 // crash.frameDelay = 10;
 // rcs_left.frameDelay = 5;

  nave_img = createSprite(100,50,30,30);
  nave_img.addImage(nave_img);
  nave_img.scale = 0.1;
  nave_img.setCollider("rectangle",0,0,200,200)




  ground = createSprite(500,690,1000,20);
  espaco = createSprite(880,610,50,30);
  espaco.addImage(espaco_img);
  espaco.scale = 0.3;

 
}

function draw() 
{
  background(51);
  image(espaco_img,0,0);
  push()
  fill(255);
  //text("Velocidade Horizontal: " +round(vx,2),800,50);
  //text("Combustível: "+fuel,800,25);
  //text("Velocidade Vertical: "+round(vy),800,75);
  //pop();

 

  //detecção de obstáculo
 // if(lander.collide(obs)==true)
  //{
   // lander.changeAnimation('crashing');
   // stop();
  //}

  //detecção de pouso;
  var d = dist(lander.position.x,lander.position.y,lz.position.x,lz.position.y);
  console.log(d);

  if(d<=35 && (vy<2 && vy>-2 ) && (vx<2 && vx >-2) )
  {
    console.log("landed");
    vx = 0;
    vy = 0;
    g=0;
    lander.changeAnimation('landing');
  }

  //if(lander.collide(ground)==true)
  //{
    //console.log("collided");
    //lander.changeAnimation('crashing');
   // vx = 0;
    //vy = 0;
    //g = 0;
  // }

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW && fuel>0)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
  if(keyCode==RIGHT_ARROW && fuel>0)
  {
    lander.changeAnimation('left');
    right_thrust();
  }

  if(keyCode==LEFT_ARROW && fuel>0)
  {
    lander.changeAnimation('right');
    left_thrust();
  }
}

function upward_thrust()
{
  vy = -1;
  fuel-=1;
}

function right_thrust()
{ 
  vx += 0.2;
  fuel -=1;
}

function left_thrust()
{
  vx -= 0.2;
  fuel-=1;
}

function stop()
{
  vx = 0;
  vy = 0;
  fuel = 0;
  g = 0;
}
