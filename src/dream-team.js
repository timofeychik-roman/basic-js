const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  debugger;
  if (members == undefined || members.length == 0)
    return false;
  let names = [];
  for (let i = 0; i < members.length; i++)
    if (typeof(members[i]) == "string") {
      let j = 0;
      while (members[i][j] == " ")
        j++;
      names.push(members[i][j]);
    }
  if (names.length == 0)
    return false;
  for (let i = 0; i < names.length; i++)
    names[i] = names[i].toUpperCase();
  names = names.sort();
  names = names.join("");  
  return names;
};
