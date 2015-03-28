//Darnell Shumpert
//Assert program to see if Y is 0 and to test throws and ok.
var assert = require('assert')

function imbad() {
  	throw new Error('I\'m bad.');
}

function divide(x, y){
	if(y == 0){
		throw new Error('Y is equal to 0! ERROR!');
	}
	else
		assert.ok(y != 0, 'Y is not equal to 0! YES!'); 
	return (x / y);
}

divide(2,4);
assert.throws(imbad);

console.log("All tests passed.");