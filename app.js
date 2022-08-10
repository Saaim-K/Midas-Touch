const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); //2D Drawing


// --------------------Width & Height of Canvas--------------------
// const width = canvas.width;    // Assigning the canvas width
// const height = canvas.height; // Assigning the canvas width 
// --------------------Width & Height of Canvas--------------------


// --------------------Fill Rectangle--------------------
ctx.fillStyle = 'blue'; //Fill color
ctx.fillRect(0, 0, 10, 10); //Draw a rectangle (x, y, width, height)
// --------------------Fill Rectangle--------------------


// --------------------Stroke Rectangle--------------------
ctx.strokeStyle = 'red'; //stroke color
ctx.lineWidth= 2; //Line width
ctx.strokeRect(10, 20, 10, 10); //Draw a rectangle (x, y, width, height)
// --------------------Stroke Rectangle--------------------



// --------------------Circle--------------------
ctx.arc(40, 40, 10, 0, (Math.PI)*2); //Draw a circle (x, y, radius, startAngle, endAngle)
ctx.stroke();
// --------------------Circle--------------------

// --------------------Line--------------------
// --------------------Line--------------------

canvas.addEventListener("mousemove", (event) => {
    console.log("click:", event);
});

document.addEventListener("mouseup", (event) => {
    console.log(event);
});