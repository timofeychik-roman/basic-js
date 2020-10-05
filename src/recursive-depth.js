const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let flag = false;
    for (let i = 0; i < arr.length; i++)
      if (Array.isArray(arr[i])) {
        flag = true;
        break;
      }
    if (flag)
      return 1 + this.calculateDepth(arr.flat());
    else return 1;
  }
};