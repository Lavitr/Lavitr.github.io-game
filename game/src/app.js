import Mouse from './system/Mouse';
import Keyboard from './system/Keyboard';
import Canvas2D from './Canvas2D';
import Background from './Background';
import Ground from './ground';
import Girl from './girl';
import Bird from './bird';
import BackObjects from './backobjects';
import assets from './system/assetsLoad';
import GnomGreen from './GnomGreen';
import GnomBlue from './GnomBlue';
import Dragon from './Dragon';
import SpareBullets from './SpareBullets';
import { aboutGame, diplayGameOver, displayScore } from './informGame';
import { dragonTakesGirl, girlDrowning,
  girlStepsOnShit, girlHitByArrow, gnomHitByBullet,
  girlHitByGnom, girlHitGnomByKnife,
  girlTakesBullets } from './Collisions';
import { setScore } from './Score';


window.requestAnimationFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const Game = {
  score: 0,
  live: 3,
  dead: false,
  deadTime: 0,
  hitingGroung: true,
  shitHappens: 0,
};

assets.load([
  /* --------Gnom sprites----*/
  './images/gnom.png', './images/arrow.png', './images/gnomBlue.png', './images/spellSpr.png',
  /* -------------SOUNDS--------------*/
  './sounds/scream.mp3', './sounds/sword.wav',
  './sounds/fart.wav', './sounds/shit.wav', './sounds/buratino.mp3',
  './sounds/pain5.wav', './sounds/gun.wav', './sounds/drop.wav',
  './sounds/scream2.mp3', './sounds/gunReload.wav',
  /* -----------BackGround Sprites-----*/
  './images/edge2.png', './images/edge3.png',
  './images/BG.png', './images/ground1.png', './images/birdspr.png',
  './images/Objects/Bush1.png', './images/Objects/Bush2.png',
  './images/Objects/Grass1.png', './images/Objects/Grass2.png',
  // ------------everything ELSE-------------*/
  './images/shitdown.png', './images/sprBullets.png',
  './images/bulletsIn.png', './images/girl.png', './images/heart.png',
  './images/gameover.png', './images/birdsShit.png',
  /* ----------------Dragon------------------*/
  './images/dragon.png',
]).then(() => {
  Game.initialize();
  Game.mainLoop();
  // -----background music----//
  assets.buratino.volume = 0.015;
  // assets.buratino.loop = true;
  assets.buratino.play();
});

Game.initialize = () => {
  Canvas2D.initialize('myCanvas');
  Keyboard.initialize();
  Mouse.initialize();
  Game.initObjects();
};
Game.initObjects = () => {
  Game.background = new Background(assets.BG);
  Game.ground = new Ground(assets.ground1, assets.edge3, assets.edge2);
  Game.backObjects = new BackObjects(assets.Bush1, assets.Bush2,
    assets.Grass1, assets.Grass2);
  Game.girl = new Girl(assets.girl, assets.bulletsIn, assets.sword, assets.gun);
  Game.bird = new Bird(assets.birdspr, assets.birdsShit, assets.shitdown, assets.fart, assets.drop);
  Game.gnom = new GnomGreen(assets.gnom, assets.arrow, assets.sword);
};

Game.reset = () => {
  Game.score = 0;
  Game.live = 3;
  Game.dead = false;
  Game.deadTime = 0;
  Game.hitingGroung = true;
  Game.background = null;
  Game.ground = null;
  Game.backObjects = null;
  Game.girl = null;
  Game.bird = null;
  Game.gnom = null;
  if (Game.dragon)Game.dragon = null;
  Game.shitHappens = 0;
  Game.spareBullets = null;
  Game.initObjects();
};
// -----------------------HANDLE INPUT---------------//
Game.handleInput = () => {
  if (Game.live) {
    Game.girl.handleInput();
  } else if (Mouse.leftPressed &&
      Mouse.position.x >= 325 && Mouse.position.x <= 575 &&
      Mouse.position.y >= 280 && Mouse.position.y <= 330) {
    Game.reset();
    assets.buratino.restart();
  }
};
// -----------------------------COLLISIONS-------------------------//
Game.collison = () => {
  if (Game.live) {
    dragonTakesGirl(Game, assets);
    girlDrowning(Game, assets);
    girlStepsOnShit(Game, assets);
    girlHitByArrow(Game);
    gnomHitByBullet(Game, assets);
    girlHitByGnom(Game, assets);
    girlHitGnomByKnife(Game, assets);
    if (Game.spareBullets) girlTakesBullets(Game, assets);
  }
};
// -----------------------UPDATE----------------------------//
Game.update = () => {
  if (Game.girl.dy < -150) Game.live = 0;
  if (Game.girl.inDragonHands && Game.live) {
    Game.girl.dx = Game.dragon.x;
    Game.girl.dy = Game.dragon.y + 30;
  }
  if (Game.dragon) Game.dragon.update();
  if (Game.dragon && Game.dragon.y < -220) { Game.dragon = null; }
  if (Game.gnom.dx < -170 - Game.gnom.finish) {
    Math.random() > 0.3 ?
      Game.gnom = new GnomGreen(assets.gnom, assets.arrow, assets.sword) :
      Game.gnom = new GnomBlue(assets.gnomBlue, assets.spellSpr, assets.sword);
  }
  if (Game.live > 0) {
    Game.girl.update();
    Game.gnom.update();
    Game.backObjects.update();
    Game.background.update();
    Game.ground.update();
    Game.bird.update();
    if (Game.spareBullets) Game.spareBullets.update();
  }
  if (Game.girl.dead) Game.girl.update();

  // -------------------------Spare Bullets--------//
  if (Game.score % 60 === 0 && Game.score > 0 && !Game.spareBullets && Game.girl.bulletInGun < 15) {
    Game.spareBullets = new SpareBullets(assets.sprBullets);
  }

  if ((Game.score % 40 === 0 || Game.score % 70 === 0 || Game.score >= 90)
    && Game.score > 0 && !Game.dragon) {
    Game.dragon = new Dragon(assets.dragon);
  }
  if (Game.spareBullets) {
    if (Game.spareBullets.x < -30)Game.spareBullets = null;
  }
};
// -----------------------------DRAW-------------------//
Game.draw = () => {
  Canvas2D.clear();
  Game.background.draw();
  Game.ground.draw();
  Game.backObjects.draw();
  if (Game.live) {
    Game.gnom.draw();
    Game.bird.draw();
    if (Game.dragon) Game.dragon.draw();
    if (Game.spareBullets) Game.spareBullets.draw();
    // -----------------information about Game ----------------------//
    aboutGame(Game.girl.bulletInGun, assets.bulletsIn, Game.live,
      assets.heart, Game.shitHappens, assets.shitdown, Game.score);
  }
  if (!Game.live) {
    diplayGameOver(assets.gameover);
    assets.buratino.pause();
    const highScore = setScore(Game.score) || Game.score;
    displayScore(highScore);
  }
  if (!(!Game.live && Game.girl.inDragonHands))Game.girl.draw();
};

Game.mainLoop = () => {
  Game.handleInput();
  Game.collison();
  Game.update();
  Game.draw();
  Mouse.reset();
  window.requestAnimationFrame(Game.mainLoop);
};
