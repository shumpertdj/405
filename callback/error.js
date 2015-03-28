//Darnell Shumpert
var assert = require('assert');

function divideby(x, y, cb) {
	//If y is equal to 0 you get an error instance. 
	if (y == 0){
		cb(new Error('Division by zero is undefined.'));
		return;
	}
    cb( null, x / y);
}

divideby(6, 3, function(err, result) {
	assert( err === null);
   	assert( result === 2); 
});

divideby(6, 0, function(err, result) {
	assert(err !== null);
	assert(result === undefined);
	assert(typeof(err.message) === 'string');
	console.log(err.message);
});
