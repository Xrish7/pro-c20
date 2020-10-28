var wall,thickness
var bullet,speed,weight
function setup() {
  createCanvas(1200,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(30,200,50,10);
  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX = speed;

}

function draw() {
  background('blue');
 
if (hasCollided(bullet,wall)) 
{
bullet.velocityX=0;

var damage=0.5 * speed * weight* speed/(thickness * thickness *thickness)

if (damage>10)
{
  wall .shapeColor=color('red')


}

if (damage<10)
{
  wall .shapeColor=color('green')


}

if (damage=10)
{
  wall .shapeColor=color('yellow')


}



}


 

  drawSprites();
}


function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;

wallLeftEdge=lwall.x;
  
  if (bulletRightEdge>=wallLeftEdge) 
  {

   return true


  }

  return false




}