#!/usr/bin/node

class Square extends Rectangle {
  constructor (size) {
    super(width, height);
    this.size = size;
  }
}

module.exports = Square;
