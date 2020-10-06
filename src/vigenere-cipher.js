const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (isdirect) {
    if (isdirect == undefined)
      this.direct = true;
    else this.direct = isdirect;
  }
  encrypt(str1, pass1) {
    let str = str1.toUpperCase();
    let pass = pass1.toUpperCase();
    let isLetter = /^[A-Z]+$/;
    let res = "";
    if (typeof(str) != "string" || typeof(pass) != "string")
      throw new Error("THROWN");
    let countNotLetter = 0;
    for (let j = 0; j < str.length; j++) {
      if (isLetter.test(str[j]))
        res += String.fromCharCode((str.charCodeAt(j) - "A".charCodeAt() + pass.charCodeAt((j - countNotLetter)%pass.length) - "A".charCodeAt()) % 26 + "A".charCodeAt());
      else {
        res += str[j];
        countNotLetter++;
      }
    }
    if (this.direct)
      return res;
    else return res.split("").reverse().join("");
  }    
  decrypt(res, pass1) {
    let pass = pass1.toUpperCase();

    let isLetter = /^[A-Z]+$/;
    let str = "";
    if (typeof(res) != "string" || typeof(pass) != "string")
      throw new Error("THROWN");
    let i = 0;
    let countNotLetter = 0;
    for (let j = 0; j < res.length; j++) {
      if (isLetter.test(res[j]))
        str += String.fromCharCode((res.charCodeAt(j) - "A".charCodeAt() + 26 - pass.charCodeAt((j - countNotLetter)%pass.length) + "A".charCodeAt()) % 26 + "A".charCodeAt());
      else {
        str += res[j];
        countNotLetter++;
      }
    }
    if (this.direct)
      return str;
    else return str.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
