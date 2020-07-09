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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Cell {\n  constructor(row, col, cellSize, isAlive) {\n    this.row = row;\n    this.col = col;\n    this.cellSize = cellSize;\n    this.isAlive = isAlive;\n  }\n\n  render(ctx, colorAlive) {\n    if (this.isAlive) {\n      ctx.fillStyle = colorAlive;\n      const xPos = this.col * this.cellSize;\n      const yPos = this.row * this.cellSize;\n      ctx.fillRect(xPos, yPos, this.cellSize, this.cellSize);\n    }\n  }\n\n  toggleAliveDead() {\n    this.isAlive = !this.isAlive;\n  }\n}\n\nmodule.exports = Cell;\n\n\n//# sourceURL=webpack:///./src/cell.js?");

/***/ }),

/***/ "./src/colors.js":
/*!***********************!*\
  !*** ./src/colors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const COLORS = {\n  alive: [\n    '#ed365b', // bright red\n    '#fa8072', // salmon\n    '#ff69b4', // hot pink\n    '#ff8c00', // dark orange\n    '#ffdf00', // golden yellow\n    '#00cc99', // caribbean green\n    '#00ced1', // dark turquoise\n    '#00bfff', // deep sky blue\n    '#007fff', // azure\n    '#966fd6', // dark pastel purple\n    '#800080'  // purple\n  ],\n  dead: [\n    '#fac6d1', // light red\n    '#fee6e4', // light salmon\n    '#ffdfef', // light pink\n    '#ffdcb1', // light orange\n    '#fffad8', // light yellow\n    '#ccfff2', // light green\n    '#d1feff', // light turquoise\n    '#d8f5ff', // light sky blue\n    '#c4e1ff', // light blue\n    '#e4daf4', // light pastel purple\n    '#ffe2ff'  // light purple\n  ]\n};\n\nmodule.exports = COLORS;\n\n\n//# sourceURL=webpack:///./src/colors.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Cell = __webpack_require__(/*! ./cell */ \"./src/cell.js\");\nconst COLORS = __webpack_require__(/*! ./colors */ \"./src/colors.js\");\nconst SeedUtility = __webpack_require__(/*! ./seed_utility */ \"./src/seed_utility.js\");\nconst SizeUtility = __webpack_require__(/*! ./size_utility */ \"./src/size_utility.js\");\nconst StepUtility = __webpack_require__(/*! ./step_utility */ \"./src/step_utility.js\");\n\nclass Game {\n  constructor(windowWidth, windowHeight) {\n    this.windowWidth = windowWidth;\n    this.windowHeight = windowHeight;\n    this.seedUtility = new SeedUtility();\n    this.sizeUtility = new SizeUtility(windowWidth, windowHeight);\n    this.stepUtility = new StepUtility();\n    this.changeColors();\n    this.changeCellSize(this.sizeUtility.sliderHalfwayValue);\n    this.changeSeedPattern('random');\n    this.populateGrid();\n  }\n\n  changeColors() {\n    this.colorScheme = this.randomColorScheme();\n  }\n\n  changeCellSize(sliderValue) {\n    this.cellSize = this.sizeUtility.calculateCellSize(sliderValue);\n    this.numCols = Math.ceil(this.windowWidth / this.cellSize);\n    this.numRows = Math.ceil(this.windowHeight / this.cellSize);\n  }\n\n  changeSeedPattern(newSeedPattern) {\n    this.seedPattern = newSeedPattern;\n  }\n\n  populateGrid() {\n    this.grid = Array.from(new Array(this.numRows), () => []);\n\n    // fill grid with dead cells\n    for (let row = 0; row < this.numRows; row++) {\n      for (let col = 0; col < this.numCols; col++) {\n        this.grid[row].push(new Cell(row, col, this.cellSize, false));\n      }\n    }\n\n    // change certain cells to alive to initialize the pattern\n    this.seedUtility.initializePattern(this.grid, this.seedPattern);\n  }\n\n  randomColorScheme() {\n    // check browser's localStorage to make sure the new color scheme is\n    // different from the previous color scheme\n    var previousColorIndex = localStorage.getItem('colorIndex');\n    var colorIndex = this.randomDifferentColorIndex(previousColorIndex);\n    localStorage.setItem('colorIndex', colorIndex);\n\n    // return an object containing complementary colors for live and dead cells\n    return {\n      colorAlive: COLORS.alive[colorIndex],\n      colorDead: COLORS.dead[colorIndex]\n    };\n  }\n\n  randomDifferentColorIndex(previousColorIndex = null) {\n    var indices = [...Array(COLORS.alive.length).keys()];\n    if (previousColorIndex !== null) {\n      indices.splice(previousColorIndex, 1);\n    }\n    return indices[Math.floor(Math.random()*indices.length)];\n  }\n\n  render(ctx) {\n    // draw a single background rectangle representing all the dead cells\n    ctx.fillStyle = this.colorScheme.colorDead;\n    ctx.fillRect(0, 0, this.windowWidth, this.windowHeight);\n\n    // call render on each cell. Only living cells will be drawn\n    for (let row = 0; row < this.numRows; row++) {\n      for (let col = 0; col < this.numCols; col++) {\n        this.grid[row][col].render(ctx, this.colorScheme.colorAlive);\n      }\n    }\n  }\n\n  restart() {\n    this.populateGrid();\n  }\n\n  step() {\n    this.stepUtility.step(this.grid);\n  }\n\n  toggleAliveDead(clientX, clientY) {\n    const row = Math.floor(clientY / this.cellSize);\n    const col = Math.floor(clientX / this.cellSize);\n    this.grid[row][col].toggleAliveDead();\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GameView {\n  constructor(game, canvasElement) {\n    this.game = game;\n    this.canvasElement = canvasElement;\n    this.ctx = canvasElement.getContext('2d', { alpha: false });\n    this.paused = false;\n    this.animationTimeoutID = null;\n    this.animationTimeStep = 150;\n  }\n\n  animate() {\n    if (!this.paused) {\n      this.game.step();\n      this.game.render(this.ctx);\n      this.animationTimeoutID = window.setTimeout(\n        this.animate.bind(this),\n        this.animationTimeStep\n      );\n    }\n  }\n\n  changeColors(e) {\n    e.preventDefault();\n    this.game.changeColors();\n    this.restartGame();\n  }\n\n  changeCellSize(e) {\n    e.preventDefault();\n    var sliderValue = e.target.valueAsNumber;\n    this.game.changeCellSize(sliderValue);\n    this.restartGame();\n  }\n\n  changeSeedPattern(e) {\n    this.game.changeSeedPattern(e.target.value);\n    this.restartGame();\n  }\n\n  changeSimulationSpeed(e) {\n    var sliderValue = e.target.valueAsNumber;\n    this.animationTimeStep = Math.floor(290 - 5 * sliderValue);\n    this.restartGame();\n  }\n\n  restartGame() {\n    this.game.restart();\n    window.clearTimeout(this.animationTimeoutID);\n    this.paused = false;\n    this.animate();\n  }\n\n  setupCanvasInteractivity() {\n    this.canvasElement.addEventListener('click', this.toggleAliveDead.bind(this));\n  }\n\n  setupControlPanel() {\n    const cellSizeSlider = document.getElementById('cell-size');\n    const speedSlider = document.getElementById('speed');\n    const seedPatternRadio = document.getElementById('seed-pattern');\n    const playPauseButton = document.getElementById('play-pause');\n    const changeColorsButton = document.getElementById('change-colors');\n\n    cellSizeSlider.addEventListener('change', this.changeCellSize.bind(this));\n    speedSlider.addEventListener('change', this.changeSimulationSpeed.bind(this));\n    seedPatternRadio.addEventListener('change', this.changeSeedPattern.bind(this));\n    playPauseButton.addEventListener('click', this.togglePlayPause.bind(this));\n    changeColorsButton.addEventListener('click', this.changeColors.bind(this));\n  }\n\n  start() {\n    this.setupControlPanel();\n    this.setupCanvasInteractivity();\n    this.animate();\n  }\n\n  toggleAliveDead(e) {\n    e.preventDefault();\n\n    if (this.paused) {\n      this.game.toggleAliveDead(e.clientX, e.clientY);\n      this.game.render(this.ctx);\n    }\n  }\n\n  togglePlayPause(e) {\n    e.preventDefault();\n\n    if (this.paused) {\n      this.paused = false;\n      this.animate();\n    } else {\n      this.paused = true;\n    }\n  }\n}\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvasElement = document.getElementById('game-canvas');\n\n  const windowWidth = window.innerWidth;\n  const windowHeight = window.innerHeight;\n  canvasElement.width = windowWidth;\n  canvasElement.height = windowHeight;\n\n  const game = new Game(windowWidth, windowHeight);\n  new GameView(game, canvasElement).start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/seed_utility.js":
