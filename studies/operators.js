/**
 *                              OPERATORS
 * 
 * Javascript operators are symbols that we can use to assign values, 
 * make comparisons, and/or perform arithmetic operations (mathy actions like adding
 * subtracting, multiplying, dividing, etc...).
 * 
 * 
 * ARITHMETIC OPERATORS:
 * 
 * The arithmetic Javascript operators are  +, -, *, /, %, ++, --. These symbols
 * are used to perforn all of the mathimatical actions we are familiar with in 
 * our code.
 */
 
 var addition = 1 + 1;       //Addition (+)     
 var subtraction = 2 - 2;    //Subtraction (-),  //
 var multiplcation = 2 * 2;  //Multiplication (*)//
 var division = 2 / 2;       //Division (/)      //
 var exponential = 2**2;     //Exponential (**), //
 var modulus = 5 % 2; //=> 1 //Modulus (%) this operation gives you the remainder 
                             //of the dividend and divisor      
 var increamentPlus = 1;     //Increment (++) adds one to it's operand
     increamentPlus++; //=> 2
 var decrement = 1;          //Decrement (--) subtracts one to it's operand
     decrement--; // => 0

/**
 * COMPARISON OPERATORS:
 * 
 * The comparison operators in Javascript are  ==, ===, !=, !==, >, <, >=, <=.
 * Programmers use these symbols inlogical statements to compare values to one 
 * another that will always result in a boolean (true/false).
 */
 
 //Here we initialize num with a value of 1 in order to illustrate comparison
 //operators at work.
var num = 1; 

//The equals operator (==) makes a loose comparison between two values. As we can see
//here, even though the num variable is being compared to a string, Javascript
//is programmed to actually interpret a strictly numerical string as a number
console.log(num == '1'); //Prints => true

//The strict equality operator (===) makes a strict comparison between both value
//AND datatype. 
console.log(num === '1'); //Prints => false

//The loose inequality operator (!=) 
console.log(num != '1'); //Prints => false

//The strict inequality operator (!==)
console.log(num !== '1'); //Prints => true

//The greater than operator (>)
console.log(num > 2); //Prints => false

//The less than operator (<)
console.log(num < 2); //Prints => true

//The less than or equal to operator (<=)
console.log(num <= 2); //Prints => true
console.log(num <= 1); //Prints => true

//The greater than or equal to operator (>=)
console.log(num >= 0); //Prints true
console.log(num >= 1); //Prints true


/**
 * ASSIGNMENT OPERATORS:
 * 
 * The Javascript assignment operators are  =, +=, -=, *=, /=, %=. They are used
 * to assign values to a variable.
 */
 
//The = operator assigns a value to a variable
var num = 1;

//The += operator adds a value to a variable
console.log(num += 3); //Prints => 4

//The -= operator subtracts a value from a variable
console.log(num -= 3); //Prints => -2

//The *= operator multiplies a variable
console.log(num *= 3); //Prints => 3

//The /= operator divides a variable
console.log(num / 2); //Prints => .5

//The %= operator assigns a remainder to a variable
console.log(num * 3); //Prints => 3


/**
 * LOGICAL OPERATORS:
 * 
 * The Javascript logical operators are &&, ||, !. They are used to determine
 * the logic between variables or values in conditional statements.
 */

//The (&&) operator is used between operands in a conditional statement which will
//return true ONLY if all of the operands it's associating are true.
console.log(num > 2 && num > 0); //Prints => false

//The or (||) operator is used between operands in a conditional statement which will
//return true if EITHER of the operands it's associating are true
console.log(num > 2 || num > 0); //Prints => true

//The unary bang (!) operator (also known as the NOT operator) is used to negate whatever
//statement it preceeds
console.log(!(num > 2)); //Prints => true


/**
 * UNARY OPERATORS:
 * 
 * In Javascript, unary operators facilitate operations with only one operand.
 * They include +, -, ++, --, !, typeof, delete, and void
 */
 
//The unary + operator is place before it's operand and evaluates to it's 
//operand attempting to convert it to a number if it isn't already.
var x = true;
console.log(+x); //Prints => 1

//The unary - operator goes before it's operand and negates it
var x = 5; 
console.log(-x); //Prints => -5
var x = -5; 
console.log(-x); //Prints => 5

//The unary 'delete' operator utilizes the 'delete' keyword to delete an
//objects property
var obj = {
    one: 1,
    two: 2,
    three: 3,
}

delete obj.one;
console.log(obj); //Prints => {two: 2, three: 3}

//The unary 'typeof' operator will return a string of the value's datatype. However,
//arrays and date values will also return a string 'object' so additional testing
//is required to ascertain those datatypes.
var string = 'string';
var num = 1;
var arr = [1, 2, 3];
var obj = {one: 1, two: 2, three: 3};
var func = function () {
            return console.log(5);
           }

console.log(typeof string); //Prints 'string'
console.log(typeof num);    //Prints 'number'
console.log(typeof arr);    //Prinrs 'object'
console.log(typeof obj);    //Prints 'object'
console.log(typeof func);   //Prints 'function'


/**
 * TERNARY (CONDITIONAL) OPERATOR
 * 
 * In Javascript the ternary operator is the only operator that takes three operands.
 * It is used to return one of two values based on a condition. It is written by
 * setting a conditional statement followed by a questiong mark with the expression to 
 * return if the statement is true and the expression to retrun if the statement is 
 * false separated by a colon.
 */
 
 var age = 21;
 var canDrinkAlcohol = (age >= 21) ? 'yes' : 'no';
 console.log(canDrinkAlcohol); //Prints => yes


