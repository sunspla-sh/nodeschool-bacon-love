/**
 * My Solution
 */
// module.exports = (Bacon, enteringShips, destroyerPosition) => {

//   const ships = enteringShips.map((e) => (e.type === "zrrk" ? 1 : 0));
//   const threat = destroyerPosition.map((x) => {
//     if (x > 5) return "low";
//     if (x > 2) return "medium";
//     if (x > 1) return "high";
//     return "extreme";
//   });

//   const extremeThreat = threat.filter(t => t === 'extreme');

//   const postArrivalShips = ships.filter(extremeThreat);

//   return {
//     ships,
//     threat,
//     postArrivalShips
//   };
// };

/**
 * Official Solution
 */

module.exports = (Bacon, enteringShips, destroyerPosition) => {
  const ships = enteringShips.map(ship => ship.type === 'zrrk' ? 1 : 0);
  const threat = destroyerPosition.map(distance => {
    if(distance > 5) {
      return 'low'
    } else if (distance > 2) {
      return 'medium'
    } else if (distance > 1) {
      return 'high'
    } else {
      return 'extreme';
    }
  })

  const extremeThreat = threat.filter(threat => threat === 'extreme');
  const postArrivalShips = ships.filter(extremeThreat);

  return {
    ships,
    threat,
    postArrivalShips
  }
}