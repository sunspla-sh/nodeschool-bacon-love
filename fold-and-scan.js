/**
 * My Solution
 */
// module.exports = (Bacon, enteringShips, destroyerPosition) => {
//   const shipTally = enteringShips.scan(0, (acc, cur) => cur.type === 'zrrk' ? acc + 1 : acc);

//   const threat = destroyerPosition.filter(x => x < 1);

//   const threatReport = enteringShips.filter(threat).take(5).fold({}, (acc, cur) => {
//     acc[cur.type] = acc[cur.type] ? acc[cur.type] + 1 : 1;
//     return acc;
//   });

//   return {
//     shipTally,
//     threatReport
//   }
// };

/**
 * Official Solution
 */
module.exports = (Bacon, enteringShips, destroyerPosition) => {
  const shipTally = enteringShips
    .filter((ship) => ship.type === "zrrk")
    .map(1)
    .scan(0, (acc, v) => acc + v);

  const destroyerHasEntered = destroyerPosition.map((distance) => distance < 1);

  const threatReport = enteringShips
    .filter(destroyerHasEntered)
    .take(5)
    .fold({}, (report, ship) => {
      if (!report[ship.type]) {
        report[ship.type] = 0;
      }
      report[ship.type] += 1;
      return report;
    });

  return { shipTally, threatReport };
};
