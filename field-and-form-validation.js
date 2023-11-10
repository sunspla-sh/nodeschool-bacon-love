/**
 * My Solution
 */
// module.exports = (Bacon, fieldA, validationA, fieldB, validationB, fieldC, validationC) => {

//   const fieldAValid = fieldA.map(validationA).toProperty(false);
//   const fieldCValid = fieldC.map(validationC).toProperty(false);
//   const fieldBValid = fieldB.map(v => {
//     if(!v) return true;
//     return validationB(v);
//   }).toProperty(true)

//   return {
//     fieldAValid,
//     fieldBValid,
//     fieldCValid,
//     formValid: fieldAValid.and(fieldBValid).and(fieldCValid)
//   }
// }

/**
 * Official Solution
 */

module.exports = (Bacon, fieldA, validationA, fieldB, validationB, fieldC, validationC) => {
  const a = fieldA.map(validationA).toProperty(false);
  const b = fieldB.map(v => v ? validationB(v) : true).toProperty(true);
  const c = fieldC.map(validationC).toProperty(false);

  const formValid = a.and(b).and(c);

  return {
    fieldAValid: a,
    fieldBValid: b,
    fieldCValid: c,
    formValid
  }
};