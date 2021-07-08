/**
 *                                  LOOPS
 * 
 * One of most powerful qualities of computers and their programs is the ability
 * to do something repeatedly. One of the features in Javascript that allows us 
 * to tell the computer to execute an action some number of times is the Loop.
 * Three of the more common loops in Javascript include the 'for loop' for looping
 * over arrays, the 'for in loop' for looping over objects, and the 'while loop'
 * for looping through a block of code while a specific condition is true.
 * 
 * 
 * FOR LOOP:
 * The 'for' loop is called by using the 'for' keyword. It is then followed by
 * 3 statements that dictate where the loop starts, where it ends, and how it
 * increments after each successful pass all wrapped in parenthesis. The first 
 * statement is a variable declaration that we initialize to the starting point 
 * of the loop (often the 0 index in an array for example). The second defines
 * a condition where loop should stop repeating. The third statement dictates how
 * the loop should be incremented and is executed ever time the code block runs.
 * Below we have the syntax used to execute a 'for' loop.
 */
 //This for loop will print 'Hello!' five times

 for(var i = 0; i < 5; i++) {
   console.log("Hello!");
} 
 //We can also loop in reverse. All we have to do is swap the values in the
 //initization and conditional statements and adjust the positive increment to 
 //negative.
 
 for(var i = 5; i >= 0; i--) {  //This loop will print 5, 4, 3, 2, 1, 0
   console.log(i);              
}

 //One of the primary uses for a 'for' loop is looping over an array to access
 //it's elements
 //Here we initialize an array variable called 'colors' 

var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
 //We now use a for loop to access the array elements by making the index the 
 //value that we increment with each loop until the ending condition is met

for(var i = 0; i <= colors.length - 1; i++) { //Prints
  console.log(colors[i]);                       
}


 //Like before, we can also loop backwards over an array by switching the loops
 //start position and end condition

 var months = ["January", "Febuary", "March", "April", "May", "June", "July", 
               "August", "September", "October", "November", "December"];

// Start: months.length - 1
// End (Include): 0 

for(var i = months.length - 1; i >= 0; i--) {
  // console.log(months[i]);
}


/** 
 * FOR IN LOOP:
 * The 'for in' loop is also called by using the 'for' keyword, however, it's 
 * looping conditions are different. With a 'for in' loop, the 'for' keyword is
 * followed by a variable declaration (that is used represent an object's key
 * names and iterate over them) and the 'in' keyword that is used to identify 
 * the object we want to loop over.
 */
 //If we want to loop over an object we'll have to use a 'for in' loop since objects
 //aren't organized by index
 //First we'll create an object variable with three key-value pairs
 
 var reneM = {
     name: 'Rene Mercadel',
     favColor: 'Green',
     favMusic: 'Hyperpop'
 }
 //Here we initialize the 'for in' loop
 
 for (var key in reneM) {
     console.log(key);    
     console.log(reneM[key]); //Prints the object's keyvalues using bracket notation
 }                            //MUST USE BRACKET NOTATION. Dot notationg will actually
                              //create a new key called 'key' with an undefined 
                              //Below is the expected output
                              //name
                              //Rene Mercadel
                              //favColor
                              //Green
                              //favMusic
                              //Hyperpop 
                              
                              
/**
 * WHILE LOOP:
 * The 'while' loop is called with the 'while' keyword followed by a conditional
 * statement, the code block that get executed, and increment value. It is used 
 * to loop over a block of code until a stopping condition is met. Something that 
 * must be kept in mind when using 'while' loops is that it's easy to trigger a  
 * loop that will never end crashing your computer. 
 */
 
//This is a simple while loop that will print the value of 'i' in the console 
//as it's value increments while it has a value less than 5
var i = 0;

while(i < 5) {
  console.log(i); //this loop will go through 5 iterations printing the new value 'i'
  i++;            //of 'i' each time. The expected result will be 0, 1, 2, 3, 4
                  //since the 'i < 5' condition is NON-inclusive.
}
 
                        
//Below is an example of a while loop that will loop infinitely since it's ending
//condition will never resolve to false

                        // while (true) {
                        //  console.log('Hello, world!');
                        //}
