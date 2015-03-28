//Darnell Shumpert
var x = 1;
var y = 2;

console.log(x === 1);
console.log(y === 2);

function test() {
  x = 10;
  y = 20;
  var y;
}

test();

console.log(x === 10);
console.log(y === 2);