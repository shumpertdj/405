//Darnell Shumpert
var util = require('./util');

util.geturl('http://a.bad.domainname/index.html', function(err, content) {
        if (err) {
                console.log(err.message);
        } else {
                console.log(content);
        }
});

util.geturl('http://www.google.com/index.html', function(err, content) {
        if (err) {
                console.log(err);
        } else {
                console.log(content);
        }
});

console.log("Main completed.");