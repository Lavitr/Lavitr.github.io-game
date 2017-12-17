import CanvasSpr from './CanvasSpr';
import Keyboard from './system/Keyboard';
import Keys from './system/Keys';
import Canvas2D from './Canvas2D';

class Bird extends CanvasSpr {
  constructor(spr, spr2, spr3, soundFart, soundDrop) {
    super(spr, 0, 90, 58, 4, 10, 4);
    this.spr3 = spr3;
    this.soundFart = soundFart;
    this.soundDrop = soundDrop;
    this.shitSpr = spr2;
    this.positionX = 900;
    this.positionY = 25;
    this.ticCount = 0;
    this.shit = false;
    this.shitX = null;
    this.shitY = 60;
    this.shitVelocity = 2;
    this.startShit = null;
    this.shitdown = false;
    this.played = false;
  }

  update() {
    super.update();
    this.ticCount += 1;
    if (this.ticCount >= 3) {
      this.positionY = this.positionY + Math.sin(this.positionX) * 5;
      this.ticCount = 0;
    }
    this.positionX -= 2;

    if (this.positionX === this.startShit && !this.shit) {
      this.shit = true;
      this.played = false;
      this.shitX = this.startShit + 50;
      this.soundFart.volume = 0.05;
      this.soundFart.play();
    }
    if (this.shit) {
      this.shitY += 3;
      if (this.shitVelocity >= 0) this.shitVelocity -= 0.007;
      this.shitX -= this.shitVelocity;
      if (this.shitY >= 430) {
        this.shit = null;
        this.shitdown = true;
      }
    }
    if (this.shitdown) {
      if (!this.played) {
        this.soundDrop.play();
        this.played = true;
      }

      this.shitX -= 1;
      this.shitY = 425;
    }
    if (this.shitX <= -30) {
      this.shit = null;
      this.shitdown = false;
      this.shitX = 450;
      this.shitY = 50;
      this.shitVelocity = 2;
    }
    if (this.positionX <= -600) {
      this.positionY = 25;
      this.positionX = 900;
      this.startShit = 200 + 2 * Math.floor(Math.random() * 350);
    }
  }

  draw() {
    super.draw(0, this.positionX, this.positionY);
    if (this.shitdown) { Canvas2D.drawImage(this.spr3, { x: this.shitX, y: this.shitY }); }
    if (this.shit && !this.shitdown) { Canvas2D.drawImage(this.shitSpr, { x: this.shitX, y: this.shitY }); }
  }
}

export default Bird;
