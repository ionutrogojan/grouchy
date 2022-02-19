const newButton = document.querySelector('#new_button');
const canvasMenu = document.querySelector('.canvas-menu');
const canvasMenuWrapper = document.querySelector('#canvas_menu_wrapper');
const createButton = document.querySelector('#create_canvas');
const canvasWidthI = document.querySelector('#canvas_width_input');
const canvasHeightI = document.querySelector('#canvas_height_input');
const penSizeI = document.querySelector('#pen_size');

let lastPenSize = 1;

function setCanvasSize(){
    // TODO: check if input values are numbers or not 
    canvas.width = canvasWidthI.value;
    canvas.height = canvasHeightI.value;
    canvas.style.width = canvasWidthI.value * zoom + 'px';
    canvas.style.height = canvasHeightI.value * zoom + 'px';
}

// show dialog
newButton.addEventListener('click', () => {
    canvasMenuWrapper.style.display = 'flex';
})
// stop propagation
canvasMenu.addEventListener('click', (e) => {
    e.stopPropagation();
})
// hide dialog
canvasMenuWrapper.addEventListener('click', () => {
    canvasMenuWrapper.style.display = 'none';
});

// create canvas
createButton.addEventListener('click', () => {
    setCanvasSize();
    canvasMenuWrapper.style.display = 'none';
});

window.addEventListener('load', setCanvasSize);

// update pen size
penSizeI.addEventListener('keyup', () => {
    if(penSizeI.value > 0){
        lastPenSize = penSizeI.value;
    }
    penSize = penSizeI.value
    console.log(penSize, penSizeI.value);
});

// restore pen size to previous value if 0
canvas.addEventListener('mouseover', () => {
    if(penSizeI.value == 0){
        penSizeI.value = lastPenSize;
        penSize = penSizeI.value;
    }
});