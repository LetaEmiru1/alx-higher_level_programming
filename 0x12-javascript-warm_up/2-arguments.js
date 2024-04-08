#!/usr/bin/node

const { argv } = require('node:process');
const argumentNumber = argv.length - 2;
if (argumentNumber === 0) {
  console.log('No argument');
} else {
  console.log('Arguments found');
}
