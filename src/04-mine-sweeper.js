/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mines = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let numOfMines = 0;

      if (matrix[i][j - 1] || matrix[i][j + 1]) {
        numOfMines++;
      }

      if (i > 0) {
        if (matrix[i - 1][j] || matrix[i - 1][j - 1] || matrix[i - 1][j + 1]) {
          numOfMines++;
        }
      }

      if (i < matrix.length - 1) {
        if (matrix[i + 1][j] || matrix[i + 1][j - 1] || matrix[i + 1][j + 1]) {
          numOfMines++;
        }
      }

      if (mines[i]) {
        mines[i].push(numOfMines);
      } else {
        mines[i] = [numOfMines];
      }
    }
  }

  return mines;
}

module.exports = minesweeper;
