"use strict";

const globalState = () => {
  const state = {
    strokeColor: "#000000",
    fillColor: "#ffffff",
    strokeWidth: "4",
    shape: "pen",
  };
  const getState = (prop) => STATE[prop];
  const updateState = (prop, val) => (state[prop] = val);
  const saveCanvas = (canvas) => {
    saveToStorage("canvas", canvas.toDataUrl());
  };
  const loadCanvas = () => {
    const loadedCanvas = loadFromStorage("canvas");
    renderCanvas(loadedCanvas);
  };
  const downloadCanvas = (elLink) => {
    elLink.href = gCanvas.toDataURL();
    elLink.download = "my-img.jpg";
  };
  const publicApi = {
    getState,
    updateState,
    saveCanvas,
    loadCanvas,
    downloadCanvas,
  };
  console.log('this is happening');
  
  return publicApi;
};



//TO DO - service func to say if mouse click is first or second
//first click (x,y)
//seocond click rect measures
const STATE = {
  strokeColor: "#000000",
  fillColor: "#ffffff",
  strokeWidth: "4",
  shape: "pen",
};

function saveCanvas(elCanvas) {
  saveToStorage("canvas", elCanvas.toDataUrl());
}

function loadCanvas() {
  var canvas = loadFromStorage("canvas");
  renderCanvas(canvas);
}

function updateState(prop, val) {
  STATE[prop] = val;
}

const getState = (prop) => STATE[prop];

function downloadCanvas(elLink) {
  elLink.href = gCanvas.toDataURL();
  elLink.download = "my-img.jpg";
}
