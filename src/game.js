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
    // make an array of placeholder objects whose isAlive property matches that
    // of the cells in the first row of the grid, to store the current state
    // of the first row to use when calculating the next state of the last row
    const firstRowBuffer = [];
    for (let colIndex = 0; colIndex < this.numCols; colIndex++) {
      firstRowBuffer.push({ isAlive: this.grid[0][colIndex].isAlive });
    }

    // set up the variables needed to loop through all the rows
    const lastRowIndex = this.numRows - 1;
    let currRowIsAlive = null;
    let prevRowIsAlive = this.rowAliveNextStep(
      this.grid[lastRowIndex],
      this.grid[0],
      this.grid[1]);

    // loop through all rows except the first and last row
    for (let rowIndex = 1; rowIndex < lastRowIndex; rowIndex++) {
      // calculate isAlive property in the next step for cells in current row
      currRowIsAlive = this.rowAliveNextStep(
        this.grid[rowIndex - 1],
        this.grid[rowIndex],
        this.grid[rowIndex + 1]
      );

      // update the isAlive property for cells in the previous row
      for (let colIndex = 0; colIndex < this.numCols; colIndex++) {
        this.grid[rowIndex - 1][colIndex].isAlive = prevRowIsAlive[colIndex];
      }

      // save current row as prevRow so it can be updated in next interation
      prevRowIsAlive = currRowIsAlive;
    }

    // calculate isAlive property in the next step for cells in the last row
    currRowIsAlive = this.rowAliveNextStep(
      this.grid[lastRowIndex - 1],
      this.grid[lastRowIndex],
      firstRowBuffer
    );

    // update the isAlive property for cells in the last two rows
    for (let colIndex = 0; colIndex < this.numCols; colIndex++) {
      this.grid[lastRowIndex - 1][colIndex].isAlive = prevRowIsAlive[colIndex];
      this.grid[lastRowIndex][colIndex].isAlive = currRowIsAlive[colIndex];
    }
  }

  rowAliveNextStep(rowAbove, rowTarget, rowBelow) {
    // get the index of the last cell in a row
    const lastIdx = rowAbove.length - 1;

    // initialize an array to store whether cells will be alive (true/false)
    const aliveNextStep = [];

    // determine if the left-edge cell will be alive in the next step
    // due to edge wrapping, this depends on last column and first two columns
    aliveNextStep.push(
      this.cellAliveNextStep(rowAbove, rowTarget, rowBelow, lastIdx, 0, 1)
    );

    // determine if the non-edge cells will be alive in the next step
    for (let i = 1; i < lastIdx; i++) {
      aliveNextStep.push(
        this.cellAliveNextStep(rowAbove, rowTarget, rowBelow, i - 1, i, i + 1)
      );
    }

    // determine if the right-edge cell will be alive in the next step
    // due to edge wrapping, this depends on last two columns and first column
    aliveNextStep.push(
      this.cellAliveNextStep(rowAbove, rowTarget, rowBelow, lastIdx - 1, lastIdx, 0)
    );

    return aliveNextStep;
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

  toggleAliveDead(clientX, clientY) {
    const row = Math.floor(clientY / this.cellSize);
    const col = Math.floor(clientX / this.cellSize);
    this.grid[row][col].toggleAliveDead();
  }
}

module.exports = Game;
