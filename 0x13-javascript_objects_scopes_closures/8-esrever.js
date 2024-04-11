#!/usr/bin/node

exports.esrever = function (list){
  let temp = list;
  for (let i = (temp.length-1); i > -1; i--){
    temp[i] = list[i];
  }
  return (temp);
}
