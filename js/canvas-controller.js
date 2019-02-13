'use strict'

function onStrokeWidthChange(elRange) {
    $('.stroke-width-label').html(elRange.value)

var gIsFirstClick;
var gFirstClickPos;
var gCanvas;
var gCtx;

function init() {
    $('.stroke-width-label').html($('.stroke-width').val())
    console.clear();
    gCanvas = document.querySelector('#our-convas');
    gCtx = gCanvas.getContext('2d')
    gIsFirstClick = true;
    console.log(gCtx)
    
    // drawCircle()
    // drawTriangle()
    // drawImg()
    // drawText('Have a nice day!')
}

function onCanvasClick(ev){
    // debugger;
    console.log(gIsFirstClick)
    console.log(ev)
    if (gIsFirstClick) {
        gFirstClickPos = {
            x : ev.offsetX,
            y : ev.offsetY
        }
        console.log('gFirstClickPos',gFirstClickPos)
    } else {
        var gCurrPos = {
            xEnd : ev.offsetX,
            yEnd : ev.offsetY
        }
    }
    gCtx.rect(gFirstClickPos.x, gFirstClickPos.y, 50, 50);
    gCtx.stroke()
    gIsFirstClick = !gIsFirstClick;
}