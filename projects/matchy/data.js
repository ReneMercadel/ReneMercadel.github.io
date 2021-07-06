/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare a variable called animal and assign it to an empty object
    var animal = {};
//add species property to animal object with dot notation
    animal.species = 'string';
    console.log('this is', animal)
//add name property to animal object with bracket notation
    animal['name'] = 'Tony';
//add an empty array called noises to animal object
    animal.noises = [];
    
    console.log(animal);
    
    
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare variable called noises and assign it to an empty array
    var noises = [];
//give noises it's first element with bracket notation. assign element to sound
    noises[0] = "GROWL";
//use .push to add another element to the end of noises array
    noises.push("Meow");
//use .unshift to add another element to the beginning of noises array
    noises.unshift("purrrr");
//use bracket syntax so that the new element will always be added to the end of
//the noise array
    noises[noises.length] = "Roar";
    
    console.log(noises.length-1)
    
    console.log(noises[noises.length-1])

    console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

//assign the noises protperty in my animal object to my noises array variable
    animal.noises = noises;
//add another element to the noises property in my animal object
    animal.noises[noises.length] = "HISSSS";
    

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create an empty array variable calle animals
    var animals = [];
//use the push method to push my animal object into my animals array
    animals.push(animal);
//console.log animals array
    console.log(animals); 
//create a varible called duck and assign it to provided object data
    var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
//push duck object into animals array
    animals.push(duck);
    
    console.log(animals);
//create 2 more animal objects with species, a name, and at least 2 sounds
    var elephant = {
        species: 'Elephant',
        name: 'Tiny',
        noises: ['Trumpet', 'Rumble', 'squeek!']
    };
    
    var whale = {
        species: "Blue Whale",
        name: "Atlas",
        noises: ['Melodic humming', 'GRUNT']
    };
//push two new animal objects into animals array
    animals.push(elephant);
    animals.push(whale);
    
    console.log(animals);
    console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//choosing to represent a list of friends with an array since arrays are
//specialized objects designed to contain lists

    var friends = [];
// Write a function called getRandom that takes our animals array and returns a 
// random index of the input array, using Math.random
// I: array
// O: random index of array
// C
// E
    function getRandom(array) {
        return Math.floor(Math.random()*array.length);
    }//return a random index of the input array

   getRandom(animals);

//Using a random index from this function that you just created, get a random 
//animal and add its name to friends.

    friends.push(animals[getRandom(animals)].name);

    animals[getRandom(animals)]['friends'] = friends;
    
    console.log(friends);
    
//Using bracket notation, add the friends list as a property also named friends 
//on one of the animals in the animals array

    

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}