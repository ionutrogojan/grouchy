// variables -->
let penSize = 1;
let lastPenSize = 1;
let tool = 0;
let quickTool = 0;
let quickKey = null;
let zoom = 10;
let canvasX = 0;
let canvasY = 0;
let drawing = false;
let bound;
let topCanvasControl = 0;
let leftCanvasControl = 0;
let controlStep = 10;
let activePalette = [];
let activeColourButtons = [];
    // image data
let imageData;
let backgroundData;
let pickColour;
    // colour 1
let red1 = 0;
let green1 = 0;
let blue1 = 0;
let alpha1 = 255;
    // colour 2
let red2 = 255;
let green2 = 255;
let blue2 = 255;
let alpha2 = 255;
    // setup
let canvasOrientation = 0;
let canvasColour = 0;
// variables <--

// canvas.js -->
const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");
// canvas.js <--

// menu -->
    // file
const fileButton = document.querySelector('#file_button');
const fileDropdown = document.querySelector('#file_dropdown');
const fileNew = document.querySelector('#file_new');
const fileOpen = document.querySelector('#file_open');
const fileRecent = document.querySelector('#file_recent');
const fileSave = document.querySelector('#file_save');
const fileReload = document.querySelector('#file_reload');
    // new canvas
const canvasMenuWrapper = document.querySelector('#canvas_menu_wrapper');
const canvasMenu = document.querySelector('.canvas-menu');
const canvasWidthI = document.querySelector('#canvas_width_input');
const canvasHeightI = document.querySelector('#canvas_height_input');
const verticalOrientation = document.querySelector('#vertical_orientation');
const horizontalOrientation = document.querySelector('#horizontal_orientation');
const transparentCanvas = document.querySelector('#transparent_canvas');
const blackCanvas = document.querySelector('#black_canvas');
const whiteCanvas = document.querySelector('#white_canvas');
const createButton = document.querySelector('#create_canvas');
    // view
const viewButton = document.querySelector('#view_button');
const viewDropdown = document.querySelector('#view_dropdown');
const viewGuides = document.querySelector('#view_guides');
const viewFullScreen = document.querySelector('#view_fullscreen');
    // pen
const penSizeI = document.querySelector('#pen_size');
// menu <--

// toolbar -->
const penButton = document.querySelector('#pen_button');
const eraserButton = document.querySelector('#eraser_button');
const eyeButton = document.querySelector('#eyedropper_button');
const tools = [penButton, eraserButton, eyeButton];
const toolButtonImg = [
    'url(./img/buttons/penButton.png)',
    'url(./img/buttons/eraserButton.png)',
    'url(./img/buttons/eyedropperButton.png)'
];
const toolButtonActiveImg = [
    'url(./img/buttons/penButtonActive.png)',
    'url(./img/buttons/eraserButtonActive.png)',
    'url(./img/buttons/eyedropperButtonActive.png)'
];
    // cursor
const customCursor = document.querySelector('#custom_cursor');
const cursorImg = [
    'url(./img/cursor/pen.png)',
    'url(./img/cursor/eraser.png)',
    'url(./img/cursor/eyedropper.png)'
];
// toolbar <--

// colour.js -->
const colour1 = document.querySelector('#colour1');
const colour2 = document.querySelector('#colour2');
const paletteButton = document.querySelector('#palette_button');
const paletteDropdown = document.querySelector('#palette_dropdown');
const colourList = document.querySelector('#colour_list');
// palettes
const paletteCommodore64 = document.querySelector('#palette_commodore64');
const paletteGameboy = document.querySelector('#palette_gameboy');
const paletteGrouchy = document.querySelector('#palette_grouchy');
const palettePico8 = document.querySelector('#palette_pico8');
const paletteSecam = document.querySelector('#palette_secam');
const paletteSmpte = document.querySelector('#palette_smpte');
const paletteZxspectrum = document.querySelector('#palette_zxspectrum');
// colour.js <--

// infopanel -->
const zoomValueI = document.querySelector('#zoom_value');
const zoomPlus = document.querySelector('#zoom_plus');
const zoomMinus = document.querySelector('#zoom_minus');
const coordX = document.querySelector('#coord_x');
const coordY = document.querySelector('#coord_y');
const toolName = document.querySelector('#tool_name');
const toolKey = document.querySelector('#tool_key');
const saveButton = document.querySelector('#save');
// infopanel <--

// extra
const favIcon = document.querySelector('link[rel = "shortcut icon"]')
window.addEventListener('blur', () => {
    document.title = 'unsaved progress';
    favIcon.setAttribute('href', './img/symbols/grouchy2.png');
});

window.addEventListener('focus', () => {
    document.title = 'Grouchy v0.1f';
    favIcon.setAttribute('href', './img/symbols/grouchy.png');
});