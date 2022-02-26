function setCanvasSize(){
    // TODO: check if input values are numbers or not 
    canvas.width = canvasWidthI.value;
    canvas.height = canvasHeightI.value;
    canvas.style.width = canvasWidthI.value * zoom + 'px';
    canvas.style.height = canvasHeightI.value * zoom + 'px';
    canvasCheckboard();
}

function resetMenu(activeDropdown){
    // hide all the dropdowns
    fileDropdown.style.display = 'none';
    // editDropdown.style.display = 'none';
    viewDropdown.style.display = 'none';
    // helpDropdown.style.display = 'none';
    // show the active dropdown
    activeDropdown.style.display = 'flex';
}

// FILE -->
function checkOrientation(){
    let sum = canvasWidthI.value - canvasHeightI.value;
    if(sum > 0){
        canvasOrientation = 1;
        horizontalOrientation.style.outline = '2px solid var(--gold)';
        verticalOrientation.style.outline = 'none';
    }
    else{
        canvasOrientation = 0;
        horizontalOrientation.style.outline = 'none';
        verticalOrientation.style.outline = '2px solid var(--gold)';
    }
}
function setOrientation(orientated){
    if(orientated == canvasOrientation){
        checkOrientation();
    }
    else{
        let tempValue;
        tempValue = canvasWidthI.value;
        canvasWidthI.value = canvasHeightI.value;
        canvasHeightI.value = tempValue;
        checkOrientation();
    }
}

function newFile(){
    canvasMenuWrapper.style.display = 'flex';
    checkOrientation();
}

fileButton.addEventListener('click', () => {
    resetMenu(fileDropdown);
});
// new
fileNew.addEventListener('click', (event) => {
    newFile();
});
// open
// fileNew.addEventListener('click', (event) => {

// });

// recent
// fileNew.addEventListener('click', () => {

// });
// save
fileSave.addEventListener('click', () => {
    saveCanvas();
});
// reload
fileReload.addEventListener('click', () => {
    window.location.reload();
});
// stop propagation
canvasMenu.addEventListener('click', (event) => {
    event.stopPropagation();
});
// hide dialog
canvasMenuWrapper.addEventListener('click', () => {
    canvasMenuWrapper.style.display = 'none';
});

// canvas setup
    // orientation -->
canvasWidthI.addEventListener('keyup', () => {
    checkOrientation();
});
canvasHeightI.addEventListener('keyup', () => {
    checkOrientation();
});
verticalOrientation.addEventListener('click', () => {
    setOrientation(0);
});
horizontalOrientation.addEventListener('click', () => {
    setOrientation(1);
});
    // orientation <--

    // background -->
transparentCanvas.addEventListener('click', () => {
    canvasColour = 0;
    transparentCanvas.style.outline = '2px solid var(--gold)';
    blackCanvas.style.outline = 'none';
    whiteCanvas.style.outline = 'none';
});
blackCanvas.addEventListener('click', () => {
    canvasColour = 1;
    transparentCanvas.style.outline = 'none';
    blackCanvas.style.outline = '2px solid var(--gold)';
    whiteCanvas.style.outline = 'none';
});
whiteCanvas.addEventListener('click', () => {
    canvasColour = 2;
    transparentCanvas.style.outline = 'none';
    blackCanvas.style.outline = 'none';
    whiteCanvas.style.outline = '2px solid var(--gold)';
});
    // background <--

    // create canvas
createButton.addEventListener('click', () => {
    canvasBackground(canvasColour);
    setCanvasSize();
    canvasMenuWrapper.style.display = 'none';
});
// FILE <--

// VIEW -->
viewButton.addEventListener('click', () => {
    resetMenu(viewDropdown);
});
// fullscreen
viewFullScreen.addEventListener('click', () => {
    const app = document.documentElement;
    if(!app.fullscreenElement){
        if(app.requestFullscreen){ // default
            app.requestFullscreen();
        }
        else if(app.webkitRequestFullscreen){ // safari
            app.webkitRequestFullscreen();
        }
        else if(app.msRequestFullscreen){ // explorer
            app.msRequestFullscreen();
        }
        else if(app.mozRequestFullscreen){ // firefox
            app.mozRequestFullscreen();
        }
    }
    else{
        if(document.exitFullscreen){ // default
            document.exitFullscreen();
        }
        else if(document.webkitExitFullscreen){ // safari
            document.webkitExitFullscreen();
        }
        else if(document.msExitFullscreen){ // explorer
            document.msExitFullscreen();
        }
        else if(document.mozExitFullscreen){ // firefox
            document.mozExitFullscreen();
        }
    }
});
// VIEW <--

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

window.addEventListener('load', setCanvasSize);
// menu shortcuts
document.addEventListener('keydown', (event) => {
    switch(event.key.toLocaleLowerCase()){
        case 'n':
            newFile();
        break;
        case 'o':
            //open image 
        break;
        case 's':
            saveCanvas();
        break;
        case 'r':
            window.location.reload();
        break;
        case 'arrowup':
            canvasControl(0);
        break;
        case 'arrowright':
            canvasControl(1);
        break;
        case 'arrowdown':
            canvasControl(2);
        break;
        case 'arrowleft':
            canvasControl(3);
        break;
        case 'clear':
            canvasControl(4);
        break;
    }
    console.log(event.key.toLowerCase());
    // TODO: set each case to a function to call from both buttons and shortcuts
});