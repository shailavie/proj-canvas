var gState = {
    strokeColor: '#000000',
    fillColor: '#ffffff',
    stroke_width: '16',
    shape: 'rectangle'
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