/*!*****************************!*\
  !*** ./src/seed_utility.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class SeedUtility {\n  constructor() {\n    this.minBorderSize = {\n      galaxies: 15,\n      gliders: 9,\n      pulsars: 13,\n      random: 0\n    };\n    this.occurrenceFrequency = {\n      galaxies: 0.8,\n      gliders: 0.6,\n      pulsars: 0.6,\n      random: 0.2\n    };\n    this.patternPeriod = {\n      galaxies: 8,\n      gliders: 4,\n      pulsars: 3,\n      random: 1\n    };\n    this.patternSize = {\n      galaxies: 15,\n      gliders: 6,\n      pulsars: 17,\n      random: 1\n    };\n    this.rowOffsets = {\n      galaxies: [\n        [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8,\n          8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12],\n        [1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6,\n          6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9,\n          9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13],\n        [1, 1, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8,\n          9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 13, 13],\n        [2, 2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 9,\n          9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 12, 12],\n        [2, 2, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7,\n          8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 11, 12, 12],\n        [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 8, 8, 8, 9, 9, 10, 10, 10,\n          10, 10, 10, 11, 11, 11],\n        [3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6, 7, 7, 7, 7, 8, 8, 9, 10, 10,\n          10, 10, 10, 10, 11, 11, 11, 11, 11],\n        [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6,\n          6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11,\n          11, 11, 11, 11, 11, 11, 11],\n      ],\n      gliders: [\n        [1, 2, 3, 3, 3],\n        [1, 1, 2, 2, 3],\n        [1, 2, 2, 3, 3],\n        [1, 2, 2, 3, 3]\n      ],\n      pulsars: [\n        [2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7,\n          9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 14,\n          14, 14, 14, 14, 14],\n        [1, 1, 2, 2, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6,\n          7, 7, 7, 7, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11,\n          11, 11, 11, 11, 11, 13, 13, 13, 13, 14, 14, 15, 15],\n        [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,\n          6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10,\n          10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12,\n          12, 13, 13, 13, 13, 14, 14, 14, 14]\n      ],\n      random: [[0]]\n    };\n    this.colOffsets = {\n      galaxies: [\n        [7, 8, 9, 10, 3, 4, 6, 11, 2, 6, 11, 2, 7, 8, 2, 5, 10, 11, 2, 5, 9, 12,\n          3, 4, 9, 12, 6, 7, 12, 3, 8, 12, 3, 8, 10, 11, 4, 5, 6, 7],\n        [8, 9, 7, 8, 9, 10, 3, 5, 6, 8, 9, 11, 2, 5, 6, 1, 2, 3, 6, 7, 10, 11,\n          1, 2, 3, 6, 8, 9, 10, 11, 2, 5, 9, 12, 3, 4, 5, 6, 8, 11, 12, 13, 3,\n          4, 7, 8, 11, 12, 13, 8, 9, 12, 3, 5, 6, 8, 9, 11, 4, 5, 6, 7, 5, 6],\n        [7, 10, 6, 4, 5, 1, 8, 9, 11, 4, 8, 11, 4, 5, 6, 8, 12, 1, 13, 2, 6, 8,\n          9, 10, 3, 6, 10, 3, 5, 6, 13, 9, 10, 8, 4, 7],\n        [5, 6, 5, 4, 5, 8, 9, 10, 4, 8, 10, 11, 12, 4, 5, 7, 12, 6, 8, 2, 7, 9,\n          10, 2, 3, 4, 6, 10, 4, 5, 6, 9, 10, 9, 8, 9],\n        [5, 6, 9, 4, 5, 8, 10, 3, 6, 7, 8, 10, 12, 4, 5, 6, 7, 8, 9, 12, 5, 6,\n          8, 9, 2, 5, 6, 7, 8, 9, 10, 2, 4, 6, 7, 8, 11, 4, 6, 9, 10, 5, 8, 9],\n        [4, 6, 9, 4, 5, 6, 8, 10, 11, 3, 10, 4, 10, 11, 3, 4, 10, 4, 11, 3, 4,\n          6, 8, 9, 10, 5, 8, 10],\n        [4, 6, 7, 9, 10, 3, 4, 6, 7, 10, 11, 3, 10, 11, 3, 4, 10, 11, 3, 4, 11,\n          3, 4, 7, 8, 10, 11, 4, 5, 7, 8, 10],\n        [3, 4, 6, 7, 8, 9, 10, 11, 3, 4, 6, 7, 8, 9, 10, 11, 3, 4, 3, 4,\n          10, 11, 3, 4, 10, 11, 3, 4, 10, 11, 10, 11, 3, 4, 5, 6, 7, 8, 10, 11,\n          3, 4, 5, 6, 7, 8, 10, 11],\n      ],\n      gliders: [\n        [2, 3, 1, 2, 3],\n        [1, 3, 2, 3, 2],\n        [3, 1, 3, 2, 3],\n        [1, 2, 3, 1, 2]\n      ],\n      pulsars: [\n        [4, 5, 6, 10, 11, 12, 2, 7, 9, 14, 2, 7, 9, 14, 2, 7, 9, 14, 4, 5, 6,\n          10, 11, 12, 4, 5, 6, 10, 11, 12, 2, 7, 9, 14, 2, 7, 9, 14, 2, 7, 9,\n          14, 4, 5, 6, 10, 11, 12],\n        [5, 11, 5, 11, 5, 6, 10, 11, 1, 2, 3, 6, 7, 9, 10, 13, 14, 15, 3, 5, 7,\n          9, 11, 13, 5, 6, 10, 11, 5, 6, 10, 11, 3, 5, 7, 9, 11, 13, 1, 2, 3, 6,\n          7, 9, 10, 13, 14, 15, 5, 6, 10, 11, 5, 11, 5, 11],\n        [4, 5, 11, 12, 5, 6, 10, 11, 2, 5, 7, 9, 11, 14, 2, 3, 4, 6, 7, 9, 10,\n          12, 13, 14, 3, 5, 7, 9, 11, 13, 4, 5, 6, 10, 11, 12, 4, 5, 6, 10, 11,\n          12, 3, 5, 7, 9, 11, 13, 2, 3, 4, 6, 7, 9, 10, 12, 13, 14, 2, 5, 7, 9,\n          11, 14, 5, 6, 10, 11, 4, 5, 11, 12]\n      ],\n      random: [[0]]\n    };\n  }\n\n  initializePattern(grid, seedPattern) {\n    // save the number of rows and columns in the grid\n    const numRows = grid.length;\n    const numCols = grid[0].length;\n\n    // save the parameters that are specific to this seed pattern\n    const occurrenceFrequency = this.occurrenceFrequency[seedPattern];\n    const patternPeriod = this.patternPeriod[seedPattern];\n    const patternSize = this.patternSize[seedPattern];\n    const minBorderSize = this.minBorderSize[seedPattern];\n    const rowOffsets = this.rowOffsets[seedPattern];\n    const colOffsets = this.colOffsets[seedPattern];\n\n    // calculate size of rectangle within which each pattern is randomly shifted\n    const rectMinSize =  patternSize + minBorderSize;\n    const rectRows = Math.floor(numRows / Math.floor(numRows / rectMinSize));\n    const rectCols = Math.floor(numCols / Math.floor(numCols / rectMinSize));\n    const patternBorderRows = rectRows - patternSize;\n    const patternBorderCols = rectCols - patternSize;\n\n    // initialize variables that are changed inside the nested loops\n    let canvasEmpty = true;\n    let state = null;\n    let rowShift = null;\n    let colShift = null;\n    let rowFinal = null;\n    let colFinal = null;\n\n    while (canvasEmpty) {\n      for (let row = 0; row <= numRows - rectRows; row += rectRows) {\n        for (let col = 0; col <= numCols - rectCols; col += rectCols) {\n          if (Math.random() < occurrenceFrequency) {\n            // record that canvas is no longer empty, so we can stop outer loop\n            canvasEmpty = false;\n\n            // randomly choose among the different evolutionary states\n            state = Math.floor(Math.random() * patternPeriod);\n\n            // randomly shift pattern within rectangle (rectRows by rectCols)\n            rowShift = Math.floor(Math.random() * (patternBorderRows + 1));\n            colShift = Math.floor(Math.random() * (patternBorderCols + 1));\n\n            // set certain cells to alive to initialize pattern\n            for (let i = 0; i < rowOffsets[state].length; i++) {\n              rowFinal = row + rowOffsets[state][i] + rowShift;\n              colFinal = col + colOffsets[state][i] + colShift;\n              grid[rowFinal][colFinal].isAlive = true;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = SeedUtility;\n\n\n//# sourceURL=webpack:///./src/seed_utility.js?");

/***/ }),

