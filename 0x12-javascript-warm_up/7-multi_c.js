#!/usr/bin/node
// a script that prints x times C is fun
	// Where x is the first argument of the script
	// If the first argument cant be converted to an integer, print Missing number of occurrences
	// You must use console.log(...) to print all output

const lang = 'C is fun';

if (isNaN(process.arvg[2])){
	console.log('Missing number of occurrences');
}
else {
	for (let i = 0; i <parseInt(process.arvg[2]); i++) {
		console.log(lang);
	}
}
