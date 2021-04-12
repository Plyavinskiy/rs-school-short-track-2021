/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filteredArr = arr.filter((i) => i !== -1);
  const sortedArr = filteredArr.sort((a, b) => a - b);
  let i = 0;

  return arr.reduce((accumulator, current) => {
    if (current !== -1) {
      accumulator.push(sortedArr[i]);
      i++;
    } else {
      accumulator.push(current);
    }

    return accumulator;
  }, []);
}

module.exports = sortByHeight;
