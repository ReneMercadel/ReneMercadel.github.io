//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//declare array variable to store object key values
        var objArray = [];
//for in loop to loop over an object's key values.
        for (var key in object) {
            objArray.push(object[key]);
        } return objArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//declare string variable to store object keys
        var objArray = [];
//for in loop to loop over an object's key values.
        for (var key in object) {
            //access obj keys with key variable by itself
            objArray.push(key);
        } return objArray.join(' ');
} 

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//create variable to store object     
        var objArrToStr = [];
//use a for in loop to access object keys
        for (var key in object) {
            //if statement to test if object keys are strings
            if (typeof(object[key]) === 'string') {
                objArrToStr.push(object[key]); 
            }
        } return objArrToStr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
//if statement to test if collection is a primitive datatype
            if(typeof collection === 'number') {
                return 'number';
            } else if (Array.isArray(collection)) {
                return 'array';
            } else if (collection === null) {
                return 'null';
            } else if (collection instanceof Date) {
                return 'Date';
            } else if (typeof collection === 'object') {
                return 'object';
            }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
//just need to return the first letter capped and added to the rest of the 
//string word with the first index removed
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
//create new array variable to store the string after it gets split
            var tempArray = string.split(' ');
//use for loop to access each word in the array
            for (var i = 0; i < tempArray.length; i++) {
//assign tempArray elements to the new versions that have been capped and sliced
                tempArray[i] = tempArray[i][0].toUpperCase() + tempArray[i].slice(1);
//return joined tempArray
            } return tempArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//just need to return welcome along with the object.name property value with
//the capitalizeWord function applied to it
return `Welcome ${capitalizeWord(object.name)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//need to return object's name and species concat with "is a " between them.
//should be able to apply previous method with two values in this case instead
//of one
        return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//use if statement to test if object parameter has noises array
            if (object.noises === undefined) {
                
                return "there are no noises";
            } else if (object.noises.length === 0) {
                return "there are no noises";
                //if object.noise array has a length greater than 0 return the 
                //array values in a string with the previous function 
                //valuesToString
            } else if (object.noises.length > 0) {
                return valuesToString(object.noises);
            }
}    

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//I: string, made up of word(s), and a single word string
//split string into array
//use loop to access each element of the array and compare each element to word
//parameter
        //assign new string array to binder
        var strArray = string.split(' ');
        //use for loop on strArray
        for (var i = 0; i < strArray.length; i++) {
            //use if statement to compare every element in strArray to word
            //parameter
            if (strArray[i] === word) {
                return true;
            //if the loop makes it through every iteration without tripping
            //need to explicitly compare in the situation of the last element
            //not being equal to force return false
            } else if (i === strArray.length-1 && strArray[i] !== word)
                return false;
            }
        }


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//I: name string, object with friend key that has an array datatype
//O: new object with name parameter added to object parameter
//access friends array with dot notation
            object.friends.push(name);
            return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//I: name, object. searching object friend array for name parameter
//O: a boolean value based on testing results
//C: must return boolean
//E: if undefined return false
//search object.friend property (array) value for a match to name parameter
//can i use previous function? some of it
        if (object.friends === undefined) {
            return false;     
        } else {    
            for (var i = 0; i <= object.friends.length-1; i++) {
            //use if statement to compare every element in object.friends array
            //to name parameter
                 if (object.friends[i] === name) {
                    return true;
                } else if (i === object.friends.length-1) {
                    return false;
                }
            }
        }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
   //declare variable to store new array of names that parameter name isn't
   //friends with
   var notFriends = [];
   //use for loop to get access to array elements
   for (var i = 0; i < array.length; i++) {
       //take name parameter value and compare it to the name property value
       //in each element us. If ther
       //need to push in name value if NOT a match to name keyvalue
       if (array[i].name !== name && !array[i].friends.includes(name)) {
           notFriends.push(array[i].name);
       }
   } return notFriends;
}
   
   
   
   
    
//     //declare notFriends set to an array
//     var notFriends = [];
//     //use for loop to get access to each person in array
//     for (var i = 0; i < array.length; i++) {
//         //check if ther person doesn't have the name in their friends array
//         if (array[i].name !== name && !array[i].friends.includes(name)) {//if (array[i].name !== name && array[i].friends.indexOf(name) === -1)if -1 means element isn't inside of array    
//                 //push that person into notFriends array
//                 notFriends.push(array[i].name);
//         }        
//     }
//     //return not friends
// return notFriends;
// }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //DON'T need to check object for key with if statement
    //if key doesn't exist the below assignment will create it AND if the value
    //doesn't yet exist in the object[key] this assignment will then apply
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//I: object, array of strings
//O: object with any properties matching string elements in array parameter
//   deleted
//C:
    //use a for loop to access array lements
    for (var i = 0; i < array.length; i++) {    
        //use a for in loop to access object keys
        for (var key in object) {
            //need to compare object keys to array elements with if statements
            if (key === array[i]) {
                delete object[key];
            }
        }
    }
}    
    
    
    
    
    
    
//     //use a for in loop to access object keys
//     for (var key in object) {
//         //need to compare object keys to array elements with if statements
//     }
// }

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //create array variable to hold new array with fuplicate elements removed
    var reducedArray = [];
    //use a for loop to check each element in array parameter
    for (var i = 0; i < array.length; i++) {        
        //check if result array DOES NOT have the values (can use includes method)
        //if true push value into result
        if(!reducedArray.includes(array[i])) {
            reducedArray.push(array[i]);
        }
    }
    return reducedArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}