'use strict';

var gCoordStart;
var gCanvas;
var gCtx;

function init() {
    document.querySelector('.stroke-width-label').innerHTML = document.querySelector('.stroke-width').value;
    console.clear();
    gCanvas = document.querySelector('#our-canvas');
    gCtx = gCanvas.getContext('2d')
    gIsFirstClick = true;
    console.log(gCtx)
}

function onCanvasMouseDown(ev) {
    saveCoords(ev.offsetX, ev.offsetY)
}

function onCanvasMouseUp(ev) {
    drawShape(ev.offsetX, ev.offsetY);
}

function saveCoords(x, y) {
    gCoordStart = {
        x: x,
        y: y
    }
}

function drawShape(x, y) {
    var currPos = {
        x: x,
        y: y
    }
    switch (getState('shape')) {
        case 'rectangle':
        gCtx.rect(gCoordStart.x, gCoordStart.y, currPos.x - gCoordStart.x, currPos.y - gCoordStart.y);
        gCtx.stroke()
    }
}

function onStrokeColorChange(elInput) {
    updateState('strokeColor', elInput.value);
}

function onFillColorChange(elInput) {
    updateState('fillColor', elInput.value);
}

function onStrokeWidthChange(elRange) {
    updateState('strokeWidth', elRange.value);
    document.querySelector('.stroke-width-label').innerHTML = (elRange.value);
}

function onShapeChange(elInput) {
    updateState('shape', elInput.value);
}