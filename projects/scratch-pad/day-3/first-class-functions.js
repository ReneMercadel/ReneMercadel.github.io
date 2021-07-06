// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
//return a new function with parameter value 
        return function(value) {
//use an if statement to test if parameters are number data-types                
                if (typeof base ==='number' && typeof value === 'number') {
//return a boolean for the number test
                        return (base < value);
                }
//use another if statement to test if parameters are string datatypes and return
//boolean
                if (typeof base === 'string' && typeof value === 'string') {
                        return (base < value);
                        };
               
                };
    // YOUR CODE ABOVE HERE //
};

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
//return function with parameter value to test against base
        return function(value) {
//use if statement to first test if both parameters are strings
                if (typeof base === 'string' && typeof value === 'string') {
//return the result of a comparison that resolves to a boolean value
                        return (base > value);
                };
//use another if statement to test if bothe parameters are numbers
                if (typeof base === 'number' && typeof value === 'number') {
//return a comparison that will result in a boolean
                        return (base > value);
                }
        }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
// return a new unnamed function with parameter 'string' 
                return function(string) {
//compare the 'startsWith' parameter to the 'string' parameter at index[0] with 
//the .charAt method applied to 'string' parameter combined with if else statements
//apply .toLowerCase to both parameters so that the function will be case 
//insenesitive
                        if (startsWith.toLowerCase() === string.charAt(0).toLowerCase()) {
                                return true;
                        } else {
                        return false;
                        };
                }        
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
//return a function inside createEndsWithFilterFunction with parameter 'string'
                return function(string) {
//isolate the last character of 'string' parameter using .charAt method
//use if else to compare last character of 'string' with 'endsWith' regardless 
//of case
                if (string.charAt(string.length-1).toLowerCase() === endsWith.toLowerCase()) {
                        return true;
                } else {
                        return false;
                }
        }        
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
//create new variable to store the modified array 
                var modStrings = [];
//use for loop to iterate each element of strings through the modify function
                for (var i = 0; i <= strings.length-1; i++) {
//use the push method to add the new, modified, elements into the modStrings array
                        modStrings.push(modify(strings[i])); 
                        } return modStrings;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
//use a for loop to pass all of the string elements through the test function
                for (var i = 0; i < strings.length; i++) {
//use if else statement to test if each string element from the 'strings' array 
//parameter returns a true result when passed through the test function
                        if (test(strings[i]) === false) {
//return true if all string elements pass through test function with 'true' result
                                return false;
//use an if statement to return false if any string elements don't return true
                        } else {}
                } return true;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
