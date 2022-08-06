const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
// ctx.fillRect(0, 0, 100, 100);
// const width = canvas.width;    // Assigning the canvas width
// const height = canvas.height; // Assigning the canvas width 


canvas.addEventListener("mousemove", (event) => {
    console.log("click:",event);
});

document.addEventListener("mouseup", (event) => {
    console.log(event);
    document.body.style.backgroundColor = "white";
});