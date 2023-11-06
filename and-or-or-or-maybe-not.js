/**
 * My Solution
 */
// module.exports = (Bacon, riverFlow, inCriticalMode, isOnBreak, isSingleGate, systemActive, riverFlowLimit) => {
//   return isOnBreak.not().and(inCriticalMode.or(isSingleGate.and(systemActive).and(riverFlow.map(lps => lps > riverFlowLimit))))
// }

/**
 * Official Solution
 */
module.exports = (Bacon, riverFlow, inCriticalMode, isOnBreak, isSingleGate, systemActive, riverFlowLimit) => {

  const isTooMuchWater = riverFlow.map(flow => flow > riverFlowLimit).toProperty();

  const isAllowedToNotify = isOnBreak.not().and(inCriticalMode.or(systemActive.and(isSingleGate)));

  return isTooMuchWater.and(isAllowedToNotify)
}