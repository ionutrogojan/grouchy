let tool = 0;

const pen = document.querySelector('#pen_button');
const eraser = document.querySelector('#eraser_button');
const eyedropper = document.querySelector('#eyedropper_button');

const customCursor = document.querySelector('#custom_cursor');

// toolbar buttons update
function updateTool(toolNumber){
    tool = toolNumber;
    pen.style.backgroundImage = 'url(./img/buttons/penButton.png)';
    eyedropper.style.backgroundImage = 'url(./img/buttons/eyedropperButton.png)';
    eraser.style.backgroundImage = 'url(./img/buttons/eraserButton.png)';
    switch(tool){
        case 0:
            customCursor.style.backgroundImage = 'url(./img/cursor/pen.png)';
            pen.style.backgroundImage = 'url(./img/buttons/penButtonActive.png)';
            break;
        case 1:
            customCursor.style.backgroundImage = 'url(./img/cursor/eraser.png)';
            eraser.style.backgroundImage = 'url(./img/buttons/eraserButtonActive.png)';
        break;
        case 2:
            customCursor.style.backgroundImage = 'url(./img/cursor/eyedropper.png)';
            eyedropper.style.backgroundImage = 'url(./img/buttons/eyedropperButtonActive.png)';
        break;
    }
}

// custom cursor position
document.addEventListener('mousemove', (event) => {
    customCursor.style.display = 'block';
    customCursor.style.left = parseInt(event.clientX) + 'px';
    customCursor.style.top = parseInt(event.clientY) + 'px';
});

document.addEventListener('mouseout', () => {
    customCursor.style.display = 'none';
});

// toolbar buttons
pen.addEventListener('click', () => {
    updateTool(0);
});

eraser.addEventListener('click', () => {
    updateTool(1);
});

eyedropper.addEventListener('click', () => {
    updateTool(2);
});

// keyboard shortcuts
document.addEventListener('keydown', (event) => {
    // lower case if CAPS lock is active
    switch(event.key.toLowerCase())
    {
        case 'b':
            updateTool(0);
        break;
        case 'e':
            updateTool(1);
        break;
        case 'i':
            updateTool(2);
        break;
    }
});

// tool icon + effect
canvas.addEventListener('mousedown', (event) => {
    switch(event.button){
        case 0:
            // console.log(tool);
            switch(tool){
                case 0:
                    customCursor.style.backgroundImage = 'url(./img/cursor/pen.png)';
                    updatePen(event.button);
                break;
                case 1:
                    customCursor.style.backgroundImage = 'url(./img/cursor/eraser.png)';
                    updatePen(1);
                break;
                case 2:
                    customCursor.style.backgroundImage = 'url(./img/cursor/eyedropper.png)';
                break;
            }
        break;
        case 1:
            customCursor.style.backgroundImage = 'url(./img/cursor/eraser.png)';
            updatePen(event.button);
        break;
        case 2:
            customCursor.style.backgroundImage = 'url(./img/cursor/pen.png)';
            updatePen(event.button);
        break;
    }
    draw(event);
});

// reset tool icon
canvas.addEventListener('mouseup', () => {
    switch(tool){
        case 0:
            customCursor.style.backgroundImage = 'url(./img/cursor/pen.png)';
        break;
        case 1:
            customCursor.style.backgroundImage = 'url(./img/cursor/eraser.png)';
        break;
        case 2:
            customCursor.style.backgroundImage = 'url(./img/cursor/eyedropper.png)';
        break;
    }
});