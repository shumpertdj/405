//Darnell Shumpert
var db = require('./db');
var pg = require('pg');
var url = 'postgres://localhost/read' ; 

var error = false;

exports.getString = function(id, cb) {
  pg.connect(url, function(err, client, done) {
    if (err) return cb(err);
    client.query('select value from strings where id = $1', [id], function (err, result) {
      done();
      if (err) return cb(err);
      if (result.rows.length === 0) {
        return cb(null, null);
      }
      cb(null, result.rows[0].value);
    });
  });
};

exports.handle = function(req, res) {
  db.getString('message', function(err, message) {
    if (err) {
      console.log(err.message);
      res.writeHead(500, 'server error');
      res.end();
      return;
    }
    var responseObject = { msg: message };
    var responseString = JSON.stringify(responseObject);
    var responseBody = new Buffer(responseString, 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Content-Length': responseBody.length,
      'Pragma': 'no-cache',
      'Cache-Control': 'no-cache, no-store'
    });
    res.end(responseBody);
  });
};

