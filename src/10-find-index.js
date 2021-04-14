/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleIndex;

  while (startIndex <= endIndex) {
    middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (array[middleIndex] === value) {
      return middleIndex;
    }

    if (array[middleIndex] < value) {
      startIndex = middleIndex + 1;
    }

    if (array[middleIndex] > value) {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}

module.exports = findIndex;
