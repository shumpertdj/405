//Darnell Shumpert
var http = require('http');

exports.geturl =  function(url, cb){
		var req = http.get(url, function(res) {
			var data = '';
	        console.log("Response status code: " + res.statusCode);
	        res.on('data', function(chunk){
	        	data += chunk;
	        });
	        res.on('end' , function(){
	       	 	cb(null, data);
	    	});
		}); 
		req.on('error', cb);
};




