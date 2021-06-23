// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
// Use a For loop to evaluate over and print every indexed value in any array
  
        for (var i = 0; i <= array.length-1; i++) {
             console.log(array[i]);
        } return console.log(array[i]);
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //just have to change the start + stop points and direction for the loop to iterate over
  
        for (var i = array.length-1; i >= 0; i--) {
            console.log(array[i]);
        } return console.log(array[i]);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
//create an array variable that will store object's keys
        var objArray = [];
//Use a for-in loop that can access an object's keys and then add them to an array
        for (var key in object) {
            objArray.push(key);
        } return objArray;
  
  // YOUR CODE ABOVE HERE //
};


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //

//Use a for-in loop that can access an object's keys and then print them
        for (var key in object) {
            console.log(key);
        };  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
//Create an array variable (that will ultimately store the object's values)
        var valueArray = [];
//Create a for in loop to access the input object
        for (var key in object) {
//push the values from the loop into the new array             
           valueArray.push(object[key]);
//return the new array           
        } return valueArray;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
    // YOUR CODE BELOW HERE //
  
//create for in loop to loop over input object
        for (var key in object) {
//print the values
        console.log(object[key]);
        };
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
//create a number variable to store the number of key-value pairs in the input object
        var keyValueTotal = 0;
//use a for in loop to access the number of key-value pairs in the input object
        for (var key in object) {
/*
make the value of keyValueTotal increase incrementally by one each time the
loop is able to iterate over the input object (which should correspond to the 
number of key-value pairs in the input object)
*/
            ++ keyValueTotal;
//return the final value of keyValueTotal 
        } return keyValueTotal;
  // YOUR CODE ABOVE HERE //
}




/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //

//create an array variable (to eventually store the input object values)  
        var revArray = [];
//create for in loop to loop over input object
        for (var key in object) {
//push the values into the new array 
        revArray.push(object[key]);
            };
//access the elements in the new array with a for loop in reverse order 
        for (var i = revArray.length-1; i >= 0; i--) {
//print the indexed values from revArray
            console.log(revArray[i]);
//return the printed values outside of the loop
        } return console.log(revArray[i]);
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
