/**
 *                                FUNCTIONS
 * 
 * Functions are another complex datatype that can be thought of as a set of 
 * actions to be taken on any other type of data. If we think of programming
 * like making a meal and our data (numbers, strings, arrays, objects, etc...)
 * as ingredients, we can think of functions as recipes that instruct us on
 * which actions to take with our ingredients (in this metaphor we'd be the 
 * Javascript interpreter) Functions are what allow our applications to actually 
 * do different things. Functions can accept any number of input values in their
 * definition called parameters. However, when we actually want to execute the 
 * function we'll give it defined input values called arguments. Functions can 
 * only ever return a single output value though.
 * 
 *                        DECLARATION & INVOKATION
 * 
 * In order to use a function, it must first be declared/defined. Functions can 
 * be declared a few different ways. The first most programmers learn is to begin 
 * with the 'function' keyword followed by a name associated with the action your
 * function will perform. A very important feature of Javascript is that function
 * definitions are also subject to hoisting and will be hoisted to the top of 
 * their scope.
 */
 function add(valueOne, valueTwo) {
     return valueOne + valueTwo;
 }
 //They can also be declared by binding a nameless function to a variable.
 var add = function(valueOne, valueTwo) {
     return valueOne + valueTwo;
 }
 //With the introduction of ES6, functions can now be created with the arrow 
 //key-symbol (=>). This takes the form of replacing the function with the 
 //arrow during the declaration
 var add = (valueOne, valueTwo) => { //This method can be actually be simplified
     return valueOne + valueTwo;     //further into a single line when the function
    }                                //body is only one line of code by removing
                                     //the braces and 'return' keyword.
 
/** To actually invoke/call/execute/apply a function we must call it by name and
 * supply it with arguments.
 */
//function declaration/definition  
 function add(valueOne, valueTwo) {
     return valueOne + valueTwo;
 };
 
 add(100, 200); //Here we call the 'add' function and supply it with numerical
                //arguments: 100, 200
 console.log(add(100, 200)); //Prints => 300
 
 add('Rene', 'Mercadel'); //Since strings can be manipulated with the addtion
                          //operator we can supply them as arguments
 console.log(add('Rene', 'Mercadel')); //Prints => 'ReneMercadel' with no space
                                       //between the arguments in the result
     
/** 
 * While each example thus far has supplied the function with parameters and 
 * returned a value, neither of those qualifiers are actually necessary to 
 * create and use a function in Javascript. In fact, a function can still be
 * executed even if we supply it with a different number of arguments than parameters.
 * it was initially defined with. On that note, if we don't want a function to 
 * actually return a value all we have to do is ommit the return keyword.
 */
 //Here we call the 'add' function again but this time we supply it with 3 
 //arguments instead of 2.
 add(100, 200, 300); //This will still return 300 since the argument '300' is
                     //can't be utilized and gets ignored.
 //Here we reassign the 'add' function to the same action but with no return
 function add(valueOne, valueTwo) {  
     valueOne + valueTwo;
 };
 console.log(add(100, 200)); //Prints => undefined since no value is returned 
                             //from the function.

/**
 *                              FUNCTION SCOPE
 * Like all variable values in javascript, functions are subject to scoping. Every
 * time a function is defined, it creates a new local scope within the function
 * body. In Javascript, it's imperative that we keep scope in mind as it dictates 
 * which values we have access to and where. Javascript has 3 types of scope that
 * manage the accessability of variables called block scope, function scope, and
 * global scope. Block scope refers to any body of code wrapped in curly braces
 * (so this applies to conditional statements, loops, AND functions). So while 
 * this does include functions, function scope has additional behaviors that need
 * to be accounted for regarding variables declared with the 'var' keyword. 
 * It's important to note that scoping does NOT work the same in both directions.
 * While variables declared INSIDE of a function scope are NOT accessible from 
 * the global scope, varibles declared in a parent/global scope ARE accessible from 
 * inner blocks. 
 */
//Here we have a function designed to make an array out of an objects key-values

 function objectValues(object) {
        //INSIDE the body of the function we declare an array variable to store 
        //object key values
        let objArray = [];
        //here we use a for in loop to loop over an object's key values.
        for (let key in object) {
            //note how even though variables declared with the let keyword are 
            //block scoped, the 'objArray' variable is accessable since it's being
            //called from a parent scope
            objArray.push(object[key]); //When a global variable is accessed from
        } return objArray;
}

/**
 *                                 CLOSURES
 * Another feature of Javascript closely related to scope is the concept of closures.
 * Closures refer to any instance in which a variable declared in a global or 
 * parent scope is accessed from a local/private/function scope. 
 */
 
 var num = 3; //Here we declare a variable in the global scope
 
 function add(value) {
  var num2 = 2
  return num + num2 + value; //when the global variable is accessed
 }                           //from inside the add function it creates
                             //a closure
     
 add(5); //This will return a value of 10
     
     
     