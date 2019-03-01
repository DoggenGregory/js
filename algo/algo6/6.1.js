class Circle {
    constructor(xPos,yPos,radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface(){
        return this.radius*this.radius* Math.PI;

    }
    move(xOffset,yOffset){
        this.xPos = xPos + xOffset
        this.yPos = yPos + yOffset
    }
    talk (){
        console.log(this.surface);
        console.log(this.move);

    }

}

let obj = new Circle(200 ,200,30);
obj.move(200,300);
obj.talk();