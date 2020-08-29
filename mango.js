class Mango {
    constructor(x, y, radius) {
        var options = {
            'restitution':8,
            'friction':1,
            isStatic:true,
        }
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
      
                this.image = loadImage("sprites/mango.png");
                World.add(world, this.body);
        }
        
        
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.radius, this.radius);
            pop();
          }

}