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
        grid[row].push(Cell.newRandomCell(row, col, this.cellSize));
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

  step() {
    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        this.grid[row][col].isAlive = !this.grid[row][col].isAlive;
      }
    }
  }

  cellAliveNextStep(rowAbove, rowTarget, rowBelow, idxLeft, idxTarget, idxRight) {
    // identify the 9 cells in the neighborhood including target cell in center
    const neighborhood = [
      rowAbove[idxLeft],
      rowAbove[idxTarget],
      rowAbove[idxRight],
      rowTarget[idxLeft],
      rowTarget[idxTarget],
      rowTarget[idxRight],
      rowBelow[idxLeft],
      rowBelow[idxTarget],
      rowBelow[idxRight]
    ];

    // calculate the total number of currently living cells in neighborhood
    const totalLiveCells = neighborhood.reduce((accumulator, currentCell) => {
      if (currentCell.isAlive) {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);

    // determine whether the target cell will be alive in the next step
    switch (totalLiveCells) {
      case 3:
        return true;
      case 4:
        return rowTarget[idxTarget].isAlive;
      default:
        return false;
    }
  }
}

module.exports = Game;
