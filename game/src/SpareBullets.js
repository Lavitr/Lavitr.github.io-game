import CanvasSpr from './CanvasSpr';

class SpareBullets extends CanvasSpr {
  constructor(sprite) {
    super(sprite, 0, 46, 24, 2, 10, 2);
    this.x = 950;
    this.y = 190;
  }
  update() {
    super.update();
    this.x -= 1;
  }
  draw() {
    super.draw(0, this.x, this.y);
  }
}

export default SpareBullets;
