/**
 * My Solution
 */
// module.exports = (Bacon, nidelva, leirelva, buttonClicked) => Bacon.combineWith(nidelva, leirelva, (n, l) => n + l).sampledBy(buttonClicked)
/**
 * Official Solution
 */
module.exports = (Bacon, nidelva, leirelva, buttonClicked) =>
  nidelva
    .combine(
      leirelva,
      (leirelvaSample, nidelvaSample) => leirelvaSample + nidelvaSample
    )
    .sampledBy(buttonClicked);
