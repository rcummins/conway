const Game = require('./game');
const game = new Game(400, 400);

describe('step', () => {
  // first change all cells isAlive to false to overwrite random assignments
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
