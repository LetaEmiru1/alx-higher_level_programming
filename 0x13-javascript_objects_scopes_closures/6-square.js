#!/usr/bin/node

const Square = require('./5-square');
class Square extends Square {
  constructor(size) {
    super(size, size);
  }

  charPrint(c){
    if (c == undefined){
      c = 'X';
    }
    for (let i = 0; i < size; i++){
      s = '';
      for (let j = 0; j < size; i++){
        s += c;
      }
        console.log(s);
    }
  }
}
