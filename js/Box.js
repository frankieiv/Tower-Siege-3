class Box{
    constructor(x,y,w,h,color){
        var options = {
            restitution : 0.4
        }

        this.xPos = x;
        this.yPos = y;
        this.width = w;
        this.height = h;
        this.color = color;
        this.visibility = 255
        this.body = Bodies.rectangle(this.xPos,this.yPos,this.width,this.height,options);
        World.add(myWorld,this.body);
    }

    show(){
        var pos = this.body.position;
        
        push();
        if(this.body.speed<3){
            translate(pos.x, pos.y)
            rotate(this.body.angle)
            fill(this.color);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
        }
        else{
            World.remove(myWorld,this.body)
            this.visibility-=9
        }
        pop();
    }
    score(){
        if(this.visibility<0 && this.visibility>-105){
            score = score + 1
        }
    }
}