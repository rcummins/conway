class StepUtility {
  step(grid) {
    // get the dimensions of the grid
    const numRows = grid.length;
    const numCols = grid[0].length;

    // set up the variables needed to loop through all the rows
    const lastRowIndex = numRows - 1;
    const gridAliveNextGen = [];

    // calculate isAlive property in next generation for cells in the first row
    // due to edge wrapping, this depends on last row and first two rows
    gridAliveNextGen.push(this.rowAliveNextGen(
      grid[lastRowIndex],
      grid[0],
      grid[1]
    ));

    // loop through all rows except the first and last row
    for (let rowIndex = 1; rowIndex < lastRowIndex; rowIndex++) {
      // calculate isAlive property in next generation for cells in current row
      gridAliveNextGen.push(this.rowAliveNextGen(
        grid[rowIndex - 1],
        grid[rowIndex],
        grid[rowIndex + 1]
      ));
    }

    // calculate isAlive property in next generation for cells in the last row
    // due to edge wrapping, this depends on last two rows and first row
    gridAliveNextGen.push(this.rowAliveNextGen(
      grid[lastRowIndex - 1],
      grid[lastRowIndex],
      grid[0]
    ));

    // update all cells in the grid to reflect their state in next generation
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      for (let colIndex = 0; colIndex < numCols; colIndex++) {
        grid[rowIndex][colIndex].isAlive = gridAliveNextGen[rowIndex][colIndex];
      }
    }
  }

  rowAliveNextGen(rowAbove, rowTarget, rowBelow) {
    // get the index of the last cell in a row
    const lastIdx = rowAbove.length - 1;

    // initialize an array to store whether cells will be alive (true/false)
    const aliveNextGen = [];

    // determine if the left-edge cell will be alive in the next generation
    // due to edge wrapping, this depends on last column and first two columns
    aliveNextGen.push(
      this.cellAliveNextGen(rowAbove, rowTarget, rowBelow, lastIdx, 0, 1)
    );

    // determine if the non-edge cells will be alive in the next generation
    for (let i = 1; i < lastIdx; i++) {
      aliveNextGen.push(
        this.cellAliveNextGen(rowAbove, rowTarget, rowBelow, i - 1, i, i + 1)
      );
    }

    // determine if the right-edge cell will be alive in the next generation
    // due to edge wrapping, this depends on last two columns and first column
    aliveNextGen.push(
      this.cellAliveNextGen(rowAbove, rowTarget, rowBelow, lastIdx - 1, lastIdx, 0)
    );

    return aliveNextGen;
  }

  cellAliveNextGen(rowAbove, rowTarget, rowBelow, idxLeft, idxTarget, idxRight) {
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

    // determine whether the target cell will be alive in the next generation
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

module.exports = StepUtility;
