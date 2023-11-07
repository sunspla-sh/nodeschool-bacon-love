/**
 * My Solution
 */
// module.exports = (Bacon, riverFlowInCubicFeet, litresInCubicFeet) => {
//   return riverFlowInCubicFeet.flatMap((t) =>
//     Bacon.fromArray(
//       new Array(t[1]).fill(Math.round(t[0] * litresInCubicFeet))
//     ).filter(t[0] * litresInCubicFeet > 200000)
//   );
// };

/**
 * Official Solution
 */
module.exports = (Bacon, riverFlowInCubicFeet, litresInCubicFeet) => {
  return riverFlowInCubicFeet.flatMap(tuple => {
    const cubicFeet = tuple[0];
    const numberOfSamples = tuple[1];
    
    const litres = Math.round(cubicFeet * litresInCubicFeet);

    if(litres > 200000) {
      return Bacon.interval(100, litres).take(numberOfSamples);
    } else {
      return Bacon.never();
    }
  });
};