class tree {
constructor(x, y) {

this.treeWidth = 450;
this.treeHeight = 600;
this.treeThickness = 10;

this.bottonBody = Bodies.rectangle(x, y, this.treeWidth, this.treeThickness, {isStatic:true})

this.leftBody = Bodies.rectangle(0, y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:false})

this.rightBody = Bodies.rectangle(x+this.treeWidth/2, y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:false})


        this.image = loadImage("sprites/tree.png");
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
}


display(){
    var pos = this.bottonBody.position
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, -this.treeHeight/2, this.treeWidth, this.treeHeight);
    pop();
  }

}
