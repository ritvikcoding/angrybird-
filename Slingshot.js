class Slingshot{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
length:10,
stiffness:0.04,

pointB:pointB

}
this.sling=Constraint.create(options)
World.add (world,this.sling)

}
fly(){

this.sling.bodyA=null



}
display(){
    if (this.sling.bodyA !== null) {
        var body1=this.sling.bodyA.position
    var body2=this.sling.pointB
    strokeWeight(4)
    line(body1.x,body1.y,body2.x,body2.y)
    }
    
}   
}