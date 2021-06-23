// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
// use a for loop to count from 1 to 100
             for (var i = 1; i <= 100; i++) {
// use an if statement to specify which numbers to substitute with "Fizz"
                if (i % 3 === 0 && i % 5 !== 0) {
                    console.log("Fizz");
// use an else if statement to specify which numbers to substitute with "Buzz"                    
                } else if (i % 5 === 0 && i % 3 !== 0) {
                    console.log("Buzz");
// use an else if statement to specify which numbers to substitute with "FizzBuzz"
                } else if (i % 5 === 0 && i % 3 === 0) {
                    console.log("FizzBuzz");
// use an else statement to print all other numbers the loop iterates through
                } else {
                    console.log(i);
                };
            };
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}