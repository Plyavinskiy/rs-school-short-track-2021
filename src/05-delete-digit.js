/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const minItem = Math.min(...arr);
  const minItemIndex = arr.indexOf(`${minItem}`);

  arr.splice(minItemIndex, 1);

  return +arr.join('');
}

module.exports = deleteDigit;
