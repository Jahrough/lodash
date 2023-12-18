/**
 * A specialized version of `forEach` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array: any[], iteratee: Function) {
  const length = array.length

  for (let index = 0; index < length; index++) {
    if (iteratee(array[index], index, array) === false) {
      break
    }
  }
  return array
}

export default arrayEach
