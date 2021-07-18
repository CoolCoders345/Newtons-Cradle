class Ball
{
  constructor(x, y, r) 
  {
    let options = {
      isStatic:false
    };
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    stroke(255);
    fill("white");
    ellipse(pos.x, pos.y, this.r);
    pop();
  }
  
}

