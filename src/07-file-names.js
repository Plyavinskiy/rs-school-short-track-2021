/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const copyOfArray = names;

  for (let i = 0; i < copyOfArray.length; i++) {
    let dublicateSuffix = 1;
    for (let j = i + 1; j < copyOfArray.length; j++) {
      copyOfArray[j] = (copyOfArray[i] === copyOfArray[j])
        ? `${copyOfArray[j]}(${dublicateSuffix++})`
        : copyOfArray[j];
    }
  }

  return copyOfArray;
}

module.exports = renameFiles;
