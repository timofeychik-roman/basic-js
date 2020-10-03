const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 1;
  while (disksNumber != 1) {
    turns *= 2;
    turns++;
    disksNumber--;
  }
  let seconds = turns * 3600 / turnsSpeed;
  seconds = Math.floor(seconds);
  return {turns, seconds};
};
