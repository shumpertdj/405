//Darnel Shumpert
var generateETag     = require('./response').generateETag;
var replyNotModified = require('./response').replyNotModified;
var http = require('http');
var body;
var etag;

exports.handle = function(req, res) {
  if (req.headers['if-none-match'] === etag) {
      replyNotModified(res);
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
      'Content-Length': body.length,
      'ETag': etag,
    });
    res.end(body);
  }
};

exports.init = function(cb) {
  require('fs').readFile('app.html', function(err, data) {
    if (err) throw err;
    body = data;
    cb();
  });
}