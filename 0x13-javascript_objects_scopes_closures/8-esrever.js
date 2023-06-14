#!/usr/bin/node
// a function that returns the reversed version of a list:

exports.esrever = function (list) {
  let newList = [];
  for (let index = list.length - 1; index >= 0; index--) {
    newList.push(list[index]);
  }
  return newList;
};
