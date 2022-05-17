import './js/menu.js';
import './js/canvas.js';

// const customCursor = document.querySelector('#custom_cursor');
// const cursorImg = [
//     'url(./img/cursor/pen.png)',
//     'url(./img/cursor/eraser.png)',
//     'url(./img/cursor/eyedropper.png)'
// ];

// extra
const favIcon = document.querySelector('link[rel = "shortcut icon"]')
window.addEventListener('blur', () => {
    document.title = 'unsaved progress';
    favIcon.setAttribute('href', './img/symbols/grouchy2.png');
});

window.addEventListener('focus', () => {
    document.title = 'Grouchy v0.2a';
    favIcon.setAttribute('href', './img/symbols/grouchy.png');
});