/***/ "./src/size_utility.js":
/*!*****************************!*\
  !*** ./src/size_utility.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class SizeUtility {\n  constructor(windowWidth, windowHeight) {\n    this.windowWidth = windowWidth;\n    this.windowHeight = windowHeight;\n\n    // Minimum and maximum values of the range input element for cell size\n    this.sliderMinValue = 0;\n    this.sliderMaxValue = 50;\n    this.sliderHalfwayValue = (this.sliderMaxValue - this.sliderMinValue) / 2;\n\n    // There must never be fewer than 30 rows or 30 columns in the grid,\n    // otherwise the largest pattern will not fit in the grid\n    this.minNumCellsShortestDim = 30;\n\n    // Ideally, cells will never be smaller than 5 pixels by 5 pixels, but\n    // if the window is small enough, this requirement is relaxed so that\n    // there will never be fewer than 30 rows or 30 columns in the grid\n    this.minCellSize = 5;\n\n    // The length of the shortest window dimension\n    this.shortestDimLength = this.findShortestWindowDimensionLength();\n\n    // The maximum number of cells along the shortest dimension of the window\n    this.maxNumCellsShortestDim = this.shortestDimLength / this.minCellSize;\n\n    // The slope of calibration line relating slider value to number of cells\n    this.slope = this.calculateSlope();\n  }\n\n  calculateCellSize(sliderValue) {\n    // Calculate the number of rows or columns along the shortest window\n    // dimension, and make sure that it is not less than 30\n    var numCellsPrelim = sliderValue * this.slope + this.maxNumCellsShortestDim;\n    var numCellsShortestDimFinal = Math.max(\n      this.minNumCellsShortestDim,\n      numCellsPrelim\n    );\n\n    // Calculate the cell size based on the length of the shortest window\n    // dimension and the number of cells along that dimension, and round down\n    // to the next smaller integer.\n    // We want to round the cell size to an integer value because rendering\n    // canvas objects with fractional pixel coordinates slows down the browser.\n    // We want to round the cell size down (not up) so that there are never\n    // fewer than 30 rows or columns along the shortest window dimension.\n    return Math.floor(this.shortestDimLength / numCellsShortestDimFinal);\n  }\n\n  calculateSlope() {\n    // Calculate the slope of the calibration line, where:\n    // X represents the value of the range input element (slider value) and\n    // Y represents the number of cells along the shortest dimension of window\n    var slopeDiffX = this.sliderMinValue - this.sliderMaxValue;\n    var slopeDiffY = this.maxNumCellsShortestDim -this.minNumCellsShortestDim;\n    return slopeDiffY / slopeDiffX;\n  }\n\n  findShortestWindowDimensionLength() {\n    if (this.windowWidth < this.windowHeight) {\n      return this.windowWidth;\n    } else {\n      return this.windowHeight;\n    }\n  }\n}\n\nmodule.exports = SizeUtility;\n\n\n//# sourceURL=webpack:///./src/size_utility.js?");

/***/ }),

