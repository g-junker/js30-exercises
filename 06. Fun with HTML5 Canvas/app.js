
const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');


canvas.width = 800;
canvas.height = 550;

ctx.strokeStyle = 'blue';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let isDrawing = false;
let lastX = 0; // to draw you need an starting (x,y) and an ending (x,y);
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e) {
    if(!isDrawing) return; // this stops the function from running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); // start from
    ctx.lineTo(e.offsetX, e.offsetY); // go to
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
    hue++;
    
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction; // this flips the direction
    }
    
    direction ? ctx.lineWidth++ : ctx.lineWidth--;

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => { //as soon as the person clicks down the mouse to start it, before we move our mouse, we are going to update the values for lastX and lastY
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);



const resetBtn = document.getElementById('reset');
const exportBtn = document.getElementById('export');




resetBtn.addEventListener('click', function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    e.preventDefault(e);
})

exportBtn.addEventListener('click', function(e){
    const img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=img;
    e.preventDefault(e);
})