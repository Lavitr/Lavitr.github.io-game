import Canvas2D from '../Canvas2D';

function handleMouseMove(evt) {
  // Mouse.position = { x: evt.pageX, y: evt.pageY };
  Mouse.position = { x: evt.clientX - Canvas2D.x, y: evt.clientY - Canvas2D.y };
}

function handleMouseDown(evt) {
  if (evt.which === 1) {
    if (!Mouse.leftDown) { Mouse.leftPressed = true; }
    Mouse.leftDown = true;
  }
}

function handleMouseUp(evt) {
  if (evt.which === 1) { Mouse.leftDown = false; }
}

const Mouse = {
  position: { x: 0, y: 0 },
  leftDown: false,
  leftPressed: false,
};

Mouse.initialize = function () {
  document.onmousemove = handleMouseMove;
  document.onmousedown = handleMouseDown;
  document.onmouseup = handleMouseUp;
};

Mouse.reset = function () {
  Mouse.leftPressed = false;
};


export default Mouse;
