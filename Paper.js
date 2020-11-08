class paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0.5,
            density:1.2
        }
        this.r=r
        this.body = Bodies.circle(x,y,this.r,options)
        this.image = loadImage("paper.png")
        World.add(world,this.body)

    }
    display(){
        var ppos = this.body.position
        imageMode(CENTER)
        image(this.image,0,0,this.r,this)
    }
}
