// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning beco=
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

function greeter(hour) {
    // YOUR CODE BELOW HERE //
    
    /*
    use an if else statement to check if it's morning (between midnight (inclusive) 
    and noon (exclusive) based on the varying 
    time of day and then return the string phrase 'Good Morning!'
    
    I: inputs for morning are 0 (inclusive) and 12 (exclusive)
    O: The string 'Good Morning!'
    C:
    E:

    */
    
    if (hour >= 0 && hour <= 11) {
        return console.log('Good Morning!');
        
    /* 
    
    I: 12, 16
    O: 'Good Afternoon'
    C:
    E:
    
    */
    
    } else if (hour >= 12 && hour <= 16) {
        return console.log('Good Afternoon!');
      
// I: >17, <21     O: 'Good Evening'
        
    } else if (hour >= 17 && hour <= 21) {
        return console.log('Good Evening!');

// I: >= 22, <23    O: 'Good Night!'
        
    } else if (hour >= 22 && hour <= 23) {
        return console.log('Good Night!');
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}