/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use 
 * variables. Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another 
 * data-type.  Variables are called so because once created, we can CHANGE the 
 * value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name 
 * (id or alias) for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization 
 * (or assignment).
 */

// 1. declaration //
var myName;

/**
 * At the declaration phase, the variable myName is undefined because we have 
 * NOT initialized it to anything
 */
console.log(myName); // prints=> undefined

// 2. initialization or assignment //
myName= 'john';
console.log(myName); // prints=> john

// 3. re-assignment //
myName= 'bob';
console.log(myName); // prints=> bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this 
//       with constants 
var myVariable= 1;
var myVariable= true;
myVariable= "someString";

/**
 * HOISTING:
 * 
 * All declarations made using the Javascript coding language are subject to 
 * something known as Hoisting. Hoisting is a default characteristic of 
 * Javascript that reads all variable declarations made with the 'var'
 * keyword, and all function declarations/definitions before any code actually 
 * gets exectuted. HOWEVER! While the DECLARATIONS get hoisted, the actual value 
 * assigned to the variable doesn't. This means that while you can reference a 
 * 'var' variable before it's declared, it will not have a value assigned to it. 
 * Therefore, it will be treated as undefined until the assignment is initialized. 
 * The term hoisting is technically a misnomer as the 'var' declarations don't 
 * literally get 'hoisted' to the top of the global scope. Instead, the Javascript 
 * interpreter actually does an initial pass over all the code and saves the var 
 * declarations in memory before making a second pass to execute the code.
 */

/**
 * In addition to var, there are two other keywords we can use if we want to 
 * create a variable in javaScript called let & const.
 */
 
//let

/**
 * Unlike variables created with var, 'let' variable declarations are not hoisted
 * by the interpreter and can't be redeclared. The other primary difference is that 
 * 'let' variables are what is known as block scoped. This means that any time a 
 * variable is initialized using the let keyword, that variable will be scoped to 
 * whichever code block it's been declared in. As a result, any 'let' variables 
 * declared inside of a conditional statement or loop will ONLY be accessable 
 * within that statement or loop respectfully.
 */ 
/**
 * If we try to run this code here we'll get a reference error telling us that
 * the interpreter can't access the value of num before it's initialized. This
 * is because any variable declaration made with the 'let' keyword will NOT be
 * hoisted.
 */

//                      console.log(num1);  
//                      let num1 = 2;
//                      console.log(num1);

 
// Here we can see how variables declared with 'let' are block scoped. Note that
// this scoping behavior also applies to the 'const' keyword.
 
let num2 = 10; //we initialize a variable called 'num' with let

if (num2 === 10) {
    let num2 = 20;
    
    console.log(num2); //our expected output here should be 20
}

console.log(num2);//But our output HERE will still be 10 since the other
                  //'num' variable assignment can't leave it's local scope in
                  //the if statement.

 //const
 
 /**
  * Variables declared with the const keyword can't be redeclared nor reassigned.
  * Also, as with the 'let' keyword, variables declared with const are block
  * scoped and their declarations are NOT hoisted. However, just because const 
  * variables can't be reassigned, does NOT mean that they're immutable (unchangable);
  * complex objects CAN be manipulated even if they're initialized with the 'const' 
  * keyword. As a rule of thumb, variables should always be declared with 'const' 
  * UNLESS we know that the value will change. It's also important to note that 
  * const variables must be initialized when they are declared. 
  */

            //Here we have examples demonstrating the properties of 'const'

//Declaration AND assignment must be done at the same time when using 'const'         
                        const nameFirst = 'Rene'
//This code below will not run since const variables can't be redeclared. If we
//try, we'll get a syntax error that the nameFirst identifier was already declared
//                      const nameFirst = 'Rene'; 
//                      const nameFirst = 'Jim';


/**
 * The var keyword creates variables that are function scoped. This means that
 * 'var' variables declared within a function can't be accessed from outside 
 * the function itself. However, unlike variables declared with 'lets' and 
 * 'const', 'var' variables declared in a conditional statement or loop CAN be 
 * accessed from an outer scope.
 */

function funky() {
    var example = 'functionScoped'; //this variable can't be accessed outside of
}                                   //the funky function