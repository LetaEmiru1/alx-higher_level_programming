#!/usr/bin/node

const { argv } = require('node:process');
const argumentNumber = argv.length - 2;
if (argumentNumber === 0) {
  console.log('No argument');
} else if (argumentNumber === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
