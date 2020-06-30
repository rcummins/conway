class Cell {
  constructor(row, col, cellSize, isAlive) {
    this.row = row;
    this.col = col;
    this.cellSize = cellSize;
    this.isAlive = isAlive;
  }

  render(ctx, colorAlive) {
    if (this.isAlive) {
      ctx.fillStyle = colorAlive;
      const xPos = this.col * this.cellSize;
      const yPos = this.row * this.cellSize;
      ctx.fillRect(xPos, yPos, this.cellSize, this.cellSize);
    }
  }

  toggleAliveDead() {
    this.isAlive = !this.isAlive;
  }
}

module.exports = Cell;
