let penSize = 1;

let zoom = 10;

let canvasWidth = 32;
let canvasHeight = 32;

let drawing = false;
let bound;

// image data
let imageData = new ImageData(penSize, penSize);
let r = 0;
let g = 0;
let b = 0;
let a = 0;

// custom cursor
const cursor = document.querySelector('#cursor');
const cursorImg = document.querySelector('#cursorImg');

// canvas + context
const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");
// console.log(canvas);

// prevent context menu
canvas.oncontextmenu = () => false;

// canvas size
canvas.width = canvasWidth;
canvas.height = canvasHeight;
// canvas zoom
canvas.style.width = canvasWidth * zoom + 'px';
canvas.style.height = canvasHeight * zoom + 'px';

function updatePen(){
    // set pen size
    imageData = ctx.createImageData(penSize, penSize);
    
    // set pen colour
    for(let i = 0; i < imageData.data.length; i+= 4){
        imageData.data[i + 0] = red; // R
        imageData.data[i + 1] = green; // G
        imageData.data[i + 2] = blue; // B
        imageData.data[i + 3] = alpha; // A
    }
}

// canvas position mouse offset
function setBounds(){
    bound = canvas.getBoundingClientRect();
}


function start(event){
    drawing = true;
    // mouse buttons
    switch(event.button){
        // left mouse button
        case 0:
            // draw colour 1
            red = 0;
            green = 0;
            blue = 0;
            alpha = 255;
            // set cursor - pen
            cursorImg.src = "./img/pen.png"
            break;
        // middle mouse button
        case 1:
            // draw colour 2
            red = 230;
            green = 20;
            blue = 60;
            alpha = 255;
            break;
        // right mouse button
        case 2:
            // erase
            alpha = 0;
            // set cursor - pen
            cursorImg.src = "./img/eraser.png"
            break;
    }
    draw(event);
    updatePen();
}

function end(){
    drawing = false;
    // set cursor - pen
    cursorImg.src = "./img/pen.png"
    cursor.style.display = 'none';
}

function draw(event){

    let canvasX = parseInt((event.clientX - bound.left - canvas.clientLeft) / 10);
    let canvasY = parseInt((event.clientY - bound.top - canvas.clientTop) / 10);
    
    // FIXME: better align the pen
    if(penSize % 2 == 0){
        canvasX -= penSize / 2;
        canvasY -= penSize / 2;
    }
    // console.log(canvasX, canvasY);

    // cursor position
    cursor.style.display = 'block';
    cursor.style.left = parseInt(event.clientX) + 'px';
    cursor.style.top = parseInt(event.clientY) + 'px';
    
    // check, else continue
    if(!drawing) return;

    ctx.putImageData(imageData, canvasX, canvasY);
}

window.addEventListener('resize', setBounds);
window.addEventListener('load', setBounds);

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', end);
canvas.addEventListener('mouseout', end);
canvas.addEventListener('mousemove', draw);

// FIXME: touch start: working \ touchend: working \ touchcancel: ? \ touchmove: not-working;
canvas.addEventListener('touchstart', start);
canvas.addEventListener('touchend', end);
canvas.addEventListener('touchcancel', end);
canvas.addEventListener('touchmove', draw);

// canvas.addEventListener('mouseenter', customMouse);
// canvas.addEventListener('mouseout', customMouse);