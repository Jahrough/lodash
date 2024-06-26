/**
 * The base implementation of `findIndex` and `findLastIndex`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array: any[], predicate: Function, fromIndex: number, fromRight: boolean) {
  const { length } = array
  const step = fromRight ? 1 : -1

  for (let index = fromIndex + step; fromRight ? index >= 0 : index < length; index += step) {
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex
