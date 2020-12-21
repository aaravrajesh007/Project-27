class Bob{
constructor(x,y,r){
    var options={
       restitution:0.8,
       friction:0.3,
       isStatic:false,
       density:0.5,
    }
    this.r=r;
    this.body=Bodies.circle(x,y,this.r,options);
    World.add(world,this.body)
    }
    display(){
       var pos=this.body.position;
       fill("blue");
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.r,this.r)
    }
    }