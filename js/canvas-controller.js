'use strict'

var gIsFirstClick;
var gFirstClickPos;
var gCanvas;
var gCtx;

function init() {
    $('.stroke-width-label').html($('.stroke-width').val())
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

function onStrokeWidthChange(elRange) {
    $('.stroke-width-label').html(elRange.value)
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
        gCtx.rect(gFirstClickPos.x, gFirstClickPos.y, gFirstClickPos.x - currPos.x, gFirstClickPos.y - currPos.y);
        gCtx.stroke()
    }
}
