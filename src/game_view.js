class GameView {
  constructor(game, canvasElement) {
    this.game = game;
    this.canvasElement = canvasElement;
    this.ctx = canvasElement.getContext('2d', { alpha: false });
    this.paused = false;
    this.animationTimeoutID = null;
    this.animationTimeStep = 150;
  }

  animate() {
    if (!this.paused) {
      this.game.step();
      this.game.render(this.ctx);
      this.animationTimeoutID = window.setTimeout(
        this.animate.bind(this),
        this.animationTimeStep
      );
    }
  }

  changeColors(e) {
    e.preventDefault();
    this.game.changeColors();
    this.restartGame();
  }

  changePixelSize(e) {
    e.preventDefault();
    var sliderValue = e.target.valueAsNumber;
    this.game.changePixelSize(sliderValue);
    this.restartGame();
  }

  changeSeedPattern(e) {
    this.game.changeSeedPattern(e.target.value);
    this.restartGame();
  }

  changeSimulationSpeed(e) {
    var sliderValue = e.target.valueAsNumber;
    this.animationTimeStep = Math.floor(290 - 5 * sliderValue);
    this.restartGame();
  }

  restartGame() {
    this.game.restart();
    window.clearTimeout(this.animationTimeoutID);
    this.paused = false;
    this.animate();
  }

  setupCanvasInteractivity() {
    this.canvasElement.addEventListener('click', this.toggleAliveDead.bind(this));
  }

  setupControlPanel() {
    const pixelSizeSlider = document.getElementById('pixel-size');
    const speedSlider = document.getElementById('speed');
    const seedPatternRadio = document.getElementById('seed-pattern');
    const playPauseButton = document.getElementById('play-pause');
    const changeColorsButton = document.getElementById('change-colors');

    pixelSizeSlider.addEventListener('change', this.changePixelSize.bind(this));
    speedSlider.addEventListener('change', this.changeSimulationSpeed.bind(this));
    seedPatternRadio.addEventListener('change', this.changeSeedPattern.bind(this));
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
