class SizeUtility {
  constructor(windowWidth, windowHeight) {
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;

    // Minimum and maximum values of the range input element for cell size
    this.sliderMinValue = 0;
    this.sliderMaxValue = 50;
    this.sliderHalfwayValue = (this.sliderMaxValue - this.sliderMinValue) / 2;

    // There must never be fewer than 30 rows or 30 columns in the grid,
    // otherwise the largest pattern will not fit in the grid
    this.minNumCellsShortestDim = 30;

    // Ideally, cells will never be smaller than 5 pixels by 5 pixels, but
    // if the window is small enough, this requirement is relaxed so that
    // there will never be fewer than 30 rows or 30 columns in the grid
    this.minCellSize = 5;

    // The length of the shortest window dimension
    this.shortestDimLength = this.findShortestWindowDimensionLength();

    // The maximum number of cells along the shortest dimension of the window
    this.maxNumCellsShortestDim = this.shortestDimLength / this.minCellSize;

    // The slope of calibration line relating slider value to number of cells
    this.slope = this.calculateSlope();
  }

  calculateCellSize(sliderValue) {
    // Calculate the number of rows or columns along the shortest window
    // dimension, and make sure that it is not less than 30
    var numCellsPrelim = sliderValue * this.slope + this.maxNumCellsShortestDim;
    var numCellsShortestDimFinal = Math.max(
      this.minNumCellsShortestDim,
      numCellsPrelim
    );

    // Calculate the cell size based on the length of the shortest window
    // dimension and the number of cells along that dimension, and round down
    // to the next smaller integer.
    // We want to round the cell size to an integer value because rendering
    // canvas objects with fractional pixel coordinates slows down the browser.
    // We want to round the cell size down (not up) so that there are never
    // fewer than 30 rows or columns along the shortest window dimension.
    return Math.floor(this.shortestDimLength / numCellsShortestDimFinal);
  }

  calculateSlope() {
    // Calculate the slope of the calibration line, where:
    // X represents the value of the range input element (slider value) and
    // Y represents the number of cells along the shortest dimension of window
    var slopeDiffX = this.sliderMinValue - this.sliderMaxValue;
    var slopeDiffY = this.maxNumCellsShortestDim -this.minNumCellsShortestDim;
    return slopeDiffY / slopeDiffX;
  }

  findShortestWindowDimensionLength() {
    if (this.windowWidth < this.windowHeight) {
      return this.windowWidth;
    } else {
      return this.windowHeight;
    }
  }
}

module.exports = SizeUtility;
