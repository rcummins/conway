class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  animate() {
    this.game.render(this.ctx);
  }
}

module.exports = GameView;
