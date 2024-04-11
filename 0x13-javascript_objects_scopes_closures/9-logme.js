#!/usr/bin/node
let count = 0;
exports.logMe = function (item) {
  console.log(`${count}:` + ` ${item}`);
  count++;
};
logMe('Hello');
logMe('Best');
logMe('School');

