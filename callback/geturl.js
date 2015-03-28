//Darnell Shumpert
var http = require('http');

var req = http.get("http://www.google.com/index.html", function(res) {
        console.log("Response status code: " + res.statusCode);
        res.on('data', function(c){
				console.log("Got a chunk of data of size " + c.length)
		});
        res.on('end' , function(){
        		console.log("Response message received in full.");
        });
});

req.on('error', function(e){
		console.log("Got error: " + e.message);
}
