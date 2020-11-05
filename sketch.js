
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,mangoobj,mangoobj1,mangoobj2,mangoobj3,mangoobj4,mangoobj5,mangoobj6,mangoobj7,stoneobj,treeobj,groundobj,boyImage;
function preload()
{
boyImage = loadImage("boy.png");	
}

function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;

	groundobj=new ground(100,600,1800,20);
	//Create the Bodies Here.


	boy=createSprite(150,520,20,20)
	isStates:true
	boy.addImage(boyImage)
	boy.scale=0.1;

	

	stoneobj = new stone(100,450,50);
	console.log(stoneobj)


	mangoobj1 = new  mango (660,300,20)
	mangoobj2 = new  mango (700,340,20)
	mangoobj3 = new  mango (800,310,20)
	mangoobj4 = new  mango (750,350,20)
	mangoobj5 = new  mango (800,250,20)
	mangoobj6 = new  mango (860,200,20)
	mangoobj7 = new mango  (660,240,20)

	treeobj = new Tree(300,580);

	

	Engine.run(engine);

	
	//deletectollision(stoneobj,mangoobj2);
	//deletectollision(stoneobj,mangoobj3);
	//deletectollision(stoneobj,mangoobj4);
	//deletectollision(stoneobj,mangoobj5);
}
  



function draw() {
  rectMode(CENTER);
  background(0);
  
  groundobj.display();
  stoneobj.display();
  mangoobj1.display();
  mangoobj2.display();
  mangoobj3.display();
  mangoobj4.display();
  mangoobj5.display();
  mangoobj6.display();
  mangoobj7.display();
  treeobj.display();
  
  drawSprites();
 
}

function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    stone.fly();
    gameState="launched"
}

function keyPressed(){
    if(keyCode === 32){
      //  stone.attach(bird.body);
    }
}