/***/ "./src/step_utility.js":
/*!*****************************!*\
  !*** ./src/step_utility.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class StepUtility {\n  step(grid) {\n    // get the dimensions of the grid\n    const numRows = grid.length;\n    const numCols = grid[0].length;\n\n    // make an array of placeholder objects whose isAlive property matches that\n    // of the cells in the first row of the grid, to store the current state\n    // of the first row to use when calculating the next state of the last row\n    const firstRowBuffer = [];\n    for (let colIndex = 0; colIndex < numCols; colIndex++) {\n      firstRowBuffer.push({ isAlive: grid[0][colIndex].isAlive });\n    }\n\n    // set up the variables needed to loop through all the rows\n    const lastRowIndex = numRows - 1;\n    let currRowIsAlive = null;\n    let prevRowIsAlive = this.rowAliveNextStep(\n      grid[lastRowIndex],\n      grid[0],\n      grid[1]);\n\n    // loop through all rows except the first and last row\n    for (let rowIndex = 1; rowIndex < lastRowIndex; rowIndex++) {\n      // calculate isAlive property in the next step for cells in current row\n      currRowIsAlive = this.rowAliveNextStep(\n        grid[rowIndex - 1],\n        grid[rowIndex],\n        grid[rowIndex + 1]\n      );\n\n      // update the isAlive property for cells in the previous row\n      for (let colIndex = 0; colIndex < numCols; colIndex++) {\n        grid[rowIndex - 1][colIndex].isAlive = prevRowIsAlive[colIndex];\n      }\n\n      // save current row as prevRow so it can be updated in next interation\n      prevRowIsAlive = currRowIsAlive;\n    }\n\n    // calculate isAlive property in the next step for cells in the last row\n    currRowIsAlive = this.rowAliveNextStep(\n      grid[lastRowIndex - 1],\n      grid[lastRowIndex],\n      firstRowBuffer\n    );\n\n    // update the isAlive property for cells in the last two rows\n    for (let colIndex = 0; colIndex < numCols; colIndex++) {\n      grid[lastRowIndex - 1][colIndex].isAlive = prevRowIsAlive[colIndex];\n      grid[lastRowIndex][colIndex].isAlive = currRowIsAlive[colIndex];\n    }\n  }\n\n  rowAliveNextStep(rowAbove, rowTarget, rowBelow) {\n    // get the index of the last cell in a row\n    const lastIdx = rowAbove.length - 1;\n\n    // initialize an array to store whether cells will be alive (true/false)\n    const aliveNextStep = [];\n\n    // determine if the left-edge cell will be alive in the next step\n    // due to edge wrapping, this depends on last column and first two columns\n    aliveNextStep.push(\n      this.cellAliveNextStep(rowAbove, rowTarget, rowBelow, lastIdx, 0, 1)\n    );\n\n    // determine if the non-edge cells will be alive in the next step\n    for (let i = 1; i < lastIdx; i++) {\n      aliveNextStep.push(\n        this.cellAliveNextStep(rowAbove, rowTarget, rowBelow, i - 1, i, i + 1)\n      );\n    }\n\n    // determine if the right-edge cell will be alive in the next step\n    // due to edge wrapping, this depends on last two columns and first column\n    aliveNextStep.push(\n      this.cellAliveNextStep(rowAbove, rowTarget, rowBelow, lastIdx - 1, lastIdx, 0)\n    );\n\n    return aliveNextStep;\n  }\n\n  cellAliveNextStep(rowAbove, rowTarget, rowBelow, idxLeft, idxTarget, idxRight) {\n    // identify the 9 cells in the neighborhood including target cell in center\n    const neighborhood = [\n      rowAbove[idxLeft],\n      rowAbove[idxTarget],\n      rowAbove[idxRight],\n      rowTarget[idxLeft],\n      rowTarget[idxTarget],\n      rowTarget[idxRight],\n      rowBelow[idxLeft],\n      rowBelow[idxTarget],\n      rowBelow[idxRight]\n    ];\n\n    // calculate the total number of currently living cells in neighborhood\n    const totalLiveCells = neighborhood.reduce((accumulator, currentCell) => {\n      if (currentCell.isAlive) {\n        return accumulator + 1;\n      } else {\n        return accumulator;\n      }\n    }, 0);\n\n    // determine whether the target cell will be alive in the next step\n    switch (totalLiveCells) {\n      case 3:\n        return true;\n      case 4:\n        return rowTarget[idxTarget].isAlive;\n      default:\n        return false;\n    }\n  }\n}\n\nmodule.exports = StepUtility;\n\n\n//# sourceURL=webpack:///./src/step_utility.js?");

/***/ })

/******/ });