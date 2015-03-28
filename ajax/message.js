//Darnell Shumpert
var http = require('http');

var body = new Buffer("Hello Ajax", 'utf-8');

exports.handle = function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=UTF-8',
    'Content-length': body.length
  });
  res.end(body);
};