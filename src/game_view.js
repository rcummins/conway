class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    const animateCallback = () => {
      this.game.step();
      this.game.render(this.ctx);
      setTimeout(animateCallback, 300);
    };

    animateCallback();
  }
}

module.exports = GameView;
