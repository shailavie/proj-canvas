"use strict";

var gCoordStart = {};
var gCanvas;
var gCtx;
var drawing = false;

function init() {
  globalState();
  document.querySelector(
    ".stroke-width-label"
  ).innerHTML = document.querySelector(".stroke-width").value;
  gCanvas = document.querySelector("#canvas");
  gCtx = gCanvas.getContext("2d");
  console.log(gCtx);
}

function onCanvasMouseDown({ offsetX, offsetY }) {
  drawing = true;
  saveCoords({ x: offsetX, y: offsetY });
  drawPen(offsetX, offsetY);
}

function onCanvasMouseUp(ev) {
  drawing = false;
}

function onCanvasMouseMove({ offsetX, offsetY }) {
  if (drawing) {
    drawPen(offsetX, offsetY);
  }
}

function saveCoords({ x, y }) {
  gCoordStart = { x, y };
}

const drawPen = (x, y) => {
  gCtx.beginPath();
  gCtx.strokeStyle = getState("strokeColor");
  gCtx.lineWidth = getState("strokeWidth");
  gCtx.moveTo(gCoordStart.x, gCoordStart.y);
  gCtx.lineTo(x, y);
  gCoordStart = { x, y };
  gCtx.stroke();
  gCtx.closePath();
};

const clearCanvas = () => {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}



function onStrokeColorChange(elInput) {
  updateState("strokeColor", elInput.value);
}

function onFillColorChange(elInput) {
  updateState("fillColor", elInput.value);
}

function onStrokeWidthChange(elRange) {
  updateState("strokeWidth", elRange.value);
  document.querySelector(".stroke-width-label").innerHTML = elRange.value;
}

function onShapeChange(elInput) {
  updateState("shape", elInput.value);
}

function drawShape(x, y) {
  console.log(gCoordStart);
  var coordEnd = {
    x: x,
    y: y,
  };
  gCtx.beginPath();
  gCtx.strokeStyle = getState("strokeColor");
  gCtx.lineWidth = getState("strokeWidth");
  gCtx.fillStyle = getState("fillColor");
  var shape = getState("shape");
  switch (shape) {
    case "pen":
      gCtx.lineTo(coordEnd.x, coordEnd.y);
      gCtx.stroke();
      gCtx.fill();
      break;
    case "rectangle":
      gCtx.rect(
        gCoordStart.x,
        gCoordStart.y,
        coordEnd.x - gCoordStart.x,
        coordEnd.y - gCoordStart.y
      );
      gCtx.stroke();
      gCtx.fill();
      break;
    case "oval":
      var radius = Math.sqrt(
        Math.abs(gCoordStart.x - coordEnd.x) ** 2 +
          Math.abs(gCoordStart.y - coordEnd.y) ** 2
      );
      gCtx.arc(gCoordStart.x, gCoordStart.y, radius, 0, 2 * Math.PI);
      gCtx.stroke();
      gCtx.fill();
      break;
  }
  gCtx.closePath();
}