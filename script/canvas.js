let penSize = 1;

let zoom = 10;
let canvasX = 0;
let canvasY = 0;

let drawing = false;
let bound;

// image data
let imageData = new ImageData(penSize, penSize);

// colour 1
let red1 = 0;
let green1 = 0;
let blue1 = 0;
let alpha1 = 255;
// colour 2
let red2 = 255;
let green2 = 255;
let blue2 = 255;
let alpha2 = 255;

const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");

// prevent context menu
canvas.oncontextmenu = () => false;

function updatePen(penNumber){
    // set pen size
    imageData = ctx.createImageData(penSize, penSize);
    // set pen colour
    switch(penNumber){
        case 0:
            for(let i = 0; i < imageData.data.length; i+= 4){
                imageData.data[i + 0] = red1; // R
                imageData.data[i + 1] = green1; // G
                imageData.data[i + 2] = blue1; // B
                imageData.data[i + 3] = alpha1; // A
            }
        break;
        case 1:
            for(let i = 0; i < imageData.data.length; i+= 4){
                imageData.data[i + 0] = 0; // R
                imageData.data[i + 1] = 0; // G
                imageData.data[i + 2] = 0; // B
                imageData.data[i + 3] = 0; // A
            }
        break;
        case 2:
            for(let i = 0; i < imageData.data.length; i+= 4){
                imageData.data[i + 0] = red2; // R
                imageData.data[i + 1] = green2; // G
                imageData.data[i + 2] = blue2; // B
                imageData.data[i + 3] = alpha2; // A
            }
        break;
    }
}

function setBounds(){
    bound = canvas.getBoundingClientRect();
}

function start(){
    drawing = true;
}

function end(){
    drawing = false;
}

function draw(event){
    // ? check performance, maybe not good
    setBounds();

    canvasX = parseInt((event.clientX - bound.left - canvas.clientLeft) / zoom);
    canvasY = parseInt((event.clientY - bound.top - canvas.clientTop) / zoom);

    // FIXME: better align the pen
    if(penSize % 2 == 0){
        canvasX -= penSize / 2;
        canvasY -= penSize / 2;
    }
    else{
        canvasX -= (penSize - 1) / 2;
        canvasY -= (penSize - 1) / 2;
    }
    // check, else continue
    if(!drawing) return;

    ctx.putImageData(imageData, canvasX, canvasY);
}

// window.addEventListener('load', setBounds);
// window.addEventListener('resize', setBounds);
canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', end);
canvas.addEventListener('mouseout', end);
canvas.addEventListener('mousemove', draw);
// FIXME: touch start: working \ touchend: working \ touchcancel: ? \ touchmove: not-working;
canvas.addEventListener('touchstart', start);
canvas.addEventListener('touchend', end);
canvas.addEventListener('touchcancel', end);
canvas.addEventListener('touchmove', draw);
