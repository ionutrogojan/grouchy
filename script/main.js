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
    // image data
let imageData = new ImageData(penSize, penSize);
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
const canvasMenu = document.querySelector('.canvas-menu');
const canvasMenuWrapper = document.querySelector('#canvas_menu_wrapper');
const createButton = document.querySelector('#create_canvas');
const canvasWidthI = document.querySelector('#canvas_width_input');
const canvasHeightI = document.querySelector('#canvas_height_input');
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
const s1Colour = { red: 0, green: 0, blue: 0, alpha: 255 };
const s2Colour = { red: 170, green: 170, blue: 170, alpha: 255 };
const s3Colour = { red: 255, green: 255, blue: 255, alpha: 255 };
const s4Colour = { red: 242, green: 166, blue: 13, alpha: 255 };
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
const s4 = document.querySelector('#s4');
const colour1 = document.querySelector('#colour1');
const colour2 = document.querySelector('#colour2');
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