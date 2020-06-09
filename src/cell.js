class Cell {
  constructor(row, col, cellSize, isAlive) {
    this.row = row;
    this.col = col;
    this.cellSize = cellSize;
    this.isAlive = isAlive;
  }

  static newRandomCell(row, col, cellSize) {
    const isAlive = Math.random() < 0.2; // on average, 20% of cells will be alive
    return new Cell(row, col, cellSize, isAlive);
  }

  render(ctx, colorAlive, colorDead) {
    if (this.isAlive) {
      ctx.fillStyle = colorAlive;
    } else {
      ctx.fillStyle = colorDead;
    }
    const xPos = this.col * this.cellSize;
    const yPos = this.row * this.cellSize;
    ctx.fillRect(xPos, yPos, this.cellSize, this.cellSize);
  }

  toggleAliveDead() {
    this.isAlive = !this.isAlive;
  }
}

module.exports = Cell;
