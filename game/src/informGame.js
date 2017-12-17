import Canvas2D from './Canvas2D';
import Color from './system/Color';

const aboutGame = function (bulletInGun, bulletsIn, live,
  heart, shitHappens, shitdown, score) {
  for (let i = 0; i < bulletInGun; i++) {
    Canvas2D.drawImage(bulletsIn, { x: 10 + 15 * i, y: 190 }, 80);
  }
  for (let i = 0; i < live; i++) {
    Canvas2D.drawImage(heart, { x: 10 + 22 * i, y: 140 });
  }
  if (shitHappens) {
    Canvas2D.drawText('shit happens', { x: 5, y: 220 }, Color.myblue);
    for (let i = 0; i < shitHappens; i++) {
      Canvas2D.drawImage(shitdown, { x: 10 + 22 * i, y: 240 });
    }
  }
  Canvas2D.drawText(`SCORE:${score}`, { x: 5, y: 110 }, Color.myblue, '25px');
};

const diplayGameOver = function (gameover) {
  Canvas2D.drawImage(gameover, { x: 160, y: 150 });
  Canvas2D.drawRect(325, 280, 250, 50);
  Canvas2D.drawRect(323, 278, 254, 54, 2, Color.white);
  Canvas2D.fillRect(325, 280, 250, 50, 'rgba(76, 63, 191, 0.3)');
};
const displayScore = function (score) {
  Canvas2D.fillRect(300, 50, 300, 60, '#42f4eb');
  Canvas2D.drawText(`BEST SCORE:${score}`, { x: 320, y: 60 }, '#788239', '35px');
};

export { aboutGame, diplayGameOver, displayScore };
