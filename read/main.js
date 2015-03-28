//Darnell Shumpert

var http = require('http');
var domain = require('domain');
var message = require('./message');
var st = require('st');
var db require('/.db');
var mount;


function replyError(res) {
  try {
    res.writeHead(500);
    res.end('Server error.');
  } catch (err) {
    console.error('Error sending response with code 500.');
  }
};

function replyNotFound(res) {
  res.writeHead(404);
  res.end('not found');
}

function handleRequest(req, res) {
  console.log('Handling request for ' + req.url);
  if (req.url === '/message'){
    db.handle(req, res);
  }else if(req.url === '/'){
    redirectIndex(res);
  }else{
    mount(req, res);
  }
}

function redirectIndex(res){
   res.writeHead(302, {
      'Location' : '/index.html'
      });
   res.end();
}

var server = http.createServer();

server.on('request', function(req, res) {
  mount = st({ path: __dirname + '/static', url: '/', index: 'index.html' });
  var d = domain.create();
  d.on('error', function(err) {
    console.error(req.url, err.message);
    replyError(res);
  });
  d.run(function() { handleRequest(req, res); });
});

server.listen(5000);
