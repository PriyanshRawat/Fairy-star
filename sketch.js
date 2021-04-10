var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairy.debug = true;
	fairy.setCollider("rectangle", 500,0,50,50);

	star.debug = true;
}


function draw() {
  background(bgImg);

  if(fairy.x+150===star.x){
	star.y = fairy.y;
	star.x = fairy.x+150;
}
  drawSprites();
  keyPressed();
}

function keyPressed() {
	//write code here
    if(keyDown(RIGHT_ARROW)){
		fairy.position.x = fairy.position.x+5;
	}
	if(keyDown(LEFT_ARROW)){
		fairy.position.x = fairy.position.x-5;
	}

	if(keyDown(DOWN_ARROW)){
		Matter.Body.setStatic(starBody, false);
	}
}
