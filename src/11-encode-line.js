/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      count++;
    }

    if (str[i + 1] !== str[i]) {
      if (count > 1) {
        encodedStr += `${count + str[i]}`;
        count = 1;
      } else {
        encodedStr += str[i];
      }
    }
  }

  return encodedStr;
}

module.exports = encodeLine;
