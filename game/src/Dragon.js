import CanvasSpr from './CanvasSpr';

class Dragon extends CanvasSpr {
  constructor(sprite) {
    super(sprite, 0, 118, 85, 4, 10, 4);
    this.x = 950;
    this.y = 0;
  }
  update() {
    super.update();
    this.x -= 1.1;
    if (this.x >= 100) this.y += 0.35;
    else if (this.x < 45) this.y -= 3.5;
  }
  draw() {
    super.draw(0, this.x, this.y);
  }
}

export default Dragon;

