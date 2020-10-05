const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++)
      if (Array.isArray(arr[i]))
        return 1 + this.calculateDepth(arr.flat());
    return 1;
  }
};