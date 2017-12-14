/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Canvas2D = {
  canvas: undefined,
  canvasContext: undefined
};

Canvas2D.initialize = function (canvasName) {
  Canvas2D.canvas = document.getElementById(canvasName);
  Canvas2D.canvasContext = Canvas2D.canvas.getContext('2d');
  // this two propertys are  necessary to define mouse position relative to canvas 
  Canvas2D.x = Canvas2D.canvas.getBoundingClientRect().x;
  Canvas2D.y = Canvas2D.canvas.getBoundingClientRect().y;
};

Canvas2D.clear = function () {
  Canvas2D.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Canvas2D.drawImage = function (sprite, position) {
  var rotation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { x: 0, y: 0 };

  Canvas2D.canvasContext.save();
  Canvas2D.canvasContext.translate(position.x, position.y);
  Canvas2D.canvasContext.rotate(rotation);
  Canvas2D.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height, -origin.x, -origin.y, sprite.width, sprite.height);
  Canvas2D.canvasContext.restore();
};

Canvas2D.fillRect = function (x, y, width, height, color) {
  Canvas2D.canvasContext.fillStyle = color;
  Canvas2D.canvasContext.fillRect(x, y, width, height, color);
};

Canvas2D.drawSpr = function (img, sx, sy, sw, sh, dx, dy, dw, dh) {
  Canvas2D.canvasContext.save();
  Canvas2D.canvasContext.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
  Canvas2D.canvasContext.restore();
};

Canvas2D.drawRect = function (x, y, width, height) {
  var lineWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
  var strokeStyle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'blue';

  Canvas2D.canvasContext.beginPath();
  Canvas2D.canvasContext.lineWidth = lineWidth;
  Canvas2D.canvasContext.strokeStyle = strokeStyle;
  Canvas2D.canvasContext.rect(x, y, width, height);
  Canvas2D.canvasContext.stroke();
};

