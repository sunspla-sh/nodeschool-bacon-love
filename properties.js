/**
 * My Solution
 */
// module.exports = Bacon => {
//   return Bacon.fromArray([11,12,13]).toProperty(10)
// }

/**
 * Official Solution
 */
module.exports = Bacon => {
  return Bacon.sequentially(10, [11,12,13]).toProperty(10);
}