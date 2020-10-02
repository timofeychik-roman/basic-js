const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let type = typeof (sampleActivity);
  if (type != String)
    return false;
  let num = Number(sampleActivity);
  if (num == NaN || num > 15 || num <= 0)
    return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / num) / k;
  return Math.ceil(t);
};
