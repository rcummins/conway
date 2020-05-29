const Game = require('./game');
const game = new Game(1000, 1000);

// initialize placeholder objects for dead and alive cells
const deadCell = { isAlive: false };
const liveCell = { isAlive: true };

describe('cellAliveNextStep', () => {
  const row0Alive = [deadCell, deadCell, deadCell];
  const row1Alive = [liveCell, deadCell, deadCell];
  const row2Alive = [deadCell, liveCell, liveCell];
  const row3Alive = [liveCell, liveCell, liveCell];

  test('returns false if total live cells in neighborhood is < 3', () => {
    expect(game.cellAliveNextStep(row1Alive, row0Alive, row0Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row0Alive, row2Alive, row0Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row0Alive, row0Alive, row0Alive, 0, 1, 2)).toBe(false);
  });

  test('returns true if total live cells in neighborhood is 3', () => {
    expect(game.cellAliveNextStep(row3Alive, row0Alive, row0Alive, 0, 1, 2)).toBe(true);
    expect(game.cellAliveNextStep(row0Alive, row3Alive, row0Alive, 0, 1, 2)).toBe(true);
    expect(game.cellAliveNextStep(row0Alive, row0Alive, row3Alive, 0, 1, 2)).toBe(true);
    expect(game.cellAliveNextStep(row1Alive, row0Alive, row2Alive, 0, 1, 2)).toBe(true);
    expect(game.cellAliveNextStep(row1Alive, row1Alive, row1Alive, 0, 1, 2)).toBe(true);
  });

  test('keeps previous state if total live cells in neighborhood is 4', () => {
    expect(game.cellAliveNextStep(row3Alive, row0Alive, row1Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row0Alive, row3Alive, row1Alive, 0, 1, 2)).toBe(true);
    expect(game.cellAliveNextStep(row2Alive, row0Alive, row2Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row2Alive, row2Alive, row0Alive, 0, 1, 2)).toBe(true);
    expect(game.cellAliveNextStep(row1Alive, row1Alive, row2Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row1Alive, row2Alive, row1Alive, 0, 1, 2)).toBe(true);
  });

  test('returns false if total live cells in neighborhood is > 4', () => {
    expect(game.cellAliveNextStep(row3Alive, row2Alive, row0Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row0Alive, row3Alive, row2Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row2Alive, row1Alive, row2Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row2Alive, row1Alive, row3Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row2Alive, row3Alive, row2Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row3Alive, row2Alive, row3Alive, 0, 1, 2)).toBe(false);
    expect(game.cellAliveNextStep(row3Alive, row3Alive, row3Alive, 0, 1, 2)).toBe(false);
  });
});

describe('rowAliveNextStep', () => {
  const row00000 = [deadCell, deadCell, deadCell, deadCell, deadCell];
  const row00100 = [deadCell, deadCell, liveCell, deadCell, deadCell];
  const row01110 = [deadCell, liveCell, liveCell, liveCell, deadCell];
  const row11001 = [liveCell, liveCell, deadCell, deadCell, liveCell];
  const row10000 = [liveCell, deadCell, deadCell, deadCell, deadCell];
  const row00001 = [deadCell, deadCell, deadCell, deadCell, liveCell];
  const row10010 = [liveCell, deadCell, deadCell, liveCell, deadCell];

  test('returns correct result if left and right edge cells are dead', () => {
    const result1 = game.rowAliveNextStep(row00000, row01110, row00000);
    expect(result1[0]).toBe(false);
    expect(result1[1]).toBe(false);
    expect(result1[2]).toBe(true);
    expect(result1[3]).toBe(false);
    expect(result1[4]).toBe(false);

    const result2 = game.rowAliveNextStep(row00100, row00100, row00100);
    expect(result2[0]).toBe(false);
    expect(result2[1]).toBe(true);
    expect(result2[2]).toBe(true);
    expect(result2[3]).toBe(true);
    expect(result2[4]).toBe(false);
  });

  test('returns correct result if left and right edge cells are alive', () => {
    const result1 = game.rowAliveNextStep(row00000, row11001, row00000);
    expect(result1[0]).toBe(true);
    expect(result1[1]).toBe(false);
    expect(result1[2]).toBe(false);
    expect(result1[3]).toBe(false);
    expect(result1[4]).toBe(false);

    const result2 = game.rowAliveNextStep(row10000, row10000, row10000);
    expect(result2[0]).toBe(true);
    expect(result2[1]).toBe(true);
    expect(result2[2]).toBe(false);
    expect(result2[3]).toBe(false);
    expect(result2[4]).toBe(true);

    const result3 = game.rowAliveNextStep(row00001, row10010, row00001);
    expect(result3[0]).toBe(true);
    expect(result3[1]).toBe(false);
    expect(result3[2]).toBe(false);
    expect(result3[3]).toBe(true);
    expect(result3[4]).toBe(false);
  });
});

