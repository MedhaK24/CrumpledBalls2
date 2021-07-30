class Ball{

    constructor(x,y,r){
        var ball_features = {
            isStatic : false,
            restitution : 0.8
          }
        
        this.ball = Bodies.circle(x,y,r,ball_features)
        World.add(world,this.ball)
        this.r = r

        this.ball_i = loadImage("paper.png")
    }

    show(){

        push()
        translate(this.ball.position.x,this.ball.position.y)
        rotate(this.ball.angle)

        imageMode(CENTER)
        image(this.ball_i,0,0,50,50)
        pop()
    }

}