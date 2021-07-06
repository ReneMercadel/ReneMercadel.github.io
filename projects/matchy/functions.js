/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    function search(array, string) {
//declare variable that is assigned to null by default but gets reassigned if
//an object with a matching name property is found
        var animalObject = null;
//for loop to iterate over animal array, searching for (animal) object with
//matching name parameter

            for (var i = 0; i < array.length; i++) {
//use if statement to compare string to object property "name"
            
            if (array[i].name === string) {
                animalObject = array[i];
            }
        } return animalObject;
    }

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    function replace(animals, name, replacement) {
//use for loop to iterate over animal array and search it for an object with 
//a matching name property
            for (var i = 0; i < animals.length; i++) {
//use if statement to compare object.name to name string.                
                if (animals[i].name === name) {
//if there's a match, use splice method to replace that object (element in array)                    
                    animals.splice(i, 1, replacement);
                }
            }
    }
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    function remove(animals, name) {
//use for loop to iterate over animal array and search it for an object with 
//a matching name property
        
        for (var i = 0; i < animals.length; i++) {
//use if statement to compare object.name property to name string
            if (animals[i].name === name) {
//use .slice or .splice method to remove the element from the array
                animals.splice(i, 1);
            }
        }
    }


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


    function add(animals, animal) {
        //check if animalobject name length is greater than 0 and species length is greater than zero
        //Since the animalsArray has nothing to do with these tests I can make 
        //my name and length comparison WITHOUT having to use a loop to access
        //animalsArray
        if (animal.name.length > 0 && animal.species.length > 0) {
        //use a for loop to access each animal in the animal in the array
            for (var i = 0; i < animals.length; i++) {
            //check if animal's name is the same as the animal in the array in the array
                //stop loop if true using return
                if (animals[i].name === animal.name) {
                    return;
                }
            }
            //push animal object into animals array
            animals.push(animal);
            
        }
        
    }    
        
     
        
// //use a for loop to allow for comparison between animal.name property and all the
// //other name properties from all the objects in the animals array
// //use if statement to check if the animal object.name property has a length > 0 
// //I:animals array; animal object
//                 for (var i = 0; i < animals.length; i++) {//to access each animal in animals array
//                     if (animal.name === animals[i].name && animal.name.length > 0 && animal.species.length > 0)
//             }
//         }
//     }

// /**    
//  * You did it! You're all done with Matchy!
//  */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
