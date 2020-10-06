const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  debugger;
  str = String(str);
  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;
  let res = "";
  if (options.repeatTimes == undefined)
    repeatTimes = 1;
  else repeatTimes = options.repeatTimes;
  
  if (options.separator == undefined)
    separator = "+";
  else separator = options.separator;

  if (options.addition === undefined)
    addition = "";
  else addition = String(options.addition);

  if (options.additionRepeatTimes == undefined)
    additionRepeatTimes = 1;
  else additionRepeatTimes = options.additionRepeatTimes;

  if (options.additionSeparator == undefined)
    additionSeparator = "|";
  else additionSeparator = options.additionSeparator;

  for (let i = 0; i < repeatTimes; i++) {
    res += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      res += addition;
      if (j != additionRepeatTimes - 1)
        res += additionSeparator;
    }
    if (i != repeatTimes - 1)
      res += separator;
  }
  return res;
};
  