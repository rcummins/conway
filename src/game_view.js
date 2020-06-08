class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.paused = false;
  }

  animate() {
    if (!this.paused) {
      this.game.step();
      this.game.render(this.ctx);
      setTimeout(this.animate.bind(this), 300);
    }
  }

  setupControlPanel() {
    const playPauseButton = document.getElementById('play-pause');
    playPauseButton.addEventListener('click', this.togglePlayPause.bind(this));
  }

  start() {
    this.setupControlPanel();
    this.animate();
  }

  togglePlayPause(e) {
    e.preventDefault();

    if (this.paused) {
      this.paused = false;
      this.animate();
    } else {
      this.paused = true;
    }
  }
}

module.exports = GameView;
