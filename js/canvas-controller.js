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
    console.log('first click?',gIsFirstClick)
    console.log('event',ev)
    if (gIsFirstClick) {
        gFirstClickPos = {
            x : ev.offsetX,
            y : ev.offsetY
        }
        console.log('gFirstClickPos',gFirstClickPos)
        gIsFirstClick = !gIsFirstClick;
        return;
    } else {
        var gCurrPos = {
            xEnd : ev.offsetX,
            yEnd : ev.offsetY
        }
    }
    gCtx.rect(gFirstClickPos.x, gFirstClickPos.y, gCurrPos.xEnd-gFirstClickPos.x, gCurrPos.yEnd-gFirstClickPos.y);
    gCtx.stroke()
    gIsFirstClick = !gIsFirstClick;
}