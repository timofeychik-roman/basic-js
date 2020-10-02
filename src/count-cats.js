const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix.length == 0)
    return 0;
  let cats = 0;
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] == "^^")
        cats++;
  return cats; 
};