Canvas2D.drawText = function (text, position) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Color.black;
  var fontsize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '20px';
  var textAlign = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'top';
  var fontname = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'Courier New';

  this.canvasContext.save();
  this.canvasContext.translate(position.x, position.y);
  this.canvasContext.textBaseline = 'top';
  this.canvasContext.font = fontsize + ' ' + fontname;
  this.canvasContext.fillStyle = color.toString();
  this.canvasContext.textAlign = textAlign;
  this.canvasContext.fillText(text, 0, 0);
  this.canvasContext.restore();
};
exports.default = Canvas2D;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasSpr = function () {
  function CanvasSpr(sprite, sx, frameWidth, frameHight, numberOfFrames, ticksPerFrame, framesPerRow) {
    _classCallCheck(this, CanvasSpr);

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

  _createClass(CanvasSpr, [{
    key: 'update',
    value: function update() {
      this.tickCount += 1;
      var row = Math.floor(this.frameIndex / this.framesPerRow);
      var col = Math.floor(this.frameIndex % this.framesPerRow);

      if (this.tickCount === this.ticksPerFrame) {
        this.tickCount = 0;
        this.sx = this.frameWidth * col;
        this.sy = this.frameHight * row;

        this.frameIndex = (this.frameIndex + 1) % this.numberOfFrames;
      }
    }
  }, {
    key: 'draw',
    value: function draw(sy, dx, dy) {
      _Canvas2D2.default.drawSpr(this.sprite, this.sx, sy, this.frameWidth, this.frameHight, dx, dy, this.frameWidth, this.frameHight);
    }
  }]);

  return CanvasSpr;
}();

exports.default = CanvasSpr;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function handleKeyDown(evt) {
  Keyboard.keyDown = evt.keyCode;
  // console.log(evt.keyCode, evt.type);
}

function handleKeyUp() {
  Keyboard.keyDown = -1;
}

var Keyboard = {
  keyDown: -1,

  initialize: function initialize() {
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
  }
};

exports.default = Keyboard;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Keys = {
  none: 0,
  back: 8,
  tab: 9,
  enter: 13,
  pause: 19,
  escape: 27,

  space: 32,

  pageUp: 33,
  pageDown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,

  insert: 45,
  del: 46,

  d0: 48,
  d1: 49,
  d2: 50,
  d3: 51,
  d4: 52,
  d5: 53,
  d6: 54,
  d7: 55,
  d8: 56,
  d9: 57,

  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,

  multiply: 42,
  add: 43,
  subtract: 45,
  decimal: 46,
  divide: 47
};

exports.default = Keys;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spritePart = exports.nextFrame = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Keyboard = __webpack_require__(2);

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _Keys = __webpack_require__(3);

var _Keys2 = _interopRequireDefault(_Keys);

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

var _constans = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Girl = function () {
  function Girl(bigspr, bulletSpr, sound, gunShoot) {
    _classCallCheck(this, Girl);

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

  _createClass(Girl, [{
    key: 'handleInput',
    value: function handleInput() {
      if (this.keyListen) {
        switch (_Keyboard2.default.keyDown) {
          case _Keys2.default.up:
            this.jump = true;
            this.startNewState();
            this.goingUp = true;
            this.spritePart(10, 10);
            this.sy = 0;
            break;
          case _Keys2.default.down:
            this.slide = true;
            this.startNewState();
            this.spritePart(5, 5);
            this.sy = 450;
            break;
          case _Keys2.default.right:
            this.melee = true;
            this.sound.play();
            this.startNewState();
            this.spritePart(7, 7);
            this.sy = 300;
            break;
          case _Keys2.default.space:
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
  }, {
    key: 'update',
    value: function update() {
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
      } else if (this.jump && this.jumpTime < _constans.JUMP_TIME) {
        this.jumpTime += _constans.DELTA;
        if (this.goingUp) {
          this.dy -= 2.3;
          this.goingUp = !(this.dy <= 95);
        }
        if (!this.goingUp) this.dy += 2.3;
        this.nextFrame(0.28);
        if (this.jumpTime >= _constans.JUMP_TIME) {
          this.jumpTime = 0;
          this.runState();
        }
      } else if (this.slide && this.slideTime < _constans.SLIDE_TIME) {
        this.slideTime += _constans.DELTA;
        this.nextFrame(0.4);
        if (this.slideTime >= _constans.SLIDE_TIME) {
          this.slideTime = 0;
          this.runState();
        }
      } else if (this.melee && this.meleeTime < _constans.MELEE_TIME) {
        this.meleeTime += _constans.DELTA;
        this.nextFrame(0.05);
        if (this.meleeTime >= _constans.MELEE_TIME) {
          this.meleeTime = 0;
          this.runState();
        }
      } else if (this.shoot && this.shootTime < _constans.SHOOT_TIME) {
        this.shootTime += _constans.DELTA;
        this.nextFrame(0.1);
        if (this.shootTime >= _constans.SHOOT_TIME) {
          this.shootTime = 0;
          this.runState();
        }
      } else {
        this.nextFrame(0.06);
      }
      for (var i = 0; i < this.bullets.length; i += 1) {
        var bullet = this.bullets[i];
        bullet.x += 4;
        if (bullet.x >= 900) {
          this.bullets.shift();
        }
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      _Canvas2D2.default.drawSpr(this.bigspr, this.sx, this.sy, this.frameWidth, this.frameHight, this.dx, this.dy, this.frameWidth, this.frameHight);

      for (var i = 0; i < this.bullets.length; i += 1) {
        var bullet = this.bullets[i];
        _Canvas2D2.default.drawImage(this.bulletSpr, { x: bullet.x, y: bullet.y });
      }
    }
  }, {
    key: 'nextFrame',
    value: function nextFrame(frtime) {
      this.time += _constans.DELTA;
      var col = Math.floor(this.frameIndex % this.framesPerRow);
      if (this.time >= frtime) {
        this.time = 0;
        this.sx = this.frameWidth * col;
        this.frameIndex = (this.frameIndex + 1) % this.numberOfFrames;
      }

      if (this.frameIndex === this.numberOfFrames) {
        this.frameIndex = 0;
      }
    }
  }, {
    key: 'runState',
    value: function runState() {
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
  }, {
    key: 'spritePart',
    value: function spritePart(numberOfFrames, framesPerRow) {
      this.numberOfFrames = numberOfFrames;
      this.framesPerRow = framesPerRow;
    }
  }, {
    key: 'startNewState',
    value: function startNewState() {
      this.keyListen = false;
      this.frameIndex = 0;
      this.sx = 0;
      this.time = 0;
    }
  }]);

  return Girl;
}();

var nextFrame = Girl.prototype.nextFrame;
var spritePart = Girl.prototype.spritePart;
exports.nextFrame = nextFrame;
exports.spritePart = spritePart;
exports.default = Girl;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Color = {
  aliceBlue: '#F0F8FF',
  antiqueWhite: '#FAEBD7',
  aqua: '#00FFFF',
  aquamarine: '#7FFFD4',
  azure: '#F0FFFF',
  beige: '#F5F5DC',
  bisque: '#FFE4C4',
  black: '#000000',
  blanchedAlmond: '#FFEBCD',
  blue: '#0000FF',
  blueViolet: '#8A2BE2',
  brown: '#A52A2A',
  burlyWood: '#DEB887',
  cadetBlue: '#5F9EA0',
  chartreuse: '#7FFF00',
  chocolate: '#D2691E',
  coral: '#FF7F50',
  cornflowerBlue: '#6495ED',
  cornsilk: '#FFF8DC',
  crimson: '#DC143C',
  cyan: '#00FFFF',
  darkBlue: '#00008B',
  darkCyan: '#008B8B',
  darkGoldenrod: '#B8860B',
  darkGray: '#A9A9A9',
  darkGreen: '#006400',
  darkKhaki: '#BDB76B',
  darkMagenta: '#8B008B',
  darkOliveGreen: '#556B2F',
  darkOrange: '#FF8C00',
  darkOrchid: '#9932CC',
  darkRed: '#8B0000',
  darkSalmon: '#E9967A',
  darkSeaGreen: '#8FBC8B',
  darkSlateBlue: '#483D8B',
  darkSlateGray: '#2F4F4F',
  darkTurquoise: '#00CED1',
  darkViolet: '#9400D3',
  deepPink: '#FF1493',
  deepSkyBlue: '#00BFFF',
  dimGray: '#696969',
  dodgerBlue: '#1E90FF',
  firebrick: '#B22222',
  floralWhite: '#FFFAF0',
  forestGreen: '#228B22',
  fuchsia: '#FF00FF',
  gainsboro: '#DCDCDC',
  ghostWhite: '#F8F8FF',
  gold: '#FFD700',
  goldenrod: '#DAA520',
  gray: '#808080',
  green: '#008000',
  greenYellow: '#ADFF2F',
  honeydew: '#F0FFF0',
  hotPink: '#FF69B4',
  indianRed: '#CD5C5C',
  indigo: '#4B0082',
  ivory: '#FFFFF0',
  khaki: '#F0E68C',
  lavender: '#E6E6FA',
  lavenderBlush: '#FFF0F5',
  lawnGreen: '#7CFC00',
  lemonChiffon: '#FFFACD',
  lightBlue: '#ADD8E6',
  lightCoral: '#F080FF',
  lightCyan: '#E0FFFF',
  lightGoldenrodYellow: '#FAFAD2',
  lightGray: '#D3D3D3',
  lightGreen: '#90EE90',
  lightPink: '#FFB6C1',
  lightSalmon: '#FFA07A',
  lightSeaGreen: '#20B2AA',
  lightSkyBlue: '#87CEFA',
  lightSlateGray: '#778899',
  lightSteelBlue: '#B0C4DE',
  lightYellow: '#FFFFE0',
  lime: '#00FF00',
  limeGreen: '#32CD32',
  linen: '#FAF0E6',
  magenta: '#FF00FF',
  maroon: '#800000',
  mediumAquamarine: '#66CDAA',
  mediumBlue: '#0000CD',
  mediumOrchid: '#BA55D3',
  mediumPurple: '#9370DB',
  mediumSeaGreen: '#3CB371',
  mediumSlateBlue: '#7B68EE',
  mediumSpringGreen: '#00FA9A',
  mediumTurquoise: '#48D1CC',
  mediumVioletRed: '#C71585',
  midnightBlue: '#191970',
  mintCream: '#F5FFFA',
  mistyRose: '#FFE4E1',
  moccasin: '#FFE4B5',
  myblue: '#33375c',
  navajoWhite: '#FFDEAD',
  navy: '#000080',
  oldLace: '#FDF5E6',
  olive: '#808000',
  oliveDrab: '#6B8E23',
  orange: '#FFA500',
  orangeRed: '#FF4500',
  orchid: '#DA70D6',
  paleGoldenrod: '#EEE8AA',
  paleGreen: '#98FB98',
  paleTurquoise: '#AFEEEE',
  paleVioletRed: '#DB7093',
  papayaWhip: '#FFEFD5',
  peachPuff: '#FFDAB9',
  peru: '#CD853F',
  pink: '#FFC0CB',
  plum: '#DDA0DD',
  powderBlue: '#B0E0E6',
  purple: '#800080',
  red: '#FF0000',
  rosyBrown: '#BC8F8F',
  royalBlue: '#4169E1',
  saddleBrown: '#8B4513',
  salmon: '#FA8072',
  sandyBrown: '#F4A460',
  seaGreen: '#2E8B57',
  seaShell: '#FFF5EE',
  sienna: '#A0522D',
  silver: '#C0C0C0',
  skyBlue: '#87CEEB',
  slateBlue: '#6A5ACD',
  slateGray: '#708090',
  snow: '#FFFAFA',
  springGreen: '#00FF7F',
  steelBlue: '#4682B4',
  tan: '#D2B48C',
  teal: '#008080',
  thistle: '#D8BFD8',
  tomato: '#FF6347',
  turquoise: '#40E0D0',
  violet: '#EE82EE',
  wheat: '#F5DEB3',
  white: '#FFFFFF',
  whiteSmoke: '#F5F5F5',
  yellow: '#FFFF00',
  yellowGreen: '#9ACD32'
};

exports.default = Color;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Mouse = __webpack_require__(8);

var _Mouse2 = _interopRequireDefault(_Mouse);

var _Keyboard = __webpack_require__(2);

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _Keys = __webpack_require__(3);

var _Keys2 = _interopRequireDefault(_Keys);

var _Color = __webpack_require__(5);

var _Color2 = _interopRequireDefault(_Color);

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

var _Background = __webpack_require__(9);

var _Background2 = _interopRequireDefault(_Background);

var _ground = __webpack_require__(10);

var _ground2 = _interopRequireDefault(_ground);

var _girl = __webpack_require__(4);

var _girl2 = _interopRequireDefault(_girl);

var _bird = __webpack_require__(12);

var _bird2 = _interopRequireDefault(_bird);

var _backobjects = __webpack_require__(13);

var _backobjects2 = _interopRequireDefault(_backobjects);

var _assetsLoad = __webpack_require__(14);

var _assetsLoad2 = _interopRequireDefault(_assetsLoad);

var _GnomGreen = __webpack_require__(16);

var _GnomGreen2 = _interopRequireDefault(_GnomGreen);

var _GnomBlue = __webpack_require__(17);

var _GnomBlue2 = _interopRequireDefault(_GnomBlue);

var _Dragon = __webpack_require__(18);

var _Dragon2 = _interopRequireDefault(_Dragon);

var _SpareBullets = __webpack_require__(19);

var _SpareBullets2 = _interopRequireDefault(_SpareBullets);

var _informGame = __webpack_require__(20);

var _Collisions = __webpack_require__(21);

var _Score = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
  window.setTimeout(callback, 1000 / 60);
};

var Game = {
  score: 0,
  live: 3,
  dead: false,
  deadTime: 0,
  hitingGroung: true,
  shitHappens: 0
};

_assetsLoad2.default.load([
/* --------Gnom sprites----*/
'./images/gnom.png', './images/arrow.png', './images/gnomBlue.png', './images/spellSpr.png',
/* -------------SOUNDS--------------*/
'./sounds/scream.mp3', './sounds/sword.wav', './sounds/fart.wav', './sounds/shit.wav', './sounds/buratino.mp3', './sounds/pain5.wav', './sounds/gun.wav', './sounds/drop.wav', './sounds/scream2.mp3', './sounds/gunReload.wav',
/* -----------BackGround Sprites-----*/
'./images/edge2.png', './images/edge3.png', './images/BG.png', './images/ground1.png', './images/birdspr.png', './images/Objects/Bush1.png', './images/Objects/Bush2.png', './images/Objects/Grass1.png', './images/Objects/Grass2.png',
// ------------everything ELSE-------------*/
'./images/shitdown.png', './images/sprBullets.png', './images/bulletsIn.png', './images/girl.png', './images/heart.png', './images/gameover.png', './images/birdsShit.png',
/* ----------------Dragon------------------*/
'./images/dragon.png']).then(function () {
  Game.initialize();
  Game.mainLoop();
  // -----background music----//
  _assetsLoad2.default.buratino.volume = 0.015;
  // assets.buratino.loop = true;
  _assetsLoad2.default.buratino.play();
});

Game.initialize = function () {
  _Canvas2D2.default.initialize('myCanvas');
  _Keyboard2.default.initialize();
  _Mouse2.default.initialize();
  Game.initObjects();
};
Game.initObjects = function () {
  Game.background = new _Background2.default(_assetsLoad2.default.BG);
  Game.ground = new _ground2.default(_assetsLoad2.default.ground1, _assetsLoad2.default.edge3, _assetsLoad2.default.edge2);
  Game.backObjects = new _backobjects2.default(_assetsLoad2.default.Bush1, _assetsLoad2.default.Bush2, _assetsLoad2.default.Grass1, _assetsLoad2.default.Grass2);
  Game.girl = new _girl2.default(_assetsLoad2.default.girl, _assetsLoad2.default.bulletsIn, _assetsLoad2.default.sword, _assetsLoad2.default.gun);
  Game.bird = new _bird2.default(_assetsLoad2.default.birdspr, _assetsLoad2.default.birdsShit, _assetsLoad2.default.shitdown, _assetsLoad2.default.fart, _assetsLoad2.default.drop);
  Game.gnom = new _GnomGreen2.default(_assetsLoad2.default.gnom, _assetsLoad2.default.arrow, _assetsLoad2.default.sword);
};

Game.reset = function () {
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
  if (Game.dragon) Game.dragon = null;
  Game.shitHappens = 0;
  Game.spareBullets = null;
  Game.initObjects();
};
// -----------------------HANDLE INPUT---------------//
Game.handleInput = function () {
  if (Game.live) {
    Game.girl.handleInput();
  } else if (_Mouse2.default.leftPressed && _Mouse2.default.position.x >= 325 && _Mouse2.default.position.x <= 575 && _Mouse2.default.position.y >= 280 && _Mouse2.default.position.y <= 330) {
    Game.reset();
    _assetsLoad2.default.buratino.restart();
  }
};
// -----------------------------COLLISIONS-------------------------//
Game.collison = function () {
  if (Game.live) {
    (0, _Collisions.dragonTakesGirl)(Game, _assetsLoad2.default);
    (0, _Collisions.girlDrowning)(Game, _assetsLoad2.default);
    (0, _Collisions.girlStepsOnShit)(Game, _assetsLoad2.default);
    (0, _Collisions.girlHitByArrow)(Game);
    (0, _Collisions.gnomHitByBullet)(Game, _assetsLoad2.default);
    (0, _Collisions.girlHitByGnom)(Game, _assetsLoad2.default);
    (0, _Collisions.girlHitGnomByKnife)(Game, _assetsLoad2.default);
    if (Game.spareBullets) (0, _Collisions.girlTakesBullets)(Game, _assetsLoad2.default);
  }
};
// -----------------------UPDATE----------------------------//
Game.update = function () {
  if (Game.girl.dy < -150) Game.live = 0;
  if (Game.girl.inDragonHands) {
    Game.girl.dx = Game.dragon.x;
    Game.girl.dy = Game.dragon.y + 30;
  }
  if (Game.dragon) Game.dragon.update();
  if (Game.dragon && Game.dragon.y < -220) Game.dragon = null;
  if (Game.gnom.dx < -170 - Game.gnom.finish) {
    Math.random() > 0.3 ? Game.gnom = new _GnomGreen2.default(_assetsLoad2.default.gnom, _assetsLoad2.default.arrow, _assetsLoad2.default.sword) : Game.gnom = new _GnomBlue2.default(_assetsLoad2.default.gnomBlue, _assetsLoad2.default.spellSpr, _assetsLoad2.default.sword);
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
    Game.spareBullets = new _SpareBullets2.default(_assetsLoad2.default.sprBullets);
  }

  if (Game.score % 40 === 0 && Game.score > 0 && !Game.dragon) {
    Game.dragon = new _Dragon2.default(_assetsLoad2.default.dragon);
  }
  if (Game.spareBullets) {
    if (Game.spareBullets.x < -30) Game.spareBullets = null;
  }
};
// -----------------------------DRAW-------------------//
Game.draw = function () {
  _Canvas2D2.default.clear();
  Game.background.draw();
  Game.ground.draw();
  Game.backObjects.draw();
  if (Game.live) {
    Game.gnom.draw();
    Game.bird.draw();
    if (Game.dragon) Game.dragon.draw();
    if (Game.spareBullets) Game.spareBullets.draw();
    // -----------------information about Game ----------------------//
    (0, _informGame.aboutGame)(Game.girl.bulletInGun, _assetsLoad2.default.bulletsIn, Game.live, _assetsLoad2.default.heart, Game.shitHappens, _assetsLoad2.default.shitdown, Game.score);
  }
  if (!Game.live) {
    (0, _informGame.diplayGameOver)(_assetsLoad2.default.gameover);
    _assetsLoad2.default.buratino.pause();
    var highScore = (0, _Score.setScore)(Game.score) || Game.score;
    (0, _informGame.displayScore)(highScore);
  }
  if (!(!Game.live && Game.girl.inDragonHands)) Game.girl.draw();
};

Game.mainLoop = function () {
  Game.handleInput();
  Game.collison();
  Game.update();
  Game.draw();
  _Mouse2.default.reset();
  window.requestAnimationFrame(Game.mainLoop);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleMouseMove(evt) {
  // Mouse.position = { x: evt.pageX, y: evt.pageY };
  Mouse.position = { x: evt.clientX - _Canvas2D2.default.x, y: evt.clientY - _Canvas2D2.default.y };
}

function handleMouseDown(evt) {
  if (evt.which === 1) {
    if (!Mouse.leftDown) {
      Mouse.leftPressed = true;
    }
    Mouse.leftDown = true;
  }
}

function handleMouseUp(evt) {
  if (evt.which === 1) {
    Mouse.leftDown = false;
  }
}

var Mouse = {
  position: { x: 0, y: 0 },
  leftDown: false,
  leftPressed: false
};

Mouse.initialize = function () {
  document.onmousemove = handleMouseMove;
  document.onmousedown = handleMouseDown;
  document.onmouseup = handleMouseUp;
};

Mouse.reset = function () {
  Mouse.leftPressed = false;
};

exports.default = Mouse;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function () {
  function Background(spr) {
    _classCallCheck(this, Background);

    this.position = { x: 0, y: 0 };
    this.spr = spr;
  }

  _createClass(Background, [{
    key: 'update',
    value: function update() {
      this.position.x -= 0.5;
      if (this.position.x <= -900) {
        this.position.x = 0;
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      _Canvas2D2.default.drawImage(this.spr, this.position);
      _Canvas2D2.default.drawImage(this.spr, { x: this.position.x + 899, y: 0 });
    }
  }]);

  return Background;
}();

exports.default = Background;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ground = function () {
  function Ground(spr, spr1, spr2) {
    _classCallCheck(this, Ground);

    this.position = { x: 0, y: 440 };
    this.spr = spr;
    this.spr1 = spr1;
    this.spr2 = spr2;
  }

  _createClass(Ground, [{
    key: 'update',
    value: function update() {
      this.position.x -= 1;
      if (this.position.x <= -1300) {
        this.position.x = 0;
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      _Canvas2D2.default.drawImage(this.spr, this.position);

      _Canvas2D2.default.drawImage(this.spr1, { x: this.position.x + 900, y: 440 });
      _Canvas2D2.default.drawImage(this.spr, { x: this.position.x + 1300, y: 440 });
    }
  }]);

  return Ground;
}();

exports.default = Ground;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DELTA = exports.DELTA = 1 / 60;
var JUMP_TIME = exports.JUMP_TIME = 2.9;
var SLIDE_TIME = exports.SLIDE_TIME = 2;
var MELEE_TIME = exports.MELEE_TIME = 0.35;
var SHOOT_TIME = exports.SHOOT_TIME = 0.2;
var DEAD_TIME = exports.DEAD_TIME = 1.5;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _CanvasSpr2 = __webpack_require__(1);

var _CanvasSpr3 = _interopRequireDefault(_CanvasSpr2);

var _Keyboard = __webpack_require__(2);

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _Keys = __webpack_require__(3);

var _Keys2 = _interopRequireDefault(_Keys);

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bird = function (_CanvasSpr) {
  _inherits(Bird, _CanvasSpr);

  function Bird(spr, spr2, spr3, soundFart, soundDrop) {
    _classCallCheck(this, Bird);

    var _this = _possibleConstructorReturn(this, (Bird.__proto__ || Object.getPrototypeOf(Bird)).call(this, spr, 0, 90, 58, 4, 10, 4));

    _this.spr3 = spr3;
    _this.soundFart = soundFart;
    _this.soundDrop = soundDrop;
    _this.shitSpr = spr2;
    _this.positionX = 900;
    _this.positionY = 25;
    _this.ticCount = 0;
    _this.shit = false;
    _this.shitX = null;
    _this.shitY = 60;
    _this.shitVelocity = 2;
    _this.startShit = null;
    _this.shitdown = false;
    _this.played = false;
    return _this;
  }

  _createClass(Bird, [{
    key: 'update',
    value: function update() {
      _get(Bird.prototype.__proto__ || Object.getPrototypeOf(Bird.prototype), 'update', this).call(this);
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
  }, {
    key: 'draw',
    value: function draw() {
      _get(Bird.prototype.__proto__ || Object.getPrototypeOf(Bird.prototype), 'draw', this).call(this, 0, this.positionX, this.positionY);
      if (this.shitdown) {
        _Canvas2D2.default.drawImage(this.spr3, { x: this.shitX, y: this.shitY });
      }
      if (this.shit && !this.shitdown) {
        _Canvas2D2.default.drawImage(this.shitSpr, { x: this.shitX, y: this.shitY });
      }
    }
  }]);

  return Bird;
}(_CanvasSpr3.default);

exports.default = Bird;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackObjects = function () {
  function BackObjects(spr1, spr2, spr3, spr4) {
    _classCallCheck(this, BackObjects);

    this.spr1 = spr1;
    this.spr2 = spr2;
    this.spr3 = spr3;
    this.spr4 = spr4;
    this.position = { x: 150, y: 330 };
    this.delta1 = 0;
    this.delta2 = 0;
  }

  _createClass(BackObjects, [{
    key: 'update',
    value: function update() {
      this.position.x -= 1;
      if (this.position.x <= -500) {
        this.position.x = 900 + Math.random() * 100;
        this.delta1 = Math.random() * 100;
        this.delta2 = Math.random() * 300;
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      _Canvas2D2.default.drawImage(this.spr1, this.position); // bush1
      _Canvas2D2.default.drawImage(this.spr2, { x: this.position.x + 400, y: 360 }); // bush2
      _Canvas2D2.default.drawImage(this.spr3, { x: this.position.x + 100 + this.delta1, y: 360 }); // gras1
      _Canvas2D2.default.drawImage(this.spr4, { x: this.position.x + 150 + this.delta2, y: 380 }); // gras2
    }
  }]);

  return BackObjects;
}();

exports.default = BackObjects;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sound = __webpack_require__(15);

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

var _Color = __webpack_require__(5);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assets = {

  toLoad: 0,
  loaded: 0,
  imageExtensions: ['png', 'jpg', 'gif'],
  audioExtensions: ['mp3', 'ogg', 'wav', 'webm'],

  load: function load(sources) {
    var _this = this;

    return new Promise(function (resolve) {
      var loadHandler = function loadHandler() {
        _this.loaded += 1;
        if (_this.toLoad === _this.loaded) {
          _this.toLoad = 0;
          _this.loaded = 0;
          resolve();
        }
      };

      _this.toLoad = sources.length;

      sources.forEach(function (source) {
        // Find the file extension of the asset
        var extension = source.split('.').pop();

        // Load Image files 
        if (_this.imageExtensions.indexOf(extension) !== -1) {
          _this.loadImage(source, loadHandler);
        }
        // Load audio files  
        else if (_this.audioExtensions.indexOf(extension) !== -1) {
            _this.loadSound(source, loadHandler);
          } else {
            console.log('File type not recognized: ' + source);
          }
      });
    });
  },
  loadImage: function loadImage(source, loadHandler) {
    var image = new Image();
    image.addEventListener('load', loadHandler);
    var fileName = source.split('/').pop().split('.')[0];
    this[fileName] = image;
    image.src = source;
  },
  loadSound: function loadSound(source, loadHandler) {
    var sound = (0, _sound.makeSound)(source, loadHandler);
    var fileName = source.split('/').pop().split('.')[0];
    this[fileName] = sound;
  }
};

exports.default = assets;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.makeSound = makeSound;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var actx = new AudioContext();

var Sound = function () {
  function Sound(source, loadHandler) {
    _classCallCheck(this, Sound);

    this.source = source;
    this.loadHandler = loadHandler;

    this.actx = actx;
    this.volumeNode = this.actx.createGain();
    this.panNode = this.actx.createStereoPanner();

    this.soundNode = null;
    this.buffer = null;
    this.loop = false;
    this.playing = false;

    this.panValue = 0;
    this.volumeValue = 1;

    this.startTime = 0;
    this.startOffset = 0;

    this.load();
  }

  _createClass(Sound, [{
    key: 'load',
    value: function load() {
      var _this = this;

      var xhr = new XMLHttpRequest();
      xhr.open('GET', this.source, true);
      xhr.responseType = 'arraybuffer';
      xhr.addEventListener('load', function () {
        _this.actx.decodeAudioData(xhr.response, function (buffer) {
          _this.buffer = buffer;
          _this.hasLoaded = true;

          if (_this.loadHandler) {
            _this.loadHandler();
          }
        }, function (error) {
          throw new Error('Audio could not be decoded: ' + error);
        });
      });

      xhr.send();
    }
  }, {
    key: 'play',
    value: function play() {
      this.startTime = this.actx.currentTime;
      this.soundNode = this.actx.createBufferSource();
      this.soundNode.buffer = this.buffer;
      this.soundNode.connect(this.volumeNode);
      this.volumeNode.connect(this.panNode);
      this.panNode.connect(this.actx.destination);

      this.soundNode.loop = this.loop;
      this.soundNode.start(this.startTime, this.startOffset % this.buffer.duration);

      this.playing = true;
    }
  }, {
    key: 'pause',
    value: function pause() {
      if (this.playing) {
        this.soundNode.stop(this.actx.currentTime);
        this.startOffset += this.actx.currentTime - this.startTime;
        this.playing = false;
      }
    }
  }, {
    key: 'restart',
    value: function restart() {
      if (this.playing) {
        this.soundNode.stop(this.actx.currentTime);
      }
      this.startOffset = 0;
      this.startPoint = 0;
      this.endPoint = this.buffer.duration;
      this.play();
    }
  }, {
    key: 'volume',
    get: function get() {
      return this.volumeValue;
    },
    set: function set(value) {
      this.volumeNode.gain.value = value;
      this.volumeValue = value;
    }
  }, {
    key: 'pan',
    get: function get() {
      return this.panNode.pan.value;
    },
    set: function set(value) {
      this.panNode.pan.value = value;
    }
  }]);

  return Sound;
}();

function makeSound(source, loadHandler) {
  return new Sound(source, loadHandler);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

var _girl = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GnomGreen = function () {
  function GnomGreen(spr, arrow, sound) {
    _classCallCheck(this, GnomGreen);

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

  _createClass(GnomGreen, [{
    key: 'update',
    value: function update() {
      var _this = this;

      this.genTime += 0.02;
      if (this.genTime <= 1.4 && !this.dead) {
        _girl.nextFrame.call(this, 0.16);
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
        setTimeout(function () {
          _this.sound.play();
        }, 500);
      }
      if (this.genTime > 1.4 && this.genTime < 2.5 && !this.dead) {
        this.sprite = this.sprShoot;
        _girl.nextFrame.call(this, 0.16);
        this.dxReal = this.dx + 120;
        if (this.genTime > 2) {
          this.madeShoot = true;
        }
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
        _girl.nextFrame.call(this, 0.16);
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
        _girl.nextFrame.call(this, 0.16);
        this.dx -= 1;
      }
      if (this.dead && this.deadTime >= 60) {
        this.dy = 350;this.dx -= 1;
      }
      if (this.madeShoot) this.positionArrow.x -= 2.5;
      if (!this.dead) this.dx -= 1.5;
    }
  }, {
    key: 'draw',
    value: function draw() {
      _Canvas2D2.default.drawSpr(this.spr, this.sx, this.sy, this.frameWidth, this.frameHight, this.dx, this.dy, this.frameWidth, this.frameHight);
      if (this.genTime > 2.5 && this.madeShoot) {
        _Canvas2D2.default.drawImage(this.arrow, this.positionArrow);
      }
    }
  }]);

  return GnomGreen;
}();

exports.default = GnomGreen;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

var _girl = __webpack_require__(4);

var _CanvasSpr = __webpack_require__(1);

var _CanvasSpr2 = _interopRequireDefault(_CanvasSpr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GnomBlue = function () {
  function GnomBlue(spr, spell, sound) {
    _classCallCheck(this, GnomBlue);

    this.spr = spr;
    this.sound = sound;
    this.spellSpr = spell;
    this.positionArrow = { x: 700, y: 400 };
    this.frameWidth = 94;
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
    this.spell = null;
  }

  _createClass(GnomBlue, [{
    key: 'update',
    value: function update() {
      var _this = this;

      this.genTime += 0.02;
      if (this.genTime <= 1.4 && !this.dead) {
        _girl.nextFrame.call(this, 0.16);
        this.dxReal = this.dx;
      }
      if (this.genTime > 1.4 && !this.shoot && !this.dead) {
        this.frameIndex = 0;
        this.sx = 0;
        this.sy = 0;
        this.time = 0;
        this.frameWidth = 205;
        this.frameHight = 120;
        this.shoot = true;
        this.shooting = true;
        this.spell = new _CanvasSpr2.default(this.spellSpr, 0, 25, 25, 6, 3, 6);
        this.dx = 690;
        this.dxReal = this.dx + 120;
        setTimeout(function () {
          _this.sound.play();
        }, 500);
      }
      if (this.genTime > 1.4 && this.genTime < 2.5 && !this.dead) {
        _girl.nextFrame.call(this, 0.16);
        this.dxReal = this.dx + 120;
        if (this.genTime > 2) {
          this.madeShoot = true;
        }
      }
      if (this.genTime > 2.5 && !this.goAgain && !this.dead) {
        this.shooting = false;
        this.frameIndex = 0;
        this.sx = 0;
        this.time = 0;
        this.frameWidth = 94;
        this.frameHight = 120;
        this.goAgain = true;
        this.dx = 725;
        this.dxReal = this.dx;
      }
      if (this.genTime > 2.5 && !this.dead) {
        this.sy = 240;
        _girl.nextFrame.call(this, 0.16);
        this.dxReal = this.dx;
      }
      if (this.dead && this.deadTime === 0) {
        this.frameIndex = 0;
        this.sx = 0;
        this.sy = 120;
        this.time = 0;
        this.frameWidth = 139;
        this.frameHight = 120;
        this.deadTime += 1;
        this.dxReal = null;
        if (this.shooting) this.dx += 120;
      }
      if (this.dead && this.deadTime > 0 && this.deadTime < 60) {
        this.deadTime += 1;
        _girl.nextFrame.call(this, 0.16);
        this.dx -= 1;
      }
      if (this.dead && this.deadTime >= 60) {
        this.dy = 350;this.dx -= 1;
      }
      if (this.madeShoot) {
        this.positionArrow.x -= 4;
        this.positionArrow.x > 550 ? this.positionArrow.y -= 3.5 : this.positionArrow.y += 1;
        this.spell.update();
      }
      if (!this.dead) this.dx -= 1.5;
    }
  }, {
    key: 'draw',
    value: function draw() {
      _Canvas2D2.default.drawSpr(this.spr, this.sx, this.sy, this.frameWidth, this.frameHight, this.dx, this.dy, this.frameWidth, this.frameHight);
      if (this.genTime > 2.5 && this.madeShoot) {
        this.spell.draw(0, this.positionArrow.x, this.positionArrow.y);
      }
    }
  }]);

  return GnomBlue;
}();

exports.default = GnomBlue;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _CanvasSpr2 = __webpack_require__(1);

var _CanvasSpr3 = _interopRequireDefault(_CanvasSpr2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dragon = function (_CanvasSpr) {
  _inherits(Dragon, _CanvasSpr);

  function Dragon(sprite) {
    _classCallCheck(this, Dragon);

    var _this = _possibleConstructorReturn(this, (Dragon.__proto__ || Object.getPrototypeOf(Dragon)).call(this, sprite, 0, 118, 85, 4, 10, 4));

    _this.x = 950;
    _this.y = 0;
    return _this;
  }

  _createClass(Dragon, [{
    key: 'update',
    value: function update() {
      _get(Dragon.prototype.__proto__ || Object.getPrototypeOf(Dragon.prototype), 'update', this).call(this);
      this.x -= 1.1;
      if (this.x < -100) {
        this.x = 950;
        this.y = 0;
      }
      if (this.x >= 100) this.y += 0.35;else if (this.x < 45) this.y -= 3.5;
    }
  }, {
    key: 'draw',
    value: function draw() {
      _get(Dragon.prototype.__proto__ || Object.getPrototypeOf(Dragon.prototype), 'draw', this).call(this, 0, this.x, this.y);
    }
  }]);

  return Dragon;
}(_CanvasSpr3.default);

exports.default = Dragon;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _CanvasSpr2 = __webpack_require__(1);

var _CanvasSpr3 = _interopRequireDefault(_CanvasSpr2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpareBullets = function (_CanvasSpr) {
  _inherits(SpareBullets, _CanvasSpr);

  function SpareBullets(sprite) {
    _classCallCheck(this, SpareBullets);

    var _this = _possibleConstructorReturn(this, (SpareBullets.__proto__ || Object.getPrototypeOf(SpareBullets)).call(this, sprite, 0, 46, 24, 2, 10, 2));

    _this.x = 950;
    _this.y = 190;
    return _this;
  }

  _createClass(SpareBullets, [{
    key: 'update',
    value: function update() {
      _get(SpareBullets.prototype.__proto__ || Object.getPrototypeOf(SpareBullets.prototype), 'update', this).call(this);
      this.x -= 1;
    }
  }, {
    key: 'draw',
    value: function draw() {
      _get(SpareBullets.prototype.__proto__ || Object.getPrototypeOf(SpareBullets.prototype), 'draw', this).call(this, 0, this.x, this.y);
    }
  }]);

  return SpareBullets;
}(_CanvasSpr3.default);

exports.default = SpareBullets;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayScore = exports.diplayGameOver = exports.aboutGame = undefined;

var _Canvas2D = __webpack_require__(0);

var _Canvas2D2 = _interopRequireDefault(_Canvas2D);

var _Color = __webpack_require__(5);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aboutGame = function aboutGame(bulletInGun, bulletsIn, live, heart, shitHappens, shitdown, score) {
  // Canvas2D.drawText('LIVES:', { x: 5, y: 140 }, Color.olive);
  // /Canvas2D.drawText('Bullets:', { x: 5, y: 200 }, Color.olive);
  for (var i = 0; i < bulletInGun; i++) {
    _Canvas2D2.default.drawImage(bulletsIn, { x: 10 + 15 * i, y: 190 }, 80);
  }
  for (var _i = 0; _i < live; _i++) {
    _Canvas2D2.default.drawImage(heart, { x: 10 + 22 * _i, y: 140 });
  }
  if (shitHappens) {
    _Canvas2D2.default.drawText('shit happens', { x: 5, y: 220 }, _Color2.default.myblue);
    for (var _i2 = 0; _i2 < shitHappens; _i2++) {
      _Canvas2D2.default.drawImage(shitdown, { x: 10 + 22 * _i2, y: 240 });
    }
  }
  _Canvas2D2.default.drawText('SCORE:' + score, { x: 5, y: 110 }, _Color2.default.myblue, '25px');
};

var diplayGameOver = function diplayGameOver(gameover) {
  _Canvas2D2.default.drawImage(gameover, { x: 160, y: 150 });
  _Canvas2D2.default.drawRect(325, 280, 250, 50);
  _Canvas2D2.default.drawRect(323, 278, 254, 54, 2, _Color2.default.ghostWhite);
  _Canvas2D2.default.fillRect(330, 285, 245, 45, 'rgba(76, 63, 191, 0.3)');
};
var displayScore = function displayScore(score) {
  _Canvas2D2.default.fillRect(300, 50, 300, 60, '#dc9e44');
  _Canvas2D2.default.drawText('BEST SCORE:' + score, { x: 320, y: 60 }, '#3a270c', '35px');
};

exports.aboutGame = aboutGame;
exports.diplayGameOver = diplayGameOver;
exports.displayScore = displayScore;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dragonTakesGirl = function dragonTakesGirl(Game, assets) {
  if (Game.dragon && !Game.girl.Drown) {
    if (Game.dragon.x <= 100 && Game.dragon.x > 45 && !Game.girl.slide && !Game.girl.inDragonHands) {
      Game.girl.inDragonHands = true;
      Game.girl.keyListen = false;
      Game.girl.startNewState();
      assets.scream2.play();
    }
  }
};
var girlDrowning = function girlDrowning(Game, assets) {
  if (Game.girl.dx > Game.ground.position.x + 970 && Game.girl.dx < Game.ground.position.x + 1090 && Game.girl.dy > 299 && !Game.girl.Drown) {
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

var girlStepsOnShit = function girlStepsOnShit(Game, assets) {
  if (Game.girl.dx + 90 > Game.bird.shitX && Game.girl.dx + 30 < Game.bird.shitX && Game.girl.dy > 295 && Game.bird.shitY > 280) Game.girl.SayShit += 1;
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

var girlHitByArrow = function girlHitByArrow(Game) {
  if (Game.girl.dx + 100 > Game.gnom.positionArrow.x && Game.girl.dx + 80 < Game.gnom.positionArrow.x && Game.girl.dy > 260 && Game.deadTime === 0) Game.dead = true;
};

var gnomHitByBullet = function gnomHitByBullet(Game, assets) {
  for (var i = 0; i < Game.girl.bullets.length; i += 1) {
    var bullet = Game.girl.bullets[i];
    if (bullet.x + 15 < Game.gnom.dxReal && bullet.x + 25 > Game.gnom.dxReal) {
      Game.girl.bullets.shift();
      Game.gnom.dead = true;
      assets.pain5.play();
      Game.score += 10;
    }
  }
};

var girlHitByGnom = function girlHitByGnom(Game, assets) {
  if (!Game.gnom.dead && Game.girl.dx + 70 > Game.gnom.dx && Game.girl.dx + 20 < Game.gnom.dx && Game.girl.dy > 220 && Game.deadTime === 0) Game.dead = true;
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
var girlHitGnomByKnife = function girlHitGnomByKnife(Game, assets) {
  if (Game.gnom.dx < 175 && Game.gnom.dx > 160 && Game.girl.melee && !Game.gnom.dead) {
    Game.gnom.dead = true;
    assets.pain5.play();
    Game.score += 10;
  }
};
var girlTakesBullets = function girlTakesBullets(Game, assets) {
  if (Game.girl.dy < 150 && Game.spareBullets.x > 120 && Game.spareBullets.x < 145) {
    Game.spareBullets = null;
    assets.gunReload.play();
    Game.girl.bulletInGun += 5;
    console.log('bullet taken');
  }
};

exports.dragonTakesGirl = dragonTakesGirl;
exports.girlDrowning = girlDrowning;
exports.girlStepsOnShit = girlStepsOnShit;
exports.gnomHitByBullet = gnomHitByBullet;
exports.girlHitByArrow = girlHitByArrow;
exports.girlHitByGnom = girlHitByGnom;
exports.girlHitGnomByKnife = girlHitGnomByKnife;
exports.girlTakesBullets = girlTakesBullets;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setScore = function setScore(score) {
  if (typeof Storage !== 'undefined') {
    var highscore = localStorage.getItem('highscore');

    if (highscore !== null) {
      if (score > highscore) {
        localStorage.setItem('highscore', score);
      }
    } else {
      localStorage.setItem('highscore', score);
    }
    return localStorage.getItem('highscore');
  }
};

exports.setScore = setScore;

/***/ })
/******/ ]);