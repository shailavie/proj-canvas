'use strict';

var gIsFirstClick;
var gFirstClickPos;
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
        console.log('gFirstClickPos', gFirstClickPos)
    } else {
        drawShape(ev.offsetX, ev.offsetY);
    }
    gIsFirstClick = !gIsFirstClick;
}

function saveCoords(x, y) {
    gFirstClickPos = {
        x: x,
        y: y
    }
    console.log(gFirstClickPos);
}

function drawShape(x, y) {
    var currPos = {
        x: x,
        y: y
    }
    console.log(gFirstClickPos, currPos);
    switch (getState('shape')) {
        case 'rectangle':
        gCtx.rect(gFirstClickPos.x, gFirstClickPos.y, currPos.x - gFirstClickPos.x, currPos.y - gFirstClickPos.y);
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