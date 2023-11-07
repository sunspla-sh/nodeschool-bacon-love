module.exports = (Bacon, riverQuality, untilSwitchTurnedOff, sampleTime) => {
  return riverQuality.debounceImmediate(sampleTime).takeWhile(untilSwitchTurnedOff);
}