'use strict';

var gDrawing;
var gCoordStart;
var gCanvas;
var gCtx;

function init() {
    document.querySelector('.stroke-width-label').innerHTML = document.querySelector('.stroke-width').value;
    gCanvas = document.querySelector('#our-canvas');
    gCtx = gCanvas.getContext('2d');
}

function clearCanvas() {
    console.log('clearing');
    gCtx.clearRect(0, 0, 500, 500)
}

function onCanvasMouseDown(ev) {
    gDrawing = true;
    saveCoords(ev.offsetX, ev.offsetY)
}

function onCanvasMouseUp(ev) {
    gDrawing = false;
    drawShape(ev.offsetX, ev.offsetY);
}

function onMouseMove(ev) {
    if (gDrawing && getState('shape') == 'brush') {
        gCtx.beginPath();
        var radius = getState('strokeWidth');
        gCtx.arc(ev.offsetX, ev.offsetY, radius, 0, 2 * Math.PI);
        gCtx.fillStyle = getState('strokeColor');
        gCtx.fill();
        gCtx.closePath();
    }
}

function saveCoords(x, y) {
    gCoordStart = {
        x: x,
        y: y
    }
}

function drawShape(x, y) {
    var coordEnd = {
        x: x,
        y: y
    }
    gCtx.beginPath()
    gCtx.strokeStyle = getState('strokeColor')
    gCtx.lineWidth = getState('strokeWidth')
    var fillColorRgbObj = hexToRgb(getState('fillColor'))
    var fillColorRgbaStr = `rgba(${fillColorRgbObj.r}, ${fillColorRgbObj.g}, ${fillColorRgbObj.b}, ${getState('opacity')})`;
    console.log(fillColorRgbaStr);
    gCtx.fillStyle = fillColorRgbaStr;
    var shape = getState('shape');
    switch (shape) {
        case 'rectangle':
            gCtx.rect(gCoordStart.x, gCoordStart.y, coordEnd.x - gCoordStart.x, coordEnd.y - gCoordStart.y);
            gCtx.stroke()
            gCtx.fill();
            break;
        case 'oval':
            var radius = Math.sqrt(Math.abs(gCoordStart.x - coordEnd.x) ** 2 + Math.abs(gCoordStart.y - coordEnd.y) ** 2)
            gCtx.arc(gCoordStart.x, gCoordStart.y, radius, 0, 2 * Math.PI);
            gCtx.stroke()
            gCtx.fill();
            break;
    }
    gCtx.closePath()
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

function onOpacityChange(elRange) {
    updateState('opacity', elRange.value/100);
    document.querySelector('.opacity-label').innerHTML = (elRange.value/100);
}