class baseclass2 {
    constructor(x, y, w, h) {
        var op =
        {
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, w, h, op);
        this.h=h;
        this.w=w;
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        }
}