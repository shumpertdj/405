// This program prints the first 100 priime numbers.

// Return true if n is prime.
function isPrime(n) {
   for (var i = 2; i < n; ++i) {
      if (n % i == 0){ 
         return false;
      }
   }
   console.log(n);
   return true;
}

var numberOfPrimes = 0;
var candidatePrime = 2;

while (numberOfPrimes < 100) {
   if (isPrime(candidatePrime)) {
      ++numberOfPrimes;
   }
   ++candidatePrime;
}