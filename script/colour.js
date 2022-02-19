const s1Colour = { red: 0, green: 0, blue: 0, alpha: 255 };
const s2Colour = { red: 170, green: 170, blue: 170, alpha: 255 };
const s3Colour = { red: 255, green: 255, blue: 255, alpha: 255 };
const s4Colour = { red: 242, green: 166, blue: 13, alpha: 255 };

const colour1 = document.querySelector('#colour1');
const colour2 = document.querySelector('#colour2');

const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
const s4 = document.querySelector('#s4');

s1.oncontextmenu = () => false;
s2.oncontextmenu = () => false;
s3.oncontextmenu = () => false;
s4.oncontextmenu = () => false;

function updateColour(colourNumber){
    switch(colourNumber){
        case 0:
            colour1.style.backgroundColor = `rgba(${red1}, ${green1}, ${blue1}, ${alpha1})`;
            break;
        case 1:
            colour2.style.backgroundColor = `rgba(${red2}, ${green2}, ${blue2}, ${alpha2})`;
            break;
    }

}

window.addEventListener('load', () => {
    colour1.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    colour2.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    s1.style.backgroundColor = `rgba(${s1Colour.red}, ${s1Colour.green}, ${s1Colour.blue}, ${s1Colour.alpha})`;
    s2.style.backgroundColor = `rgba(${s2Colour.red}, ${s2Colour.green}, ${s2Colour.blue}, ${s2Colour.alpha})`;
    s3.style.backgroundColor = `rgba(${s3Colour.red}, ${s3Colour.green}, ${s3Colour.blue}, ${s3Colour.alpha})`;
    s4.style.backgroundColor = `rgba(${s4Colour.red}, ${s4Colour.green}, ${s4Colour.blue}, ${s4Colour.alpha})`;
});

s1.addEventListener('mousedown', (event) => {
    switch(event.button){
        case 0:
            red1 = s1Colour.red;
            green1 = s1Colour.green;
            blue1 = s1Colour.blue;
            alpha1 = s1Colour.alpha;
            updateColour(0);
            break;
        case 2:
            red2 = s1Colour.red;
            green2 = s1Colour.green;
            blue2 = s1Colour.blue;
            alpha2 = s1Colour.alpha;
            updateColour(1);
            break;
    };
    updateColour(event.button);
});

s2.addEventListener('mousedown', (event) => {
    switch(event.button){
        case 0:
            red1 = s2Colour.red;
            green1 = s2Colour.green;
            blue1 = s2Colour.blue;
            alpha1 = s2Colour.alpha;
            updateColour(0);
            break;
        case 2:
            red2 = s2Colour.red;
            green2 = s2Colour.green;
            blue2 = s2Colour.blue;
            alpha2 = s2Colour.alpha;
            updateColour(1);            
            break;
    };
});

s3.addEventListener('mousedown', (event) => {
    switch(event.button){
        case 0:
            red1 = s3Colour.red;
            green1 = s3Colour.green;
            blue1 = s3Colour.blue;
            alpha1 = s3Colour.alpha;
            updateColour(0);
            break;
        case 2:
            red2 = s3Colour.red;
            green2 = s3Colour.green;
            blue2 = s3Colour.blue;
            alpha2 = s3Colour.alpha;
            updateColour(1);
            break;
    };
    updateColour(event.button);
});

s4.addEventListener('mousedown', (event) => {
    switch(event.button){
        case 0:
            red1 = s4Colour.red;
            green1 = s4Colour.green;
            blue1 = s4Colour.blue;
            alpha1 = s4Colour.alpha;
            updateColour(0);
            break;
        case 2:
            red2 = s4Colour.red;
            green2 = s4Colour.green;
            blue2 = s4Colour.blue;
            alpha2 = s4Colour.alpha;
            updateColour(1);
            break;
    };
    updateColour(event.button);
});