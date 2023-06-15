#!/usr/bin/node
// a script that prints My number: <first argument converted in integer> if ... to an int

if (isNaN(process.argv[2])){
  console.log('Not a number');
} 
else {
  console.log('My number:' + parseInt(process.arvg[2]));
}
