const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

const circle = new Circle(499.5, 250, 10, 0, 2 * Math.PI);

const circle1 = new Circle(499.5, 250, 10, 0, 2 * Math.PI);

function whiteRectangles() {
   
   
    ctx.fillStyle = 'rgba(255, 255, 0, 1)';
    // ctx.fillRect(0,0,283,myCanvas.height); 
    // ctx.fillRect(333,0,308,myCanvas.height);
    // ctx.fillRect(691,0,308,myCanvas.height);
    circle.draw(ctx);
    circle.changePosition();  
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(333-50, 0, 50,myCanvas.height)
    ctx.fillRect(666-25, 0, 50,myCanvas.height)
    window.requestAnimationFrame(whiteRectangles);
}
window.requestAnimationFrame(whiteRectangles);


// function animation() {
//     setInterval(() => {
       
        
//     }, 10);
// console.log(circle);
// window.requestAnimationFrame(animation);   
// }
// window.requestAnimationFrame(animation);  