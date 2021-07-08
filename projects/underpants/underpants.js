// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
                return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
            if (typeof value === 'string') {
                return 'string';
            } else if(typeof value === 'number') {
                return 'number';
            } else if (Array.isArray(value)) {
                return 'array';
            } else if (typeof value === 'boolean') {
                return 'boolean';
            } else if (typeof value === 'undefined') {
                return 'undefined';
            } else if (value === null) {
                return 'null';
            } else if (typeof value === 'function') {
                return 'function';
            } else if (typeof value === 'object') {
                return 'object';
            }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, num) {
              //if statement to test if array is an array
              if (!Array.isArray(array)) {
                  return [];
              //else if statement to test if num exists or isn't a number datatype       
              } else if (!num || typeof num !== 'number') {
                  return array[0];
              //else if statement to test if num  is greater than the array length       
              } else if (num > array.length) {
                  return array;
              //else if statement to test if num is less than the array length
              } else if (num < array.length) {
                  return array.splice(0, num);
              }

};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num) {
            //test if 'array' is an array, if not return []
            if (!Array.isArray(array)) {
                return [];
            //test if 'num' exists, if 'num' is a number datatype    
            } else if (!num || typeof num !== 'number') {
                return array[array.length-1];
            } else if (num > array.length) {
                return array;
            //test edge case senario in which 'num' is negative
            } else if (Math.sign(num) === -1) {
                //return an empty list
                return [];
            //else if statement to test if num is less than array length
            } else if (num < array.length) {
                //if so, return elements of the array starting at num index
                return array.splice(num-1, array.length-1);
            }
};
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
                //use a for loop to access and test each element of 'array'
                for (var i = 0; i < array.length; i++) {
                    //try if statement to test if any 'array' elements equal 'value'
                    if (array[i] === value) {
                        //return the index at that element
                        return i;
                    
                    //test if 'array' includes 'value' element    
                    } 
                }
                if (!array.includes(value)) {
                        //if it doesn't, return -1
                        return -1;
                    }
                
                // //use if statement to find out if 'array' contains an element 'value'
                // if (array.includes('value')) {
                //     //if it does, return the index of that value
                //     return array.indexOf('value');
                // }
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function (array, value) {
                //test if 'array' includes 'value' element with ternary operator
                return (array.includes(value) ? true : false);
               
}
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
            //test if collection is an array
            if (Array.isArray(collection)) {
                //if collection is an array, apply for loop
                for (var i = 0; i < collection.length; i++) {
                    //invoke callback function func on value, index, and collection
                    func(collection[i], i, collection);
                }
              //if collection is an object, apply for in loop    
            } else {
                for (var key in collection) {
                    func(collection[key], key, collection);
                }
            }
         };    

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
              //need to create a container for new, reduced array
              var singlesArray = [];
              //use a for loop to iterate over and access + inspect the array
              for (var i = 0; i < array.length; i++) {
                 //need to compare value at index of 'array' to value at 
                 //'singlesArray.length-1'
                 if (_.indexOf(singlesArray, array[i]) === -1) {
                    //push original element into singlesarray
                    singlesArray.push(array[_.indexOf(array, array[i])]);
                }
            } return singlesArray;   
}


// _.indexOf = function(array, value) {
//                 //use a for loop to access and test each element of 'array'
//                 for (var i = 0; i < array.length; i++) {
//                     //try if statement to test if any 'array' elements equal 'value'
//                     if (array[i] === value) {
//                         //return the index at that element
//                         return i;
                    
//                     //test if 'array' includes 'value' element    
//                     } else if (!array.includes(value)) {
//                         //if it doesn't, return -1
//                         return -1;

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

 _.filter = function(array, funky) {
                //create an empty array variable, 'newArray', to store whatever 
                //values are produced by the function parameter when it's 
                //supplied with the arguments (array[i], i, array)
                var newArray = [];
                //use a for loop to iterate through 'array' parameter
                for (let i = 0; i < array.length; i++) {
                    //use if statement to check if 'funky' parameter evaluates 
                    //to true with arguments based on the 'array' parameter
                    if (funky(array[i], i, array) === true) {
                        //if function evaluates to true, push array[i] into newArray
                        newArray.push(array[i]);
                    }
                }
                return newArray;
            }

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
                var newArray = [];
                //for loop
                for (var i = 0; i < array.length; i++) {
                    if (func(array[i], i, array) === false) {
                        newArray.push(array[i]);
                    }
                }
                return newArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
                  //create an array to store return
                  var trueArr = [];
                  var falseArr = [];
                  //for loop to iterate over 'array'
                  for (var i = 0; i < array.length; i++) {
                      //if statement to apply 'func' to 'array' elements
                      if(func(array[i], i, array)) trueArr.push(array[i]);
                      else falseArr.push(array[i]);
                  } 
                  return [trueArr, falseArr];
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
            //create array variable to contain results
            var result = [];
            //test if collection parameter is an array or an object
            if (Array.isArray(collection)) {
                //need to make for loop to iterate over array parameter supplied
                //to func
                for (var i = 0; i < collection.length; i++) {
                    //need to apply function to array arguments
                    result.push(func(collection[i], i, collection));
            //else if statement to test if 'collection' is object
                } 
            } else if (typeof collection === 'object') {
                //for in loop to iterate over 'collection' object
                for (var key in collection) {
                    //need to apply function to every key in 'collection' object
                    result.push(func(collection[key], key, collection))
                }
            }
            return result;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//I: array, property
//O: array made from the value of property for every (object?) element in 'array'
//   func(collection[key], key, collection)
//C: use _.map(). mar returns an array of 

// _.pluck = function(array, property) {
//              function getPropertyValue(arrayElement) {
//                  return arrayElement[property];
//              }
//              return _.map(array, getPropertyValue);
//             // //need to create a new array variable to contain values from
//             // var resultArr = [];
//             // //need to loop 
//             // result.push(_.map(array, func(array[property], property, array))[property]);
//             // return resultArr;
// }

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//I: collection, a function
//O: returning a boolean
//C:
// _.every = function(collection, func) {
//                 var arrayTest = _.map(collection, func);
//                 //loop through collection to test every element for true/false
//                     for(var i = 0; i < arrayTest.length; i++) {
//                         //test if any values are false with if statement
//                     //     if (
//                     // }
        
    
                
                
                
                
//                 // //try a for loop to iterate over collection
//                 // if (Array.isArray(collection)) {
//                 // //need to make for loop to iterate over array parameter supplied
//                 // //to func
//                 // for (var i = 0; i < collection.length; i++) {
//                 //     //need to test the results of 'func' applied to every element
//                 //     //in collection. Test for false first since that'd make 
//                 //     //continuing search pointless
//                 //     if (func(collection[i], i, collection) === false) {
//                 //         //if even one iteration is false return false
//                 //         return false;
//                 //     } else if (func(collection[i], i, collection) !== true) {
                        
//                 //     }
// }

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
    //does seed have a value. check if seed exists !==undefined
    if (seed !== undefined) {
        //if seed exists we loop through the array to access each value
        for (var i = 0; i < array.length; i++) {
            //make seed the function call of func
            seed = func(seed, array[i], i);
        }
    } else {                                        //_.each(array, function(value, i))
        seed = array[0];
        for(var i = 1; i < array.length; i++) {
            //make see the functino call of func
            seed = func(seed. array[i], i)
        }//return seed
        return seed;
    }
}



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
