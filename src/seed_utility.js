class SeedUtility {
  gliders(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    for (let row = 0; row <= numRows - 5; row += 5) {
      for (let col = 0; col <= numCols - 5; col += 5) {
        if (Math.random() < 0.3) { // approx. 30% of canvas filled with gliders
          grid[row + 1][col + 2].isAlive = true;
          grid[row + 2][col + 3].isAlive = true;
          grid[row + 3][col + 1].isAlive = true;
          grid[row + 3][col + 2].isAlive = true;
          grid[row + 3][col + 3].isAlive = true;
        }
      }
    }
  }

  galaxies(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    for (let row = 0; row <= numRows - 15; row += 15) {
      for (let col = 0; col <= numCols - 15; col += 15) {
        if (Math.random() < 0.3) { // approx. 30% of canvas filled with galaxies
          grid[row + 3][col + 3].isAlive = true;
          grid[row + 3][col + 4].isAlive = true;
          grid[row + 3][col + 6].isAlive = true;
          grid[row + 3][col + 7].isAlive = true;
          grid[row + 3][col + 8].isAlive = true;
          grid[row + 3][col + 9].isAlive = true;
          grid[row + 3][col + 10].isAlive = true;
          grid[row + 3][col + 11].isAlive = true;
          grid[row + 4][col + 3].isAlive = true;
          grid[row + 4][col + 4].isAlive = true;
          grid[row + 4][col + 6].isAlive = true;
          grid[row + 4][col + 7].isAlive = true;
          grid[row + 4][col + 8].isAlive = true;
          grid[row + 4][col + 9].isAlive = true;
          grid[row + 4][col + 10].isAlive = true;
          grid[row + 4][col + 11].isAlive = true;
          grid[row + 5][col + 3].isAlive = true;
          grid[row + 5][col + 4].isAlive = true;
          grid[row + 6][col + 3].isAlive = true;
          grid[row + 6][col + 4].isAlive = true;
          grid[row + 6][col + 10].isAlive = true;
          grid[row + 6][col + 11].isAlive = true;
          grid[row + 7][col + 3].isAlive = true;
          grid[row + 7][col + 4].isAlive = true;
          grid[row + 7][col + 10].isAlive = true;
          grid[row + 7][col + 11].isAlive = true;
          grid[row + 8][col + 3].isAlive = true;
          grid[row + 8][col + 4].isAlive = true;
          grid[row + 8][col + 10].isAlive = true;
          grid[row + 8][col + 11].isAlive = true;
          grid[row + 9][col + 10].isAlive = true;
          grid[row + 9][col + 11].isAlive = true;
          grid[row + 10][col + 3].isAlive = true;
          grid[row + 10][col + 4].isAlive = true;
          grid[row + 10][col + 5].isAlive = true;
          grid[row + 10][col + 6].isAlive = true;
          grid[row + 10][col + 7].isAlive = true;
          grid[row + 10][col + 8].isAlive = true;
          grid[row + 10][col + 10].isAlive = true;
          grid[row + 10][col + 11].isAlive = true;
          grid[row + 11][col + 3].isAlive = true;
          grid[row + 11][col + 4].isAlive = true;
          grid[row + 11][col + 5].isAlive = true;
          grid[row + 11][col + 6].isAlive = true;
          grid[row + 11][col + 7].isAlive = true;
          grid[row + 11][col + 8].isAlive = true;
          grid[row + 11][col + 10].isAlive = true;
          grid[row + 11][col + 11].isAlive = true;
        }
      }
    }
  }

  pulsars(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    for (let row = 0; row <= numRows - 17; row += 17) {
      for (let col = 0; col <= numCols - 17; col += 17) {
        if (Math.random() < 0.3) { // approx. 30% of canvas filled with pulsars
          grid[row + 2][col + 4].isAlive = true;
          grid[row + 2][col + 5].isAlive = true;
          grid[row + 2][col + 6].isAlive = true;
          grid[row + 2][col + 10].isAlive = true;
          grid[row + 2][col + 11].isAlive = true;
          grid[row + 2][col + 12].isAlive = true;
          grid[row + 4][col + 2].isAlive = true;
          grid[row + 4][col + 7].isAlive = true;
          grid[row + 4][col + 9].isAlive = true;
          grid[row + 4][col + 14].isAlive = true;
          grid[row + 5][col + 2].isAlive = true;
          grid[row + 5][col + 7].isAlive = true;
          grid[row + 5][col + 9].isAlive = true;
          grid[row + 5][col + 14].isAlive = true;
          grid[row + 6][col + 2].isAlive = true;
          grid[row + 6][col + 7].isAlive = true;
          grid[row + 6][col + 9].isAlive = true;
          grid[row + 6][col + 14].isAlive = true;
          grid[row + 7][col + 4].isAlive = true;
          grid[row + 7][col + 5].isAlive = true;
          grid[row + 7][col + 6].isAlive = true;
          grid[row + 7][col + 10].isAlive = true;
          grid[row + 7][col + 11].isAlive = true;
          grid[row + 7][col + 12].isAlive = true;
          grid[row + 9][col + 4].isAlive = true;
          grid[row + 9][col + 5].isAlive = true;
          grid[row + 9][col + 6].isAlive = true;
          grid[row + 9][col + 10].isAlive = true;
          grid[row + 9][col + 11].isAlive = true;
          grid[row + 9][col + 12].isAlive = true;
          grid[row + 10][col + 2].isAlive = true;
          grid[row + 10][col + 7].isAlive = true;
          grid[row + 10][col + 9].isAlive = true;
          grid[row + 10][col + 14].isAlive = true;
          grid[row + 11][col + 2].isAlive = true;
          grid[row + 11][col + 7].isAlive = true;
          grid[row + 11][col + 9].isAlive = true;
          grid[row + 11][col + 14].isAlive = true;
          grid[row + 12][col + 2].isAlive = true;
          grid[row + 12][col + 7].isAlive = true;
          grid[row + 12][col + 9].isAlive = true;
          grid[row + 12][col + 14].isAlive = true;
          grid[row + 14][col + 4].isAlive = true;
          grid[row + 14][col + 5].isAlive = true;
          grid[row + 14][col + 6].isAlive = true;
          grid[row + 14][col + 10].isAlive = true;
          grid[row + 14][col + 11].isAlive = true;
          grid[row + 14][col + 12].isAlive = true;
        }
      }
    }
  }
}

module.exports = SeedUtility;
