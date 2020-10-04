const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let a = arr.slice(0, arr.length);
  for (let i = 0; i < a.length; i++){
    switch(a[i]) {
      case "--discard-next":
        if (i == a.length - 1)
          a.splice(i, 1);
        else {
          a[i + 1] = "*";
          a.splice(i, 1);
        }
        break;
      case "--discard-prev":
        if (i == 0)
          a.splice(i, 1)
        else {
          a[i - 1] = "*";
          a.splice(i, 1)
        }
        break;
      case "--double-next":
        if (i == a.length - 1)
          a.splice(i, 1);
        else if (a[i + 1] == "*")
          a.splice(i, 1);
        else 
          a[i] = a[i + 1];
        break;
      case "--double-prev":
        if (i == 0)
          a.splice(i, 1);
        else if (a[i - 1] == "*")
          a.splice(i, 1);
        else 
          a[i] = a[i - 1];
        break;
    }
  }
  for (let i = 0; i < a.length; i++)
    if (a[i] == "*"){
      a.splice(i, 1);
      i--;
    }
 /* if (a[0] == "*"){
    let b = a.slice(1, a.length);
    return b;
  }*/
  return a;
};
