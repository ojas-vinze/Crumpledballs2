class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width,
        this.height=height,
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("dustbin.png")
        World.add(world,this.body)
    }
    display(){
        var dpos =this.body.position
        imageMode(CENTER)
        fill(255);
        image(this.image,dpos.x,dpos.y-100,this.width,this.height);
    }
}
