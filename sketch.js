const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop1;
var drop=[];
var thunder 
var thunder1,thunder2


function preload(){
    thunder1=loadImage("sprites/1.png");
    thunder2=loadImage("sprites/2.png")
}

function setup(){
   createCanvas(400,600)
   engine = Engine.create();
   world = engine.world;

boy1=new boy(200,450,200,350)
drop1=new drops(200,200)

for(var i=0 ; i< 100 ; i++){
    drop.push(new drops(random(0,400),(random(0,400))))
}
}

function draw(){
    Engine.update(engine)
    background(0)

    for(var i=0 ; i<100 ; i++){

    drop[i].display();
    drop[i].reset();

    rand = Math.round(random(1,4));

    if(frameCount%80===0){
        //MAM THERE IS A PROMBLEM IN THIS THE THUNDER IS NOT SHOWING.
        thunder = createSprite(random(10,370) , random(10,30) , 10 ,10)
        switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        default:break;

        }
        thunder.scale = random(0.3,0.6);
    }







boy1.display();




} 
}   

