class Cell {
  constructor(row, col, cellSize) {
    this.row = row;
    this.col = col;
    this.cellSize = cellSize;
    this.isAlive = row % 2 == col % 2;
  }

  render(ctx) {
    if (this.isAlive) {
      ctx.fillStyle = 'pink';
    } else {
      ctx.fillStyle = 'white';
    }
    const xPos = this.col * this.cellSize;
    const yPos = this.row * this.cellSize;
    ctx.fillRect(xPos, yPos, this.cellSize, this.cellSize);
  }
}

module.exports = Cell;
