//Darnell Shumpert
var assert = require('assert');
var mod3 = require('./mod3');
assert(mod3.x === 3);
mod3.x = 10;
assert(mod3.getX() === 10); // true

console.log("All tests passed.");