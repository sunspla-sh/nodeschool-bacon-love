const Bacon = require('baconjs');
Bacon.from
module.exports = (Bacon, promise, eventTarget, callback) => {
  return {
    promise: Bacon.fromPromise(promise),
    eventTarget: Bacon.fromEvent(eventTarget, 'data'),
    callback: Bacon.fromCallback(callback, 'foo', 'bar'),
    array: Bacon.fromArray([1,2,3,4])
  };
};