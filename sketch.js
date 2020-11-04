
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var tree1,tree2,tree3,tree4,tree7,tree6,tree5,boy1,stone1,mango1,chain1;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree1= new tree(300,100);
    tree2= new tree(100,100);
    tree3= new tree(200,600);
	//main tree
	tree4= new tree(500,400);

    tree5= new tree(50,500);
    tree6= new tree(500,100);
    tree7= new tree(200,200);
	boy1=new boy(300,500);
	stone1=new stone(236,455);
  mango1=new mango(466,371);
  chain1 = new chain(stone1.body,{x:232, y:456});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  boy1.display();
  tree1.display();
  tree2.display();
  tree3.display();
  tree4.display();
  tree5.display();
  tree6.display();
  tree7.display();
  stone1.display();
  mango1.display();
  chain1.display();
  drawSprites();
  
 text(mouseX+","+mouseY,mouseX,mouseY)
}

function mouseDragged()
{
 /* stone1.body.position.x=mouseX;
  stone1.body.position.y=mouseY;*/
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}
function mouseReleased()
{
  chain1.fly();
}
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone1.body, {x:236  , y:455 });
    chain1.attach(stone1.body)
  }
}
function detectollision(lstone,lmango)
{
 mango1bodyposition=lmango.body.position;
 stone1bodyposition=lstone.body.position;

 var distance=dist(mango1bodyposition.x,mango1bodyposition.y,mango1bodyposition.x,mango1bodyposition.y);
 if(distance<=lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body,false);
 }
}