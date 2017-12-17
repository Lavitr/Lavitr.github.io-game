import Canvas2D from './Canvas2D';

class BackObjects {
  constructor(spr1, spr2, spr3, spr4) {
    this.spr1 = spr1;
    this.spr2 = spr2;
    this.spr3 = spr3;
    this.spr4 = spr4;
    this.position = { x: 150, y: 330 };
    this.delta1 = 0;
    this.delta2 = 0;
  }
  update() {
    this.position.x -= 1;
    if (this.position.x <= -500) {
      this.position.x = 900 + Math.random() * 100;
      this.delta1 = Math.random() * 100;
      this.delta2 = Math.random() * 300;
    }
  }

  draw() {
    Canvas2D.drawImage(this.spr1, this.position);// bush1
    Canvas2D.drawImage(this.spr2, { x: this.position.x + 400, y: 360 }); // bush2
    Canvas2D.drawImage(this.spr3, { x: this.position.x + 100 + this.delta1, y: 360 }); // gras1
    Canvas2D.drawImage(this.spr4, { x: this.position.x + 150 + this.delta2, y: 380 }); // gras2
  }
}

export default BackObjects;

