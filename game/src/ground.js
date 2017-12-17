import Canvas2D from './Canvas2D';


class Ground {
  constructor(spr, spr1, spr2) {
    this.position = { x: 0, y: 440 };
    this.spr = spr;
    this.spr1 = spr1;
    this.spr2 = spr2;
  }

  update() {
    this.position.x -= 1;
    if (this.position.x <= -1300) { this.position.x = 0; }
  }

  draw() {
    Canvas2D.drawImage(this.spr, this.position);

    Canvas2D.drawImage(this.spr1, { x: this.position.x + 900, y: 440 });
    Canvas2D.drawImage(this.spr, { x: this.position.x + 1300, y: 440 });
  }
}

export default Ground;

