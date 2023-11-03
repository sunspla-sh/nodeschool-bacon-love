const Bacon = require('baconjs');

module.exports = (Bacon) => {
  return Bacon.sequentially(1000, [1,2,3])
};