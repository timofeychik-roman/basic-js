const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date) != "object")
    return "Unable to determine the time of year!";
  if ( Object.prototype.toString.call(date) != '[object Date]') 
    throw new Error('THROWN');
  let months = date.getMonth();
  if (months < 2 || months == 11)
    return "winter";
  else if (months >= 2 && months < 5)
    return "spring";
  else if (months >= 5 && months < 8)
    return "summer";
  else return "autumn";
};
