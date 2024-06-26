const toString = Object.prototype.toString

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value: any) {
  if (value === null) {
    return '[object Null]';
  }
  if (value === undefined) {
    return '[object Undefined]';
  }
  return toString.call(value);
}

export default getTag
