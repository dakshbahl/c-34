
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.render
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,20);
	tree1 = new tree(600, 500)
	boy1 = new Boy(100, 650, 150, 150)
    mango1 = new Mango(610, 400, 40)
	mango2 = new Mango(670, 400, 40)
	mango3 = new Mango(550, 400, 40)
	mango4 = new Mango(643, 460, 40)
	mango5 = new Mango(580, 460, 40)
    stone = new Stone(100, 600, 40)

    slingshot = new SlingShot(stone.body, {x:100, y:600})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
   ground.display();
   tree1.display();
   boy1.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   stone.display();
   slingshot.display();
   drawSprites();
 
   detectcollision(stone, mango1)
   detectcollision(stone, mango2)
   detectcollision(stone, mango3)
   detectcollision(stone, mango4)
   detectcollision(stone, mango5)
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY} )
	
	
	}
	
	function mouseReleased()  {
	
	slingshot.fly()
	
	}
    function detectcollision(lstone, lmango){
		mangoBodyPosition = lmango.body.position
		stoneBodyPosition = lstone.body.position
       var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
        if(distance<=lmango.r + lstone.r)  {
          Matter.Body.setStatic(lmango.body, false)

		}

	}	

     function keyPressed() {
      if(keyCode === 32) {
         Matter.Body.setPosition(stone.body, {x:235, y:420 })
         slingshot.attach(stone.body)

	  }

     }