describe('step', () => {
  // first change all cells isAlive to false to overwrite random assignments
  // const numRows = game.grid.length;
  // const numCols = game.grid[0].length;
  for (let row = 0; row < game.numRows; row++) {
    for (let col = 0; col < game.numCols; col++) {
      game.grid[row][col].isAlive = false;
    }
  }

  // set up blinker in the middle of the grid
  game.grid[25][24].isAlive = true;
  game.grid[25][25].isAlive = true;
  game.grid[25][26].isAlive = true;

  // set up blinker at the top of the grid (wrapping to the bottom)
  game.grid[0][14].isAlive = true;
  game.grid[0][15].isAlive = true;
  game.grid[0][16].isAlive = true;

  // set up blinker in the corner of the grid (wrapping to all other corners)
  game.grid[0][49].isAlive = true;
  game.grid[0][0].isAlive = true;
  game.grid[0][1].isAlive = true;

  // advance the game one step
  game.step();

  test('isAlive correct after 1 step for non-edge cells', () => {
    expect(game.numRows).toBe(50);
    expect(game.numCols).toBe(50);
    expect(game.grid[24][24].isAlive).toBe(false);
    expect(game.grid[24][25].isAlive).toBe(true);
    expect(game.grid[24][26].isAlive).toBe(false);
    expect(game.grid[25][24].isAlive).toBe(false);
    expect(game.grid[25][25].isAlive).toBe(true);
    expect(game.grid[25][26].isAlive).toBe(false);
    expect(game.grid[26][24].isAlive).toBe(false);
    expect(game.grid[26][25].isAlive).toBe(true);
    expect(game.grid[26][26].isAlive).toBe(false);
  });

  test('isAlive correct after 1 step for top and bottom edge cells', () => {
    expect(game.numRows).toBe(50);
    expect(game.numCols).toBe(50);
    expect(game.grid[49][14].isAlive).toBe(false);
    expect(game.grid[49][15].isAlive).toBe(true);
    expect(game.grid[49][16].isAlive).toBe(false);
    expect(game.grid[0][14].isAlive).toBe(false);
    expect(game.grid[0][15].isAlive).toBe(true);
    expect(game.grid[0][16].isAlive).toBe(false);
    expect(game.grid[1][14].isAlive).toBe(false);
    expect(game.grid[1][15].isAlive).toBe(true);
    expect(game.grid[1][16].isAlive).toBe(false);
  });

  test('isAlive correct after 1 step for corner cells', () => {
    expect(game.numRows).toBe(50);
    expect(game.numCols).toBe(50);
    expect(game.grid[49][49].isAlive).toBe(false);
    expect(game.grid[49][0].isAlive).toBe(true);
    expect(game.grid[49][1].isAlive).toBe(false);
    expect(game.grid[0][49].isAlive).toBe(false);
    expect(game.grid[0][0].isAlive).toBe(true);
    expect(game.grid[0][1].isAlive).toBe(false);
    expect(game.grid[1][49].isAlive).toBe(false);
    expect(game.grid[1][0].isAlive).toBe(true);
    expect(game.grid[1][1].isAlive).toBe(false);
  });
});
