class Rope {

    constructor(body1,body2,offsetX){
this.offsetX=offsetX;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:offsetX,y:0},
            stiffness:0.04,
            length:300
        }
     this.rope= Constraint.create(options);
     World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA)
        {
        var pointX=this.rope.bodyA.position;
        var pointY=this.rope.bodyB.position;
        push();
        strokeWeight(5)
        stroke("blue")
        line(pointX.x,pointX.y,pointY.x+this.offsetX,pointY.y)
        pop();
        }
    }

}


/*
class Rope{
    constructor(body1,body2,offsetX){
      
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:offsetX,y:0}
    }
    this.offsetX=offsetX;
    this.rope=Constraint.create(options);
    World.add(world,this.rope);
    }
    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;//roof
        push();
        strokeWeight(2);
        stroke("skyblue");
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
        pop();

    }
}
*/