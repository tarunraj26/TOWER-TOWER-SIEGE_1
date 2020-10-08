const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,250,200,20);
    ground2 = new Ground(1000,360,200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(520,170,40,40);
    box2 = new Box(560,170,40,40);
    pig1 = new Pig(1020, 110);
    log1 = new Log(1000,460,200, PI/2);

    box3 = new Box(600,170,40,40);
    box4 = new Box(640,170,40,40);
    pig3 = new Pig(993, 110);
    pig4 = new Pig(1010, 80);
    log3 =  new Log(1000,410,200, PI/2);
    box13 = new Box(933,170,70,70);
    box14 = new Box(1070,170,70,70);
    box15 = new Box(1000,170,60,60);
    box5 = new Box(680,170,40,40);
    box6 = new Box(537,130,40,40);
    box7 = new Box(577,130,40,40);
    box8 = new Box(617,130,40,40);
    box9 = new Box(657,130,40,40);
    box10 = new Box(577,90,40,40);
    box11 = new Box(618,90,40,40);
    box12 = new Box(608,30,40,40);
    log4 = new Log(760,420,50, PI/2);
    log5 = new Log(870,420,50, PI/2);

   

    bird = new Bird(100,100);

    slingshot=new Slingshot(bird.body,{x:200,y:100})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    ground2.display();
    box5.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    log4.display();
    log5.display();
    pig4.display();
box6.display();
    bird.display();
    platform.display();
    slingshot.display();   
}
function mouseDragged(){

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}