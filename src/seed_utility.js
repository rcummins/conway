class SeedUtility {
  gliders(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const rowOffsets = [1, 2, 3, 3, 3];
    const colOffsets = [2, 3, 1, 2, 3];

    for (let row = 0; row <= numRows - 5; row += 5) {
      for (let col = 0; col <= numCols - 5; col += 5) {
        if (Math.random() < 0.3) { // approx. 30% of canvas filled with gliders
          for (let i = 0; i < rowOffsets.length; i++) {
            grid[row + rowOffsets[i]][col + colOffsets[i]].isAlive = true;
          }
        }
      }
    }
  }

  galaxies(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const rowOffsets =
      [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7,
      7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11,
      11, 11, 11, 11];
    const colOffsets =
      [3, 4, 6, 7, 8, 9, 10, 11, 3, 4, 6, 7, 8, 9, 10, 11, 3, 4, 3, 4, 10, 11,
      3, 4, 10, 11, 3, 4, 10, 11, 10, 11, 3, 4, 5, 6, 7, 8, 10, 11, 3, 4, 5, 6,
      7, 8, 10, 11];

    for (let row = 0; row <= numRows - 15; row += 15) {
      for (let col = 0; col <= numCols - 15; col += 15) {
        if (Math.random() < 0.3) { // approx. 30% of canvas filled with galaxies
          for (let i = 0; i < rowOffsets.length; i++) {
            grid[row + rowOffsets[i]][col + colOffsets[i]].isAlive = true;
          }
        }
      }
    }
  }

  pulsars(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const rowOffsets =
      [2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7,
      9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 14, 14,
      14, 14, 14, 14];
    const colOffsets =
      [4, 5, 6, 10, 11, 12, 2, 7, 9, 14, 2, 7, 9, 14, 2, 7, 9, 14, 4, 5, 6, 10,
      11, 12, 4, 5, 6, 10, 11, 12, 2, 7, 9, 14, 2, 7, 9, 14, 2, 7, 9, 14, 4, 5,
      6, 10, 11, 12];

    for (let row = 0; row <= numRows - 17; row += 17) {
      for (let col = 0; col <= numCols - 17; col += 17) {
        if (Math.random() < 0.3) { // approx. 30% of canvas filled with pulsars
          for (let i = 0; i < rowOffsets.length; i++) {
            grid[row + rowOffsets[i]][col + colOffsets[i]].isAlive = true;
          }
        }
      }
    }
  }
}

module.exports = SeedUtility;
