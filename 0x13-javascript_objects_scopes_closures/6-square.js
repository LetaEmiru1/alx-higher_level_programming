#!/usr/bin/node
const Square5 = require('./5-square');

class Square extends Square5 {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++){
      s = '';
      for (let j = 0; j < this.width; i++){
        s += c;
      }
        console.log(s);
    }
  }
}

module.exports = Square;
