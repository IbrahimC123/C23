class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  shoot(){
    //capture the angle of the cannon
    var newAngle = cannon.angle - 25

    //convert the angle from degrees to radians, since p5 works with radians
    newAngle = newAngle * (3.14/180)

    //using a function to convert the angle into vector(x and y)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5)

    Matter.Body.setStatic(this.body, false)
    Matter.Body.setVelocity(this.body, {x: velocity.x * (180/3.14), y: velocity.y * (180/3.14)})
  }
  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}
