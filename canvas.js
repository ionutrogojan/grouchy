// variables
let penSize = 0;
const colour1 = null;
const colour2 = null;
const bgColour = null;

const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

canvas.oncontextmenu = () => false;

canvas.height = 64;
canvas.width = 64;

let drawing = false;
let canvasX = 0;
let canvasY = 0;
let bound;

window.addEventListener('resize', setBounds);
window.addEventListener('load', setBounds);


function setBounds(){
    bound = canvas.getBoundingClientRect();
    // ctx.scale(10, 10);
}

function start(event){
    drawing = true;
    draw(event);
    // mouse buttons
    switch(event.button){
        // left mouse button
        case 0:
            // draw
            ctx.strokeStyle = 'black';
            ctx.globalCompositeOperation = "source-over";
            break;
            // middle mouse button
            case 1:
                // overlap
                ctx.strokeStyle = 'red';
                ctx.globalCompositeOperation = "source-atop";
                break;
                // right mouse button
                case 2:
                    // erase
                    ctx.globalCompositeOperation = "destination-out";
                    ctx.fill();
                    break;
                }
            }
            
            function end(){
                drawing = false;
                ctx.beginPath();
            }
            
            function draw(event){
                // get pen size
                penSize = document.querySelector('#pen_size').value;
                
                canvasX = event.clientX - bound.left - canvas.clientLeft - 0.5;
                canvasY = event.clientY - bound.top - canvas.clientTop - 0.5;
                
                if(!drawing) return;
                
                // set pen size
                ctx.lineWidth = penSize;
                
                ctx.lineCap = 'square'; // square | round | butt
    ctx.lineJoin = 'miter'; // round | bevel | miter
    ctx.lineTo(canvasX, canvasY);
    ctx.stroke();
    // soft line
    // ctx.beginPath();
    // ctx.moveTo(canvasX, canvasY);
    
    // console.log(canvasX, canvasY);
}

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', end);
canvas.addEventListener('mouseout', end);
canvas.addEventListener('mousemove', draw);
