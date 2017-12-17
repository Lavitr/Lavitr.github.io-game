import Canvas2D from './Canvas2D';
import { nextFrame } from './girl';

class GnomGreen {
  constructor(spr, arrow, sound) {
    this.spr = spr;
    this.sound = sound;
    this.arrow = arrow;
    this.positionArrow = { x: 685, y: 370 };
    this.frameWidth = 105;
    this.frameHight = 120;
    this.numberOfFrames = 5;
    this.framesPerRow = 5;
    this.sx = 0;
    this.sy = 240;
    this.dx = 900;
    this.dy = 330;
    this.frameIndex = 0;
    this.time = 0;
    this.genTime = 0;
    this.shoot = false;
    this.goAgain = false;
    this.dxReal = null;
    this.dead = false;
    this.deadTime = 0;
    this.shooting = false;
    this.madeShoot = false;
    this.finish = Math.random() * 300;
  }

  update() {
    this.genTime += 0.02;
    if (this.genTime <= 1.4 && !this.dead) {
      nextFrame.call(this, 0.16);
      this.dxReal = this.dx;
    }
    if (this.genTime > 1.4 && !this.shoot && !this.dead) {
      this.frameIndex = 0;
      this.sx = 0;
      this.sy = 0;
      this.time = 0;
      this.frameWidth = 238;
      this.frameHight = 120;
      this.shoot = true;
      this.shooting = true;
      this.dx = 665;
      this.dxReal = this.dx + 120;
      setTimeout(() => { this.sound.play(); }, 500);
    }
    if (this.genTime > 1.4 && this.genTime < 2.5 && !this.dead) {
      this.sprite = this.sprShoot;
      nextFrame.call(this, 0.16);
      this.dxReal = this.dx + 120;
      if (this.genTime > 2) { this.madeShoot = true; }
    }
    if (this.genTime > 2.5 && !this.goAgain && !this.dead) {
      this.shooting = false;
      this.frameIndex = 0;
      this.sx = 0;
      this.time = 0;
      this.frameWidth = 105;
      this.frameHight = 120;
      this.goAgain = true;
      this.dx = 725;
      this.dxReal = this.dx;
    }
    if (this.genTime > 2.5 && !this.dead) {
      this.sy = 240;
      nextFrame.call(this, 0.16);
      this.dxReal = this.dx;
    }
    if (this.dead && this.deadTime === 0) {
      this.frameIndex = 0;
      this.sx = 0;
      this.sy = 120;
      this.time = 0;
      this.frameWidth = 135;
      this.frameHight = 120;
      this.deadTime += 1;
      this.dxReal = null;
      if (this.shooting) this.dx += 120;
    }
    if (this.dead && this.deadTime > 0 && this.deadTime < 60) {
      this.deadTime += 1;
      nextFrame.call(this, 0.16);
      this.dx -= 1;
    }
    if (this.dead && this.deadTime >= 60) { this.dy = 350; this.dx -= 1; }
    if (this.madeShoot) this.positionArrow.x -= 2.5;
    if (!this.dead) this.dx -= 1.5;
  }

  draw() {
    Canvas2D.drawSpr(
      this.spr, this.sx, this.sy, this.frameWidth, this.frameHight, this.dx,
      this.dy, this.frameWidth, this.frameHight);
    if (this.genTime > 2.5 && this.madeShoot) {
      Canvas2D.drawImage(this.arrow, this.positionArrow);
    }
  }
}
export default GnomGreen;

