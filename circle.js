class Circle {
    constructor(x, y, radius, startAngle, endAngle) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.speedx = (Math.random() - Math.random()) * 10
        this.speedy = (Math.random() - Math.random()) * 10
    }

    draw(ctx) {
        console.log(this);
        ctx.beginPath();
        //   ctx.fillStyle='rgba(200,220,180,0.9)';
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        // ctx.fillRect(this.x, this.y, 10, 10);
        // ctx.arc(499.5, 250, 10, 0, 2 * Math.PI);
        ctx.fill()
    }

    changePosition() {
        this.x += this.speedx;
        this.y += this.speedy;
        // this.x += (Math.random()-Math.random())*10
        // this.y += (Math.random()-Math.random())*10
        if (this.x <= 0) {
            // this.x = 0;
            this.speedx *= -1
        }
        if (this.y <= 0) {
            // this.y = 0;
            this.speedy *= -1
        }
        if (this.x >= myCanvas.width) {
            // this.x = myCanvas.width;
            this.speedx *= -1
        }
        if (this.y >= myCanvas.height) {
            // this.y = myCanvas.height;
            this.speedy *= -1
        }

    }
}

