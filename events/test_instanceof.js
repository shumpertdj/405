//Darnell Shumpert
var assert = require('assert');
var http = require('http');
var EventEmitter = require('events').EventEmitter;
var server = http.createServer();

assert(server instanceof EventEmitter === true);
assert(server instanceof createServer === true);
console.log("All tests passed.");