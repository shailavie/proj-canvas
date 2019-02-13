'use strict'



//TO DO - service func to say if mouse click is first or second
//first click (x,y)
//seocond click rect measures
var gState = {
    strokeColor: '#000000',
    fillColor: '#ffffff',
    strokeWidth: '16',
    shape: 'rectangle',
    opacity: 1
}

function saveCanvas(elCanvas) {
    saveToStorage('canvas', elCanvas.toDataUrl())
}

function loadCanvas() {
    var canvas = loadFromStorage('canvas');
    renderCanvas(canvas);
}

function updateState(prop, val) {
    gState[prop] = val;
}

function getState(prop) {
    return gState[prop];
}


function downloadCanvas(elLink) {
    elLink.href = gCanvas.toDataURL()
    elLink.download = 'my-img.jpg'
}