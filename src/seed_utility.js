class SeedUtility {
  constructor() {
    this.occurrenceFrequency = {
      galaxies: 0.3,
      gliders: 0.3,
      pulsars: 0.3
    };
    this.patternSize = {
      galaxies: 15,
      gliders: 5,
      pulsars: 17
    };
    this.rowOffsets = {
      galaxies: [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6,
        6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11,
        11, 11, 11, 11, 11, 11],
      gliders: [1, 2, 3, 3, 3],
      pulsars: [2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7,
        7, 7, 7, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12,
        12, 14, 14, 14, 14, 14, 14]
    };
    this.colOffsets = {
      galaxies: [3, 4, 6, 7, 8, 9, 10, 11, 3, 4, 6, 7, 8, 9, 10, 11, 3, 4, 3, 4,
        10, 11, 3, 4, 10, 11, 3, 4, 10, 11, 10, 11, 3, 4, 5, 6, 7, 8, 10, 11, 3,
        4, 5, 6, 7, 8, 10, 11],
      gliders: [2, 3, 1, 2, 3],
      pulsars: [4, 5, 6, 10, 11, 12, 2, 7, 9, 14, 2, 7, 9, 14, 2, 7, 9, 14, 4,
        5, 6, 10, 11, 12, 4, 5, 6, 10, 11, 12, 2, 7, 9, 14, 2, 7, 9, 14, 2, 7,
        9, 14, 4, 5, 6, 10, 11, 12]
    };
  }

  initializePattern(grid, seedPattern) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const occurrenceFrequency = this.occurrenceFrequency[seedPattern];
    const patternSize = this.patternSize[seedPattern];
    const rowOffsets = this.rowOffsets[seedPattern];
    const colOffsets = this.colOffsets[seedPattern];
    let totalPatternsInitialized = 0;

    while (totalPatternsInitialized === 0) {
      for (let row = 0; row <= numRows - patternSize; row += patternSize) {
        for (let col = 0; col <= numCols - patternSize; col += patternSize) {
          if (Math.random() < occurrenceFrequency) {
            totalPatternsInitialized += 1;
            for (let i = 0; i < rowOffsets.length; i++) {
              grid[row + rowOffsets[i]][col + colOffsets[i]].isAlive = true;
            }
          }
        }
      }
    }
  }
}

module.exports = SeedUtility;
