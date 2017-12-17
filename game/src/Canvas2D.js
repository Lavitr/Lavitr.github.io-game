const Canvas2D = {
  canvas: undefined,
  canvasContext: undefined,
};

Canvas2D.initialize = function (canvasName) {
  Canvas2D.canvas = document.getElementById(canvasName);
  Canvas2D.canvasContext = Canvas2D.canvas.getContext('2d');
  // this two propertys are  necessary to define mouse position relative to canvas 
  Canvas2D.x = Canvas2D.canvas.getBoundingClientRect().x;
  Canvas2D.y = Canvas2D.canvas.getBoundingClientRect().y;
};

Canvas2D.clear = function () {
  Canvas2D.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Canvas2D.drawImage = function (sprite, position, rotation = 0, origin = { x: 0, y: 0 }) {
  Canvas2D.canvasContext.save();
  Canvas2D.canvasContext.translate(position.x, position.y);
  Canvas2D.canvasContext.rotate(rotation);
  Canvas2D.canvasContext.drawImage(sprite, 0, 0,
    sprite.width, sprite.height, -origin.x, -origin.y,
    sprite.width, sprite.height);
  Canvas2D.canvasContext.restore();
};

Canvas2D.fillRect = function (x, y, width, height, color) {
  Canvas2D.canvasContext.fillStyle = color;
  Canvas2D.canvasContext.fillRect(x, y, width, height, color);
};

Canvas2D.drawSpr = function (img, sx, sy, sw, sh, dx, dy, dw, dh) {
  Canvas2D.canvasContext.save();
  Canvas2D.canvasContext.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
  Canvas2D.canvasContext.restore();
};

Canvas2D.drawRect = function (x, y, width, height, lineWidth = 5, strokeStyle = 'blue') {
  Canvas2D.canvasContext.beginPath();
  Canvas2D.canvasContext.lineWidth = lineWidth;
  Canvas2D.canvasContext.strokeStyle = strokeStyle;
  Canvas2D.canvasContext.rect(x, y, width, height);
  Canvas2D.canvasContext.stroke();
};

Canvas2D.drawText =
  function (text, position, color = Color.black, fontsize = '20px', textAlign = 'top', fontname = 'Courier New') {
    this.canvasContext.save();
    this.canvasContext.translate(position.x, position.y);
    this.canvasContext.textBaseline = 'top';
    this.canvasContext.font = `${fontsize} ${fontname}`;
    this.canvasContext.fillStyle = color.toString();
    this.canvasContext.textAlign = textAlign;
    this.canvasContext.fillText(text, 0, 0);
    this.canvasContext.restore();
  };
export default Canvas2D;
