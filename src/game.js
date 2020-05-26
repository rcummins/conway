const Cell = require('./cell');

class Game {
  constructor(windowWidth, windowHeight) {
    this.cellSize = 20;
    this.numCols = Math.ceil(windowWidth / this.cellSize);
    this.numRows = Math.ceil(windowHeight / this.cellSize);
    this.grid = this.populateGrid();
  }

  populateGrid() {
    const grid = Array.from(new Array(this.numRows), () => []);

    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        grid[row].push(new Cell(row, col, this.cellSize));
      }
    }

    return grid;
  }

  render(ctx) {
    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        this.grid[row][col].render(ctx);
      }
    }
  }
}

module.exports = Game;
