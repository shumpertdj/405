//Darnell Shumpert
var assert = require('assert');
var mod2 = require('./mod2');
assert(mod2.x === 3);
mod2.x = 10;
assert(mod2.getX() === 3); // true

console.log("All tests passed.");