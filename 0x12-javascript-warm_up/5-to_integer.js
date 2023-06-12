#!/usr/bin/node
// a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:
  // If the argument can’t be converted to an integer, print “Not a number”
  //You must use console.log(...) to print all output

if (isNaN(process.argv[2])){
  console.log('Not a Number');
} 
else {
  console.log('My number: ' + parseInt(process.arvg[2]));
}
