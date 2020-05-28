const Game = require('./game');
const game = new Game(100, 100);

describe('cellAliveNextStep', () => {
  const deadCell = { isAlive: false };
  const liveCell = { isAlive: true };
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
