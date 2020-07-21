class SeedUtility {
  constructor() {
    this.minBorderSize = {
      galaxies: 15,
      gliders: 9,
      pulsars: 13,
      random: 0
    };
    this.occurrenceFrequency = {
      galaxies: 0.8,
      gliders: 0.6,
      pulsars: 0.6,
      random: 0.2
    };
    this.patternPeriod = {
      galaxies: 8,
      gliders: 4,
      pulsars: 3,
      random: 1
    };
    this.patternSize = {
      galaxies: 15,
      gliders: 6,
      pulsars: 17,
      random: 1
    };
    this.rowOffsets = {
      galaxies: [
        [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8,
          8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12],
        [1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6,
          6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9,
          9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13],
        [1, 1, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8,
          9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 13, 13],
        [2, 2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 9,
          9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 12, 12],
        [2, 2, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7,
          8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 11, 12, 12],
        [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 8, 8, 8, 9, 9, 10, 10, 10,
          10, 10, 10, 11, 11, 11],
        [3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6, 7, 7, 7, 7, 8, 8, 9, 10, 10,
          10, 10, 10, 10, 11, 11, 11, 11, 11],
        [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6,
          6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11,
          11, 11, 11, 11, 11, 11, 11],
      ],
      gliders: [
        [1, 2, 3, 3, 3],
        [1, 1, 2, 2, 3],
        [1, 2, 2, 3, 3],
        [1, 2, 2, 3, 3]
      ],
      pulsars: [
        [2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7,
          9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 14,
          14, 14, 14, 14, 14],
        [1, 1, 2, 2, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
          7, 7, 7, 7, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11,
          11, 11, 11, 11, 11, 13, 13, 13, 13, 14, 14, 15, 15],
        [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10,
          10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12,
          12, 13, 13, 13, 13, 14, 14, 14, 14]
      ],
      random: [[0]]
    };
    this.colOffsets = {
      galaxies: [
        [7, 8, 9, 10, 3, 4, 6, 11, 2, 6, 11, 2, 7, 8, 2, 5, 10, 11, 2, 5, 9, 12,
          3, 4, 9, 12, 6, 7, 12, 3, 8, 12, 3, 8, 10, 11, 4, 5, 6, 7],
        [8, 9, 7, 8, 9, 10, 3, 5, 6, 8, 9, 11, 2, 5, 6, 1, 2, 3, 6, 7, 10, 11,
          1, 2, 3, 6, 8, 9, 10, 11, 2, 5, 9, 12, 3, 4, 5, 6, 8, 11, 12, 13, 3,
          4, 7, 8, 11, 12, 13, 8, 9, 12, 3, 5, 6, 8, 9, 11, 4, 5, 6, 7, 5, 6],
        [7, 10, 6, 4, 5, 1, 8, 9, 11, 4, 8, 11, 4, 5, 6, 8, 12, 1, 13, 2, 6, 8,
          9, 10, 3, 6, 10, 3, 5, 6, 13, 9, 10, 8, 4, 7],
        [5, 6, 5, 4, 5, 8, 9, 10, 4, 8, 10, 11, 12, 4, 5, 7, 12, 6, 8, 2, 7, 9,
          10, 2, 3, 4, 6, 10, 4, 5, 6, 9, 10, 9, 8, 9],
        [5, 6, 9, 4, 5, 8, 10, 3, 6, 7, 8, 10, 12, 4, 5, 6, 7, 8, 9, 12, 5, 6,
          8, 9, 2, 5, 6, 7, 8, 9, 10, 2, 4, 6, 7, 8, 11, 4, 6, 9, 10, 5, 8, 9],
        [4, 6, 9, 4, 5, 6, 8, 10, 11, 3, 10, 4, 10, 11, 3, 4, 10, 4, 11, 3, 4,
          6, 8, 9, 10, 5, 8, 10],
        [4, 6, 7, 9, 10, 3, 4, 6, 7, 10, 11, 3, 10, 11, 3, 4, 10, 11, 3, 4, 11,
          3, 4, 7, 8, 10, 11, 4, 5, 7, 8, 10],
        [3, 4, 6, 7, 8, 9, 10, 11, 3, 4, 6, 7, 8, 9, 10, 11, 3, 4, 3, 4,
          10, 11, 3, 4, 10, 11, 3, 4, 10, 11, 10, 11, 3, 4, 5, 6, 7, 8, 10, 11,
          3, 4, 5, 6, 7, 8, 10, 11],
      ],
      gliders: [
        [2, 3, 1, 2, 3],
        [1, 3, 2, 3, 2],
        [3, 1, 3, 2, 3],
        [1, 2, 3, 1, 2]
      ],
      pulsars: [
        [4, 5, 6, 10, 11, 12, 2, 7, 9, 14, 2, 7, 9, 14, 2, 7, 9, 14, 4, 5, 6,
          10, 11, 12, 4, 5, 6, 10, 11, 12, 2, 7, 9, 14, 2, 7, 9, 14, 2, 7, 9,
          14, 4, 5, 6, 10, 11, 12],
        [5, 11, 5, 11, 5, 6, 10, 11, 1, 2, 3, 6, 7, 9, 10, 13, 14, 15, 3, 5, 7,
          9, 11, 13, 5, 6, 10, 11, 5, 6, 10, 11, 3, 5, 7, 9, 11, 13, 1, 2, 3, 6,
          7, 9, 10, 13, 14, 15, 5, 6, 10, 11, 5, 11, 5, 11],
        [4, 5, 11, 12, 5, 6, 10, 11, 2, 5, 7, 9, 11, 14, 2, 3, 4, 6, 7, 9, 10,
          12, 13, 14, 3, 5, 7, 9, 11, 13, 4, 5, 6, 10, 11, 12, 4, 5, 6, 10, 11,
          12, 3, 5, 7, 9, 11, 13, 2, 3, 4, 6, 7, 9, 10, 12, 13, 14, 2, 5, 7, 9,
          11, 14, 5, 6, 10, 11, 4, 5, 11, 12]
      ],
      random: [[0]]
    };
  }

  initializePattern(grid, seedPattern) {
    // save the number of rows and columns in the grid
    const numRows = grid.length;
    const numCols = grid[0].length;

    // save the parameters that are specific to this seed pattern
    const occurrenceFrequency = this.occurrenceFrequency[seedPattern];
    const patternPeriod = this.patternPeriod[seedPattern];
    const patternSize = this.patternSize[seedPattern];
    const minBorderSize = this.minBorderSize[seedPattern];
    const rowOffsets = this.rowOffsets[seedPattern];
    const colOffsets = this.colOffsets[seedPattern];

    // calculate min size of rectangle within which pattern is randomly shifted
    const rectMinSize =  patternSize + minBorderSize;
    const numRectsRowDir = Math.floor(numRows / rectMinSize);
    const numRectsColDir = Math.floor(numCols / rectMinSize);

    // initialize variables that are changed inside the nested loops
    let startRow = null;
    let rowsInRect = null;
    let extraRowsInRect = null;
    let startCol = null;
    let colsInRect = null;
    let extraColsInRect = null;
    let canvasEmpty = true;
    let state = null;
    let rowShift = null;
    let colShift = null;
    let rowFinal = null;
    let colFinal = null;

    while (canvasEmpty) {
      for (let rectRow = 0; rectRow < numRectsRowDir; rectRow++) {
        // calculate the row where this rectangle starts
        startRow = Math.floor(rectRow * numRows / numRectsRowDir);

        // calculate the extra rows within this rectangle
        rowsInRect = Math.floor((rectRow+1)*numRows/numRectsRowDir) - startRow;
        extraRowsInRect = rowsInRect - patternSize;

        for (let rectCol = 0; rectCol < numRectsColDir; rectCol++) {
          // calculate the column where this rectangle starts
          startCol = Math.floor(rectCol * numCols / numRectsColDir);

          // calculate the extra columns within this rectangle
          colsInRect = Math.floor((rectCol+1)*numCols/numRectsColDir) - startCol;
          extraColsInRect = colsInRect - patternSize;

          // randomly choose whether or not to place a pattern in this rectangle
          if (Math.random() < occurrenceFrequency) {
            // canvas is no longer empty, so we can stop the outermost loop
            canvasEmpty = false;

            // randomly shift pattern within rectangle
            rowShift = Math.floor(Math.random() * (extraRowsInRect + 1));
            colShift = Math.floor(Math.random() * (extraColsInRect + 1));

            // randomly choose among the different evolutionary states
            state = Math.floor(Math.random() * patternPeriod);

            // set certain cells to alive to initialize pattern
            for (let i = 0; i < rowOffsets[state].length; i++) {
              rowFinal = startRow + rowShift + rowOffsets[state][i];
              colFinal = startCol + colShift + colOffsets[state][i];
              grid[rowFinal][colFinal].isAlive = true;
            }
          }
        }
      }
    }
  }
}

module.exports = SeedUtility;
