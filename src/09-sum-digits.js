/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const digits = n.toString().split('');
  const sumOfDigits = digits.reduce((a, b) => (a + +b), 0);

  return sumOfDigits < 10 ? sumOfDigits : getSumOfDigits(sumOfDigits);
}

module.exports = getSumOfDigits;
