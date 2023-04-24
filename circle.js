class Circle{
    constructor(x, y, radius, startAngle, endAngle){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xstartAngle = startAngle;
        this.endAngle = endAngle;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle='rgba(200,220,180,0.9)';
        // ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        // ctx.fillRect(this.x, this.y, 10, 10);
        ctx.arc(499.5, 250, 10, 0, 2 * Math.PI);
        ctx.fill()
        
console.log(this.x);
    }
    
    changePosition(){
        this.x += (Math.random()-Math.random())*10
        this.y += (Math.random()-Math.random())*10
        if (this.x<=0) {
            this.x = 0;
        }
        if (this.y<=0) {
            this.y = 0;
        }
        if (this.x>=myCanvas.width) {
            this.x = myCanvas.width;
        }
        if (this.y>=myCanvas.height) {
            this.y = myCanvas.height;
        }

    }
}

