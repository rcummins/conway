class Cell {
  constructor(row, col, cellSize) {
    this.row = row;
    this.col = col;
    this.cellSize = cellSize;
  }

  render(ctx) {
    if (this.row % 2 == this.col % 2) {
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
