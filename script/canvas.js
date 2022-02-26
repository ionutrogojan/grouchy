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

// FIXME: idk man, this ain't working and I'm slowly dying trying to understand why
function canvasBackground(canvasColoured){
    console.log(canvasWidthI.value, canvasHeightI.value);
    backgroundData = ctx.createImageData(4, 4);
    switch(canvasColoured){
        case 0:
            for(let i = 0; i < backgroundData.data.length; i+= 4){
                backgroundData.data[i + 0] = 0; // R
                backgroundData.data[i + 1] = 0; // G
                backgroundData.data[i + 2] = 0; // B
                backgroundData.data[i + 3] = 0; // A
            }
        break;
        case 1:
            for(let i = 0; i < backgroundData.data.length; i+= 4){
                backgroundData.data[i + 0] = 0; // R
                backgroundData.data[i + 1] = 0; // G
                backgroundData.data[i + 2] = 0; // B
                backgroundData.data[i + 3] = 255; // A
            }
        break;
        case 2:
            for(let i = 0; i < backgroundData.data.length; i+= 4){
                backgroundData.data[i + 0] = 255; // R
                backgroundData.data[i + 1] = 255; // G
                backgroundData.data[i + 2] = 255; // B
                backgroundData.data[i + 3] = 255; // A
            }
        break;
    }
    console.log(backgroundData.data[0], backgroundData.data[1], backgroundData.data[2], backgroundData.data[3]);
    ctx.putImageData(backgroundData, 2, 2);
    console.log(backgroundData, canvasColoured);
}

function canvasCheckboard(){
    if(canvas.width % 2 == 0){
        canvas.style.backgroundSize = canvas.width * zoom + 'px';
    }
    else{
        canvas.style.backgroundSize = (canvas.width - 1) * zoom + 'px';
    }
    canvas.style.width = canvas.width * zoom + 'px';
    canvas.style.height = canvas.height * zoom + 'px';
}

// canvas controlls
function canvasControl(direction){
    switch(direction){
        case 0: //up
            topCanvasControl -= controlStep;
        break;
        case 1: //right
            leftCanvasControl += controlStep;
        break;
        case 2: //down
            topCanvasControl += controlStep;
        break;
        case 3: //left
            leftCanvasControl -= controlStep;
        break;
        case 4: //center
            topCanvasControl = 0;
            leftCanvasControl = 0;
        break;
    }
    canvas.style.top = topCanvasControl + 'px';
    canvas.style.left = leftCanvasControl + 'px';
}

function start(){
    if(tool > 1) return;
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
    // check, else continue
    if(!drawing) return;

    if(penSize % 2 == 0){
        canvasX -= penSize / 2;
        canvasY -= penSize / 2;
    }
    else{
        canvasX -= (penSize - 1) / 2;
        canvasY -= (penSize - 1) / 2;
    }
    ctx.putImageData(imageData, canvasX, canvasY);
}

function pick(event){
    // ? check performance, maybe not good
    setBounds();
    canvasX = parseInt((event.clientX - bound.left - canvas.clientLeft) / zoom);
    canvasY = parseInt((event.clientY - bound.top - canvas.clientTop) / zoom);

    pickColour = ctx.getImageData(canvasX, canvasY, 1, 1);
    switch(event.button){
        case 0:
            for(let i = 0; i < pickColour.data.length; i+= 4){
                red1 = pickColour.data[i + 0]; // R
                green1 = pickColour.data[i + 1]; // G
                blue1 = pickColour.data[i + 2]; // B
                alpha1 = pickColour.data[i + 3]; // A
            }
            colour1.style.backgroundColor = `rgba(${red1}, ${green1}, ${blue1}, ${alpha1})`;
            console.log(`rgba(${red1}, ${green1}, ${blue1}, ${alpha1})`);
        break;
        case 2:
            for(let i = 0; i < pickColour.data.length; i+= 4){
                red2 = pickColour.data[i + 0]; // R
                green2 = pickColour.data[i + 1]; // G
                blue2 = pickColour.data[i + 2]; // B
                alpha2 = pickColour.data[i + 3]; // A
            }
            colour2.style.backgroundColor = `rgba(${red2}, ${green2}, ${blue2}, ${alpha2})`;
            console.log(`rgba(${red2}, ${green2}, ${blue2}, ${alpha2})`);
        break;
    }
}

function saveCanvas(){
    canvas.toBlob((blob) => {
        const a = document.createElement('a');
        document.body.append(a);
        a.download = 'grouchy.png';
        a.href = URL.createObjectURL(blob);
        a.click();
        document.body.removeChild(a);
    });
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
