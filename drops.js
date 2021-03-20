class drops { 

constructor(x,y){

var options={
friction:0.01,
restitution:0.1
}

this.body=Bodies.circle(x,y,5,options)
this.radius=5
World.add(world,this.body)
}
 reset(){
     if(this.body.position.y>600){
         Matter.Body.setPosition(this.body,{x:random(0,400),y:(random(0,400))})
     }
 }

display(){

var pos=this.body.position
ellipseMode(CENTER)
fill("blue")
ellipse(pos.x,pos.y,this.radius,this.radius)



}
}

