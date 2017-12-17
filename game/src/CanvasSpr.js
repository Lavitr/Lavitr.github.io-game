
import Canvas2D from './Canvas2D';

class CanvasSpr {
  constructor(sprite, sx, frameWidth, frameHight, numberOfFrames, ticksPerFrame, framesPerRow) {
    this.sprite = sprite;
    this.frameWidth = frameWidth;
    this.frameHight = frameHight;
    this.numberOfFrames = numberOfFrames;
    this.framesPerRow = framesPerRow;
    this.sx = sx;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = ticksPerFrame;
  }


  update() {
    this.tickCount += 1;
    const row = Math.floor(this.frameIndex / this.framesPerRow);
    const col = Math.floor(this.frameIndex % this.framesPerRow);

    if (this.tickCount === this.ticksPerFrame) {
      this.tickCount = 0;
      this.sx = this.frameWidth * col;
      this.sy = this.frameHight * row;

      this.frameIndex = (this.frameIndex + 1) % this.numberOfFrames;
    }
  }

  draw(sy, dx, dy) {
    Canvas2D.drawSpr(
      this.sprite, this.sx, sy, this.frameWidth, this.frameHight, dx, dy, this.frameWidth, this.frameHight,
    );
  }
}
export default CanvasSpr;
