//Darnell Shumpert
var assert = require('assert');
var mod1 = require('./mod1');
assert(mod1.x === 3);
assert(mod1.y === undefined);

console.log("All tests passed.");