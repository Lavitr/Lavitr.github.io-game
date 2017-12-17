import Canvas2D from './Canvas2D';

class Background {
  constructor(spr) {
    this.position = { x: 0, y: 0 };
    this.spr = spr;
  }

  update() {
    this.position.x -= 0.5;
    if (this.position.x <= -900) { this.position.x = 0; }
  }

  draw() {
    Canvas2D.drawImage(this.spr, this.position);
    Canvas2D.drawImage(this.spr, { x: this.position.x + 899, y: 0 });
  }
}

export default Background;

