const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); //2D Drawing
ctx.fillStyle = 'blue'; //Fill color
ctx.fillRect(0, 0, 10, 10); //Draw a rectangle (x, y, width, height)
// ctx.arc(40, 40, 20, 0, 2 * (Math.PI)); //Draw a circle (x, y, radius, startAngle, endAngle)
// ctx.stroke();
// const width = canvas.width;    // Assigning the canvas width
// const height = canvas.height; // Assigning the canvas width 


canvas.addEventListener("mousemove", (event) => {
    console.log("click:",event);
});

document.addEventListener("mouseup", (event) => {
    console.log(event);
    document.body.style.backgroundColor = "white";
});