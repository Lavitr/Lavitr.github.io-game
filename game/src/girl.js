import Keyboard from './system/Keyboard';
import Keys from './system/Keys';
import Canvas2D from './Canvas2D';
import { DELTA, JUMP_TIME, SLIDE_TIME, MELEE_TIME, SHOOT_TIME } from './constans';

class Girl {
  constructor(bigspr, bulletSpr, sound, gunShoot) {
    this.sprite = bigspr;
    this.sound = sound;
    this.bigspr = bigspr;
    this.gunShoot = gunShoot;
    this.bulletSpr = bulletSpr;
    this.frameWidth = 150;
    this.frameHight = 150;
    this.numberOfFrames = 9;
    this.framesPerRow = 9;
    this.sx = 0;
    this.sy = 900;
    this.dx = 60;
    this.dy = 300;
    this.frameIndex = 0;
    this.jump = false;
    this.jumpTime = 0;
    this.time = 0;
    this.keyListen = true;
    this.goingUp = false;
    this.slide = false;
    this.slideTime = 0;
    this.melee = false;
    this.meleeTime = 0;
    this.shoot = false;
    this.shootTime = 0;
    this.dead = false;
    this.bullets = [];
    this.bulletInGun = 5;
    this.Drown = false;
    this.inDragonHands = false;
  }

  handleInput() {
    if (this.keyListen) {
      switch (Keyboard.keyDown) {
        case Keys.up:
          this.jump = true;
          this.startNewState();
          this.goingUp = true;
          this.spritePart(10, 10);
          this.sy = 0;
          break;
        case Keys.down:
          this.slide = true;
          this.startNewState();
          this.spritePart(5, 5);
          this.sy = 450;
          break;
        case Keys.right:
          this.melee = true;
          this.sound.play();
          this.startNewState();
          this.spritePart(7, 7);
          this.sy = 300;
          break;
        case Keys.space:
          this.shoot = true;
          if (this.bulletInGun) {
            this.gunShoot.play();
            this.bullets.push({ x: 190, y: 370 });
            this.bulletInGun -= 1;
          }
          this.startNewState();
          this.spritePart(3, 3);
          this.sy = 600;
          break;
        default:
      }
    }
  }

  update() {
    if (this.inDragonHands) {
      this.spritePart(9, 9);
      this.sy = 750;
      this.nextFrame(0.1);
    }
    if (this.dead) {
      this.spritePart(9, 9);
      this.sy = 150;
      if (this.frameIndex < 8) {
        this.nextFrame(0.2);
        this.dy += 0.1;
      }
    } else if (this.jump && this.jumpTime < JUMP_TIME) {
      this.jumpTime += DELTA;
      if (this.goingUp) {
        this.dy -= 2.3;
        this.goingUp = !(this.dy <= 95);
      }
      if (!this.goingUp) this.dy += 2.3;
      this.nextFrame(0.28);
      if (this.jumpTime >= JUMP_TIME) {
        this.jumpTime = 0;
        this.runState();
      }
    } else if (this.slide && this.slideTime < SLIDE_TIME) {
      this.slideTime += DELTA;
      this.nextFrame(0.4);
      if (this.slideTime >= SLIDE_TIME) {
        this.slideTime = 0;
        this.runState();
      }
    } else if (this.melee && this.meleeTime < MELEE_TIME) {
      this.meleeTime += DELTA;
      this.nextFrame(0.05);
      if (this.meleeTime >= MELEE_TIME) {
        this.meleeTime = 0;
        this.runState();
      }
    } else if (this.shoot && this.shootTime < SHOOT_TIME) {
      this.shootTime += DELTA;
      this.nextFrame(0.1);
      if (this.shootTime >= SHOOT_TIME) {
        this.shootTime = 0;
        this.runState();
      }
    } else {
      this.nextFrame(0.06);
    }
    for (let i = 0; i < this.bullets.length; i += 1) {
      const bullet = this.bullets[i];
      bullet.x += 4;
      if (bullet.x >= 900) { this.bullets.shift(); }
    }
  }


  draw() {
    Canvas2D.drawSpr(
      this.bigspr, this.sx, this.sy, this.frameWidth, this.frameHight, this.dx,
      this.dy, this.frameWidth, this.frameHight);

    for (let i = 0; i < this.bullets.length; i += 1) {
      const bullet = this.bullets[i];
      Canvas2D.drawImage(this.bulletSpr, { x: bullet.x, y: bullet.y });
    }
  }


  nextFrame(frtime) {
    this.time += DELTA;
    const col = Math.floor(this.frameIndex % this.framesPerRow);
    if (this.time >= frtime) {
      this.time = 0;
      this.sx = this.frameWidth * col;
      this.frameIndex = (this.frameIndex + 1) % this.numberOfFrames;
    }

    if (this.frameIndex === this.numberOfFrames) {
      this.frameIndex = 0;
    }
  }

  runState() {
    this.startNewState();
    this.slide = false;
    this.melee = false;
    this.shoot = false;
    this.dead = false;
    this.jump = false;
    if (!this.Drown) {
      this.keyListen = true;
      this.dy = 300;
    }
    this.sy = 900;

    this.framesPerRow = 9;
    this.numberOfFrames = 9;
  }

  spritePart(numberOfFrames, framesPerRow) {
    this.numberOfFrames = numberOfFrames;
    this.framesPerRow = framesPerRow;
  }

  startNewState() {
    this.keyListen = false;
    this.frameIndex = 0;
    this.sx = 0;
    this.time = 0;
  }
}
const nextFrame = Girl.prototype.nextFrame;
const spritePart = Girl.prototype.spritePart;
export { nextFrame, spritePart };
export default Girl;
