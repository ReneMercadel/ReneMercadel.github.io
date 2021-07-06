// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
//use if else statement to compare the possible values I want the function to 
//evaluate to
//use Array.isArray() method to test if the parameter 'value' is an array
            if (Array.isArray(value)) return true;
            else {
                return false;
            };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
//use an if statement to return false if 'value' parameter is an array
        if (Array.isArray(value) === true) return false;
//use another if statement strictly comparing value to null and return false if 
//'value' parameter is null
        if (value === null) return false;
//use another if statement to evaluate if the instanceof 'value' is Date and to 
//return false if 'value' parameter is Date;
        if (value instanceof Date) return false;
//use a final if statement to finally evaluate if the 'value' parameter still
//results in 'object' when the typeof operator is applied to it
        if (typeof value === 'object') return true;
//use an else statement to return false in all other cases
        else { return false};
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
//use an if statement to strictly compare the 'value' parameter to null and 
//return false if 'value' parameter is null
        if (value === null) return false;
//use another if statement to evaluste if the 'value' parameter has an instanceof
//Date and return false if it does
        if (value instanceof Date) return false;
//use an if statement to evaluate if the 'value' parameter is either an array OR
//an object
        if (Array.isArray(value) === true) return true;
        if (typeof value === 'object') return true;
// use an else statement to return false in all other cases;
        else { return   false};
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
// use an if statement to print 'string' to the console if the typeof operator
// evaluates the 'value' parameter as a string 
        if (typeof value === 'string') return 'string';
// if statement that compares 'value' to number with typeof operator
        if (typeof value === 'number') return 'number';
// if statement that compares 'value' to boolean
        if (typeof value === 'boolean') return 'boolean';
// if statement that tests if value is defined
        if (typeof value === 'undefined') return 'undefined';
// continue using if statements to compare 'value' to remaining data-types
        if (Array.isArray(value)) return 'array';
        if (value === null) return 'null';
        if (value instanceof Date) return 'date';
        if (typeof value === 'object') return 'object';
        else { return 'function';
        }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
