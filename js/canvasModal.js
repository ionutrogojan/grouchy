export const canvasModal = document.querySelector("[data-canvas-wrapper]");
const canvasSizes = canvasModal.querySelectorAll("[data-canvas-size]");
const canvasOrientations = canvasModal.querySelectorAll("[data-canvas-orientation]");
const canvasBackgrounds = canvasModal.querySelectorAll("[data-canvas-background]");

import { CANVAS_PARAM, canvasSettings } from "./canvas.js";

export const setState = (element, force) => {
    element.classList.toggle("active", force);
}

const updateCanvasSize = () => {
    canvasSizes.forEach(size => {
        size.addEventListener("keyup", () => {
            if (size.matches("[data-canvas-size=width]")) {
                CANVAS_PARAM.canvasWidth = parseInt(size.value);
            } else {
                CANVAS_PARAM.canvasHeight = parseInt(size.value);
            }
            let sum = CANVAS_PARAM.canvasWidth - CANVAS_PARAM.canvasHeight;
            if (sum > 0) {
                updateCanvasOrientation("horizontal");
            } else {
                updateCanvasOrientation("vertical");
            }
        });
    });
}

const updateCanvasOrientation = (value) => {
    canvasOrientations.forEach(orientation => {
        let orientationValue = orientation.getAttribute("data-canvas-orientation");
        if (orientationValue === value) {
            setState(orientation, true);
            CANVAS_PARAM.canvasOrientation = value;
        } else {
            setState(orientation, false);
        }
    });
}

const updateCanvasBackground = (value) => {
    canvasBackgrounds.forEach(background => {
        let backgroundValue = background.getAttribute("data-canvas-background");
        if (backgroundValue === value) {
            setState(background, true);
            CANVAS_PARAM.canvasBackground = value;
        } else {
            setState(background, false);
        }
    });
}

const matching = (e, selector) => {
    return e.target.matches(selector);
}

canvasModal.addEventListener("click", (e) => {
    switch (true) {
        case matching(e, "[data-canvas-wrapper]"):
            setState(canvasModal, false);
        break;
        case matching(e, "[data-canvas-size]"):
            updateCanvasSize();
        break;
        case matching(e, "[data-canvas-orientation]"):
            let currentOrientation = e.target.getAttribute("data-canvas-orientation");
            updateCanvasOrientation(currentOrientation);
        break;
        case matching(e, "[data-canvas-background]"):
            let currentBackground = e.target.getAttribute("data-canvas-background");
            updateCanvasBackground(currentBackground);
        break;
        case matching(e, "[data-canvas-create]"):
            console.log(CANVAS_PARAM);
            canvasSettings();
            setState(canvasModal, false);
        break;
    }
});