export const canvas = document.querySelector('#canvas');

let ctx = canvas.getContext("2d");
let canvasX, canvasY, bound;
let imageData;
let drawing = false;

export let CANVAS_PARAM = {
    canvasWidth: 16,
    canvasHeight: 16,
    canvasOrientation: "vertical",
    canvasBackground: "transparent",
    canvasZoom: 10
}

export let PEN_PARAM = {
    penWidth: 1,
    penHeight: 1
}

// prevent context menu
canvas.oncontextmenu = () => false;

export const canvasSettings = () => {
    canvas.width = CANVAS_PARAM.canvasWidth;
    canvas.height = CANVAS_PARAM.canvasHeight;
    canvas.style.width = canvas.width * CANVAS_PARAM.canvasZoom + 'px';
    canvas.style.height = canvas.height * CANVAS_PARAM.canvasZoom + 'px';
    switch (CANVAS_PARAM.canvasBackground) {
        case "transparent":
            updatePen(0, 0, 0, 0, CANVAS_PARAM.canvasWidth, CANVAS_PARAM.canvasHeight);
        break;
        case "black":
            updatePen(0, 0, 0, 255, CANVAS_PARAM.canvasWidth, CANVAS_PARAM.canvasHeight);
        break;
        case "white":
            updatePen(225, 225, 225, 255, CANVAS_PARAM.canvasWidth, CANVAS_PARAM.canvasHeight);
        break;
    }
    ctx.putImageData(imageData, 0, 0);
}

const setBounds = () => {
    bound = canvas.getBoundingClientRect();
}

const updatePen = (red, green, blue, alpha, sizeX, sizeY) => {
    imageData = ctx.createImageData(sizeX, sizeY);
    
    for(let i = 0; i < imageData.data.length; i+= 4){
        imageData.data[i + 0] = red; // R
        imageData.data[i + 1] = green; // G
        imageData.data[i + 2] = blue; // B
        imageData.data[i + 3] = alpha; // A
    }
}

function start(event) {
    updatePen(0, 0, 0, 225, PEN_PARAM.penWidth, PEN_PARAM.penHeight);
    drawing = true;
    draw (event)
}

function end () {
    drawing = false;
}

function draw (event) {
    setBounds();
    canvasX = parseInt((event.clientX - bound.left - canvas.clientLeft) / CANVAS_PARAM.canvasZoom);
    canvasY = parseInt((event.clientY - bound.top - canvas.clientTop) / CANVAS_PARAM.canvasZoom);
    
    if(!drawing) return;
    ctx.putImageData(imageData, canvasX, canvasY);
}

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', end);
canvas.addEventListener('mouseout', end);
canvas.addEventListener('mousemove', draw);

document.addEventListener("DOMContentLoaded", canvasSettings);