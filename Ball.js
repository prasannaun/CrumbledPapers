class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.6,
          'density':1.2,
          isStatic : false,
      }
      this.body= Bodies.circle(200,100,20,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x,pos.y,20,20);
    }
  };