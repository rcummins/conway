const Game = require('./game');
const GameView = require('./game_view');

document.addEventListener('DOMContentLoaded', () => {
  const canvasElement = document.getElementById('game-canvas');

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  canvasElement.width = windowWidth;
  canvasElement.height = windowHeight;

  const ctx = canvasElement.getContext('2d');
  const game = new Game(windowWidth, windowHeight);
  new GameView(game, ctx).animate();
});
