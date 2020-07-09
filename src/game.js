const Cell = require('./cell');
const COLORS = require('./colors');
const SeedUtility = require('./seed_utility');
const SizeUtility = require('./size_utility');
const StepUtility = require('./step_utility');

class Game {
  constructor(windowWidth, windowHeight) {
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
    this.seedUtility = new SeedUtility();
    this.sizeUtility = new SizeUtility(windowWidth, windowHeight);
    this.stepUtility = new StepUtility();
    this.changeColors();
    this.changeCellSize(this.sizeUtility.sliderHalfwayValue);
    this.changeSeedPattern('random');
    this.populateGrid();
  }

  changeColors() {
    this.colorScheme = this.randomColorScheme();
  }

  changeCellSize(sliderValue) {
    this.cellSize = this.sizeUtility.calculateCellSize(sliderValue);
    this.numCols = Math.ceil(this.windowWidth / this.cellSize);
    this.numRows = Math.ceil(this.windowHeight / this.cellSize);
  }

  changeSeedPattern(newSeedPattern) {
    this.seedPattern = newSeedPattern;
  }

  populateGrid() {
    this.grid = Array.from(new Array(this.numRows), () => []);

    // fill grid with dead cells
    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        this.grid[row].push(new Cell(row, col, this.cellSize, false));
      }
    }

    // change certain cells to alive to initialize the pattern
    this.seedUtility.initializePattern(this.grid, this.seedPattern);
  }

  randomColorScheme() {
    // check browser's localStorage to make sure the new color scheme is
    // different from the previous color scheme
    var previousColorIndex = localStorage.getItem('colorIndex');
    var colorIndex = this.randomDifferentColorIndex(previousColorIndex);
    localStorage.setItem('colorIndex', colorIndex);

    // return an object containing complementary colors for live and dead cells
    return {
      colorAlive: COLORS.alive[colorIndex],
      colorDead: COLORS.dead[colorIndex]
    };
  }

  randomDifferentColorIndex(previousColorIndex = null) {
    var indices = [...Array(COLORS.alive.length).keys()];
    if (previousColorIndex !== null) {
      indices.splice(previousColorIndex, 1);
    }
    return indices[Math.floor(Math.random()*indices.length)];
  }

  render(ctx) {
    // draw a single background rectangle representing all the dead cells
    ctx.fillStyle = this.colorScheme.colorDead;
    ctx.fillRect(0, 0, this.windowWidth, this.windowHeight);

    // call render on each cell. Only living cells will be drawn
    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        this.grid[row][col].render(ctx, this.colorScheme.colorAlive);
      }
    }
  }

  restart() {
    this.populateGrid();
  }

  step() {
    this.stepUtility.step(this.grid);
  }

  toggleAliveDead(clientX, clientY) {
    const row = Math.floor(clientY / this.cellSize);
    const col = Math.floor(clientX / this.cellSize);
    this.grid[row][col].toggleAliveDead();
  }
}

module.exports = Game;
