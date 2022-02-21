// toolbar buttons update
function updateTool(tool){
    for(let i = 0; i < tools.length; i++){
        tools[i].style.backgroundImage = toolButtonImg[i];
    }
    tools[tool].style.backgroundImage = toolButtonActiveImg[tool];
    customCursor.style.backgroundImage = cursorImg[tool];
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
penButton.addEventListener('click', () => {
    tool = 0;
    updateTool(tool);
});

eraserButton.addEventListener('click', () => {
    tool = 1;
    updateTool(tool);
});

eyeButton.addEventListener('click', () => {
    tool = 2;
    updateTool(tool);
});

document.addEventListener('keydown', (event) => {
    quickKey = event.key.toLocaleLowerCase();
    switch(quickKey){
        case 'b':
            tool = 0;
            updateTool(tool);
        break;
        case 'e':
            tool = 1;
            updateTool(tool);
        break;
        case 'i':
            tool = 2;
            updateTool(tool);
        break;
        case 'alt':
            event.preventDefault();
            quickTool = 2;
            updateTool(quickTool);
        break;
    }
    console.log(quickKey);
});

document.addEventListener('keyup', () => {
    quickKey = null;
    quickTool = null;
    updateTool(tool);
    console.log(quickKey);
});

// tool icon + action
canvas.addEventListener('mousedown', (event) => {
    let priorityAction;
    switch(event.button){
        case 0:
        case 2:
            // check if there is no shortcut active
            if(quickKey == null){
                priorityAction = tool;
            }
            else{
                priorityAction = quickTool;
            }
            // perform priority action
            switch(priorityAction){
                case 0:
                    updatePen(event.button);
                    draw(event);
                break;
                case 1:
                    updatePen(priorityAction);
                    draw(event);
                break;
                case 2:
                    // don't draw while picking colour
                    end();
                    pick(event);
                break;
            }
            updateTool(priorityAction);
        break;
        case 1:
            updatePen(event.button);
            updateTool(event.button);
            draw(event);
        break;
    }
});

// reset tool icon
canvas.addEventListener('mouseup', () => {
    updateTool(tool);
});

window.addEventListener('load', () => {
    updateTool(tool);
    quickKey = null;
    quickTool = null;
});