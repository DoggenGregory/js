


class Rectangle {
    constructor(topLeftXPos,topLeftYPos,width,lenght){
        
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.lenght = lenght;
    }

    collides(otherRectangle){
        if( (this.topLeftXPos              <= otherRectangle.topLeftXPos&&
            this.topLeftXPos+this.width    >= otherRectangle.topLeftXPos)||
            (this.topLeftXPos              <= otherRectangle.topLeftXPos+otherRectangle.width &&
            this.topLeftXPos+this.width    >= otherRectangle.topLeftXPos+otherRectangle.width) &&
            
            (this.topLeftYPos              <= otherRectangle.topLeftYPos&&
            this.topLeftYPos+this.lenght   >= otherRectangle.topLeftYPos)||
            (this.topLeftYPos              <= otherRectangle.topLeftYPos+otherRectangle.lenght&&
            this.topLeftYPos+this.lenght   >= otherRectangle.topLeftYPos+otherRectangle.lenght)
            ){
    //        console.log("true")
            console.log(obj);
            
            
            return true;

        }else{
    //        console.log("false")

            return false;

            
        }
    }
}

let obj1 = new Rectangle(0,0,40,30);

for(i=0; i<1000 ; i++){

    var a = Math.floor(Math.random() * 1000);
    var b = Math.floor(Math.random() * 1000);
    var c = Math.floor(Math.random() * 1000);
    var d = Math.floor(Math.random() * 1000);




    var obj = (obj+i)
    obj = new Rectangle(a,b,c,d);
    obj1.collides(obj);

    if(collides=true){
    
}
}