#!/usr/bin/node

exports.esrever = function (list) {
  const temp = [];
  for (let i = (list.length - 1); i > -1; i--) {
    temp.push(list[i]);
  }
  return (temp);
};
