const zoomValueI = document.querySelector('#zoom_value');
const zoomPlus = document.querySelector('#zoom_plus');
const zoomMinus = document.querySelector('#zoom_minus');

const coordX = document.querySelector('#coord_x');
const coordY = document.querySelector('#coord_y');

const toolName = document.querySelector('#tool_name');
const toolKey = document.querySelector('#tool_key');

const saveButton = document.querySelector('#save');

canvas.addEventListener('mousedown', (event) => {
    switch(event.button){
        // left mouse button
        case 0:
            toolKey.innerText = 'B';
            toolName.innerText = 'Pen 1';
            break;
        // middle mouse button
        case 1:
            toolKey.innerText = 'B';
            toolName.innerText = 'Pen 2';
            break;
        // right mouse button
        case 2:
            toolKey.innerText = 'E';
            toolName.innerText = 'Eraser';
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
    if(zoom >= 100) return;
    zoom += 10;
    zoomValueI.innerText = zoom + '%';
    canvas.style.width = canvas.width * zoom + 'px';
    canvas.style.height = canvas.height * zoom + 'px';
    setBounds();
});

zoomMinus.addEventListener('click', () => {
    if(zoom <= 10) return;
    zoom -= 10;
    zoomValueI.innerText = zoom + '%';
    canvas.style.width = canvas.width * zoom + 'px';
    canvas.style.height = canvas.height * zoom + 'px';
    setBounds();
});

saveButton.addEventListener('click', () =>{
    canvas.toBlob((blob) => {
        const a = document.createElement('a');
        document.body.append(a);
        a.download = 'grouchy.png';
        a.href = URL.createObjectURL(blob);
        a.click();
        document.body.remove(a);
        // reload page automatically
        window.location.reload();
    });
});