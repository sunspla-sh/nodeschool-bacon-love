/**
 * My Solution
 */
// module.exports = (Bacon, stream, action, actionOnValue) => {
//   const originalStream = stream;
//   originalStream.doAction(action).log('Value:').onValue(actionOnValue)
//   return originalStream;
// };

/**
 * Official Solution
 */
module.exports = (Bacon, stream, action, actionOnValue) => {
  stream.doAction(action).log('Value:').onValue(actionOnValue);
  return stream;
};