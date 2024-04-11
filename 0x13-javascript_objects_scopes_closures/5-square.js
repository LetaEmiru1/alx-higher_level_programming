#!/usr/bin/node

const Rectangle = require('./Rectangle');
class Square extends Rectangle {
  constructor (size) {
    super(size, size);
    this.size = size;
  }
}

module.exports = Square;
