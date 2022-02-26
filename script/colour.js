colourList.oncontextmenu = () => false;

function fetchPalette(filePath) {
    colourList.innerHTML = "";
    fetch(filePath)
    .then(response => response.json())
    .then(paletteData => {
        activePalette = paletteData;
        setActivePalette();
        // console.log(activePalette);
        setColourButtons();
    })
    .catch(error => console.log(error));
}

// added so I can use the array to also set the colour
function setActivePalette() {
    for(let i = 0; i < activePalette.length; i++){
        const newColourButton = document.createElement('button');
        newColourButton.style.backgroundColor = `rgba(${activePalette[i].red}, ${activePalette[i].green}, ${activePalette[i].blue}, ${activePalette[i].alpha})`;
        newColourButton.id = 'colour_button';
        colourList.appendChild(newColourButton);
    }
}

function setColourButtons(){
    activeColourButtons = document.querySelectorAll('#colour_button');
    for(let i = 0; i < activeColourButtons.length; i++){
        // only mousedown works because of the false context, look into inut pointers
        activeColourButtons[i].addEventListener('mousedown', (event) => {
            console.log(`rgba(${activePalette[i].red}, ${activePalette[i].green}, ${activePalette[i].blue}, ${activePalette[i].alpha})`);
            switch(event.button){
                case 0:
                    red1 = activePalette[i].red;
                    green1 = activePalette[i].green;
                    blue1 = activePalette[i].blue;
                    alpha1 = activePalette[i].alpha;
                    updateColour(0);
                    // console.log(red1, green1, blue1, alpha1);
                break;
                case 2:
                    red2 = activePalette[i].red;
                    green2 = activePalette[i].green;
                    blue2 = activePalette[i].blue;
                    alpha2 = activePalette[i].alpha;
                    updateColour(1);
                    // console.log(red2, green2, blue2, alpha2);
                break;
            }
        });
    }
}

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

// TODO: better understand how fetch works and why it won't work on load

// document.addEventListener('load', () => {
    fetchPalette('./palettes/grouchy.json');
    // defalut colour setup
    updateColour(0);
    updateColour(1);
// });

paletteButton.addEventListener('click', () => {
    if(paletteDropdown.style.display != 'flex'){
        paletteDropdown.style.display = 'flex';
    }
    else{
        paletteDropdown.style.display = 'none';
    }
});
// fetch and set active palette
paletteCommodore64.addEventListener('click', () => {
    fetchPalette('./palettes/commodore64.json');
});
paletteGameboy.addEventListener('click', () => {
    fetchPalette('./palettes/gameboy.json');
});
paletteGrouchy.addEventListener('click', () => {
    fetchPalette('./palettes/grouchy.json');
});
palettePico8.addEventListener('click', () => {
    fetchPalette('./palettes/pico8.json');
});
paletteSecam.addEventListener('click', () => {
    fetchPalette('./palettes/secam.json');
});
paletteSmpte.addEventListener('click', () => {
    fetchPalette('./palettes/smpte.json');
});
paletteZxspectrum.addEventListener('click', () => {
    fetchPalette('./palettes/zxspectrum.json');
});