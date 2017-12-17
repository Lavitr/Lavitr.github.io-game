const dragonTakesGirl = function (Game, assets) {
  if (Game.dragon && !Game.girl.Drown) {
    if (Game.dragon.x <= 100 && Game.dragon.x > 45 && !Game.girl.slide && !Game.girl.inDragonHands) {
      Game.girl.inDragonHands = true;
      Game.girl.keyListen = false;
      Game.girl.startNewState();
      assets.scream2.play();
    }
  }
};
const girlDrowning = function (Game, assets) {
  if (Game.girl.dx > Game.ground.position.x + 970 &&
    Game.girl.dx < Game.ground.position.x + 1090 &&
    Game.girl.dy > 299 && !Game.girl.Drown) {
    Game.girl.keyListen = false;
    Game.girl.Drown = true;
    assets.scream2.play();
  }
  if (Game.girl.Drown) {
    Game.girl.dy += 2;
    Game.girl.dx -= 1;
  }
  if (Game.girl.dy > 650) Game.live = 0;
};

const girlStepsOnShit = function (Game, assets) {
  if (Game.girl.dx + 90 > Game.bird.shitX &&
        Game.girl.dx + 30 < Game.bird.shitX &&
        Game.girl.dy > 295 &&
        Game.bird.shitY > 280) Game.girl.SayShit += 1;
  if (Game.girl.SayShit === 1) {
    Game.shitHappens += 1;
    assets.shit.play();
    if (Game.shitHappens === 3) {
      Game.shitHappens = 0;
      Game.live -= 1;
    }
  }
  if (Game.bird.shitX < Game.girl.dx) Game.girl.SayShit = 0;
};

const girlHitByArrow = function (Game) {
  if (Game.girl.dx + 100 > Game.gnom.positionArrow.x &&
        Game.girl.dx + 80 < Game.gnom.positionArrow.x &&
        Game.girl.dy > 260 && Game.deadTime === 0) Game.dead = true;
};

const gnomHitByBullet = function (Game, assets) {
  for (let i = 0; i < Game.girl.bullets.length; i += 1) {
    const bullet = Game.girl.bullets[i];
    if (bullet.x + 15 < Game.gnom.dxReal &&
          bullet.x + 25 > Game.gnom.dxReal) {
      Game.girl.bullets.shift();
      Game.gnom.dead = true;
      assets.pain5.play();
      Game.score += 10;
    }
  }
};

const girlHitByGnom = function (Game, assets) {
  if (!Game.gnom.dead &&
        Game.girl.dx + 70 > Game.gnom.dx &&
        Game.girl.dx + 20 < Game.gnom.dx &&
        Game.girl.dy > 220 && Game.deadTime === 0) Game.dead = true;
  // counting time of a collision
  if (Game.dead === true) {
    Game.deadTime += 1;
    assets.scream.volume = 0.2;
    assets.scream.play();
    Game.live -= 1;
    Game.dead = false;
  }
  if (Game.deadTime > 0 && Game.deadTime < 100) Game.deadTime += 1;
  if (Game.deadTime === 100) Game.deadTime = 0;
  if (Game.live === 0 && !Game.girl.Drown && !Game.girl.inDragonHands) {
    Game.girl.dead = true;
    Game.girl.dy = 300;
    Game.girl.startNewState();
  }
};
const girlHitGnomByKnife = function (Game, assets) {
  if (Game.gnom.dx < 175
    && Game.gnom.dx > 160
    && Game.girl.melee && !Game.gnom.dead) {
    Game.gnom.dead = true;
    assets.pain5.play();
    Game.score += 10;
  }
};
const girlTakesBullets = function (Game, assets) {
  if (Game.girl.dy < 150 &&
Game.spareBullets.x > 120 &&
Game.spareBullets.x < 145) {
    Game.spareBullets = null;
    assets.gunReload.play();
    Game.girl.bulletInGun += 5;
    console.log('bullet taken');
  }
};

export { dragonTakesGirl, girlDrowning, girlStepsOnShit,
  gnomHitByBullet, girlHitByArrow, girlHitByGnom,
  girlHitGnomByKnife, girlTakesBullets };
