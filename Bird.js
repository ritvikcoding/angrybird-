class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
   // this.point.position.x = mouseX;
    //this.point.position.y = mouseY;
    super.display();
  }
}
