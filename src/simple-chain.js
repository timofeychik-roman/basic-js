const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.s.split("~~").length;
  },
  addLink(value) {
    if (this.s === undefined)
        this.s = `( ${value} )`;
    else this.s += `~~( ${value} )`
    return this;
  },
  removeLink(position) {
    let str = this.s;
    let n = str.length;
    if (typeof(position) != "number" || position > n || position < 1) {
      delete this.s;
      throw new Error("THROWN");
    }
    this.s = this.s.split("~~");
    this.s.splice(position - 1, 1);
    this.s = this.s.join("~~");
    return this;
  },
  reverseChain() {
    if (this.s === undefined)
      return this;
    this.s = this.s.split("~~");
    this.s = this.s.reverse();
    this.s = this.s.join("~~");
    return this;
  },
  finishChain() {
    if (typeof(this.s) == "undefined")
      throw new Error("THROWN");
    let str = this.s;
    delete this.s;
    return str;
  }
};

module.exports = chainMaker;
