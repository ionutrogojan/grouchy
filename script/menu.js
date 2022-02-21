function setCanvasSize(){
    // TODO: check if input values are numbers or not 
    canvas.width = canvasWidthI.value;
    canvas.height = canvasHeightI.value;
    canvas.style.width = canvasWidthI.value * zoom + 'px';
    canvas.style.height = canvasHeightI.value * zoom + 'px';
    canvasBackground();
}

function newFile(){
    canvasMenuWrapper.style.display = 'flex';
}

function resetMenu(){
    fileDropdown.style.display = 'none';
    // editDropdown.style.display = 'none';
    // viewDropdown.style.display = 'none';
    // helpDropdown.style.display = 'none';
}
fileButton.addEventListener('click', () => {
    // resetMenu();
    if(fileDropdown.style.display != 'flex'){
        fileDropdown.style.display = 'flex';
    }
    else{
        fileDropdown.style.display = 'none';
    }
});
// new
fileNew.addEventListener('click', (event) => {
    // stop propagation
    event.stopPropagation();
    resetMenu();
    newFile();
});
// open
fileNew.addEventListener('click', (event) => {
    // stop propagation
    event.stopPropagation();
    fileDropdown.style.display = 'none';
    canvasMenuWrapper.style.display = 'flex';
});
// recent
fileNew.addEventListener('click', (event) => {
    // stop propagation
    event.stopPropagation();
    fileDropdown.style.display = 'none';
    canvasMenuWrapper.style.display = 'flex';
});
// save
fileSave.addEventListener('click', (event) => {
    // stop propagation
    event.stopPropagation();
    fileDropdown.style.display = 'none';
    saveCanvas();
});
// reload
fileReload.addEventListener('click', (event) => {
    // stop propagation
    event.stopPropagation();
    fileDropdown.style.display = 'none';
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
    }
    // TODO: set each case to a function to call from both buttons and shortcuts
});