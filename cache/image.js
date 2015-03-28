//Darnell Shumpert
var http = require('http');
var generateETag     = require('./response').generateETag;
var replyNotModified = require('./response').replyNotModified;
var body;
var etag;

exports.handle = function(req, res) {
  if (req.headers['if-none-match'] === etag) {
      replyNotModified(res);
  } else {
    res.writeHead(200, {
    'Content-Type': 'image/png; charset=UTF-8',
    'Content-Length': body.length,
    'ETag': etag,
  });
    res.end(body);
  }
};
exports.init = function(cb) {
  require('fs').readFile('image.png', function(err, data) {
    if (err) throw err;
    body = data;
    etag = generateETag(body);
    cb();
  });
}