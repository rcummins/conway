class GameView {
  constructor(game, canvasElement) {
    this.game = game;
    this.canvasElement = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.paused = false;
    this.animationTimeoutID = null;
  }

  animate() {
    if (!this.paused) {
      this.game.step();
      this.game.render(this.ctx);
      this.animationTimeoutID = window.setTimeout(this.animate.bind(this), 300);
    }
  }

  changeColors(e) {
    e.preventDefault();
    this.game.changeColors();
    this.restartGame();
  }

  changePixelSize(e) {
    var sliderValue = Number.parseInt(e.target.value, 10);
    this.game.changePixelSize(sliderValue);
    this.restartGame();
  }

  restartGame() {
    this.game.restart();
    window.clearTimeout(this.animationTimeoutID);
    this.animate();
  }

  setupCanvasInteractivity() {
    this.canvasElement.addEventListener('click', this.toggleAliveDead.bind(this));
  }

  setupControlPanel() {
    const pixelSizeSlider = document.getElementById('pixel-size');
    const playPauseButton = document.getElementById('play-pause');
    const changeColorsButton = document.getElementById('change-colors');

    pixelSizeSlider.addEventListener('change', this.changePixelSize.bind(this));
    playPauseButton.addEventListener('click', this.togglePlayPause.bind(this));
    changeColorsButton.addEventListener('click', this.changeColors.bind(this));
  }

  start() {
    this.setupControlPanel();
    this.setupCanvasInteractivity();
    this.animate();
  }

  toggleAliveDead(e) {
    e.preventDefault();

    if (this.paused) {
      this.game.toggleAliveDead(e.clientX, e.clientY);
      this.game.render(this.ctx);
    }
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
