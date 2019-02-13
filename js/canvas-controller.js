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
    // gCtx.rect(gFirstClickPos.x, gFirstClickPos.y, currPos.x - gFirstClickPos.x, currPos.y - gFirstClickPos.y);
    // var radius = a^2+b^2 = c^2
    var radius = Math.sqrt(Math.abs(gFirstClickPos.x - currPos.x) ** 2 + Math.abs(gFirstClickPos.y - currPos.y) ** 2)
    gCtx.beginPath()
    gCtx.arc(gFirstClickPos.x, gFirstClickPos.y, radius, 0, 2 * Math.PI);
    gCtx.stroke()
    gCtx.closePath()

}




function drawShape2(x, y) {
    var currPos = {
        x: x,
        y: y
    }
    console.log(gFirstClickPos, currPos);
    switch (getState('shape')) {
        case 'rectangle':
            gCtx.rect(gFirstClickPos.x, gFirstClickPos.y, currPos.x - gFirstClickPos.x, currPos.y - gFirstClickPos.y);
            gCtx.stroke()
        case 'oval':
            gCtx.rect(gFirstClickPos.x, gFirstClickPos.y, currPos.x - gFirstClickPos.x, currPos.y - gFirstClickPos.y);
            // var radius = a^2+b^2 = c^2
            var radius = Math.sqrt(Math.abs(gFirstClickPos.x - currPos.x) ** 2 + Math.abs(gFirstClickPos.y - currPos.y) ** 2)
         
            gCtx.arc(gFirstClickPos.x, gFirstClickPos.y, radius, 0, 2 * Math.PI);
            gCtx.stroke()
    }
}
