function canvasZoom(direction){
    switch(direction){
        case true:
            if(zoom >= 100) return;
            zoom += 10;
        break;
        case false:
            if(zoom <= 10) return;
            zoom -= 10;
        break;
    }
    zoomValueI.innerText = zoom + '%';
    canvasCheckboard();
    setBounds();
}

canvas.addEventListener('mousedown', (event) => {
    switch(event.button){
        // left mouse button
        case 0:
            toolKey.innerText = 'B';
            toolName.innerText = 'Pen 1';
            break;
        // middle mouse button
        case 1:
            toolKey.innerText = 'E';
            toolName.innerText = 'Eraser';
            break;
        // right mouse button
        case 2:
            toolKey.innerText = 'B';
            toolName.innerText = 'Pen 2';
            break;
    }
});

canvas.addEventListener('mouseup', () => {
    toolKey.innerText = 'B';
    toolName.innerText = 'Pen';
});

canvas.addEventListener('mousemove', () => {
        // show cursor coordinates
        coordX.innerText = canvasX + 1 + ' px';
        coordY.innerText = canvasY + 1 + ' px';
});

canvas.addEventListener('mouseout', () => {
    // show cursor coordinates
    coordX.innerText = '0 px';
    coordY.innerText = '0 px';
})

zoomPlus.addEventListener('click', () => {
    canvasZoom(true);
});

zoomMinus.addEventListener('click', () => {
    canvasZoom(false);
});

document.addEventListener('keydown', (event) => {
    switch(event.key.toLowerCase()){
        case '+':
            canvasZoom(true);
        break;
        case '-':
            canvasZoom(false);
        break;
    }
});

saveButton.addEventListener('click', () =>{
    saveCanvas();
});