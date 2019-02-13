'use strict';

var gIsFirstClick;
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

    // drawCircle()
    // drawTriangle()
    // drawImg()
    // drawText('Have a nice day!')
}

function onCanvasClick(ev) {
    // debugger;
    // console.log(gIsFirstClick)
    // console.log(ev)
    if (gIsFirstClick) {
        saveCoords(ev.offsetX, ev.offsetY);
        console.log('gFirstClickPos', gCoordStart)
    } else {
        drawShape(ev.offsetX, ev.offsetY);
    }
    gIsFirstClick = !gIsFirstClick;
}

function saveCoords(x, y) {
    gCoordStart = {
        x: x,
        y: y
    }
    console.log(gCoordStart);
}



function drawShape(x, y) {
    var coordEnd = {
        x: x,
        y: y
    }
    gCtx.beginPath()
    gCtx.strokeStyle = getState('strokeColor')
    gCtx.lineWidth = getState('strokeWidth')
    gCtx.fillStyle = getState('fillColor')
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