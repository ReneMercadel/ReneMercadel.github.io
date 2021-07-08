/**
 * In javascript there are several different types of data/information that the 
 * computer is capable of understanding. Each one of these datatypes has a unique
 * set of instructions and rules that can be applied to them to make use of the 
 * different kinds of information they contain/provide/represent. In Javascript
 * we catagorize these datatypes as either primitive/simple or complex. 
 * 
 *                        PRIMITIVE/SIMPLE DATATYPES
 * 
 * Primitive datatypes include numbers, strings, booleans, undefined, and null. 
 * These datatypes are all considered simple because they are atomic and immutable. 
 * In this case, atomic means that there are no simpler pieces the data can be 
 * broken down into or represented by. Immutable means that they aren’t capable 
 * of changing their structure or the data within them. Another important 
 * characteristic of primitive datatypes is that, when copied, their actual 
 * value is copied and stored in memory separately. For example:
 */
 
//If we initialize 'a' with a value of 1 and initialize 'b' with a value of 'a',
//b will evaluate to 1. However, even though we've defined 'b' in terms of 'a', 
//if we reassign 'a' to a different value (2), 'b's value will remain unchanged.
var a = 1;
var b = a;
    a = 2;
console.log(b); //Prints => 1

 
/* NUMBERS:
 * 
 * In Javascript, numbers are probably the most recognizable datatype you'll see. 
 * They're used to quantify any numerical value and are plainly recognized by the 
 * interpreter without any special keywords or characters. Think about when 
 * you’re on youtube and you see the number of views, or subscribers, or even 
 * likes and dislikes. The variables that are bound to these values are all of 
 * the number datatype and follow the same operations in Javascript as in real 
 * life. Javascript is capable of performing several different arithmetic operations 
 * on number values including:
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
 * STRINGS:
 * 
 * Strings on the other hand, are data made up of any textual or character
 * data in our program. Basically any text data made up of ANY of the letters 
 * numbers and symbols on your keyboard. So what separates that from numbers? 
 * All you have to do to make any text data a string is wrap the text 
 * (including spaces) in a pair of EITHER single quotes, double quotes, or
 * backticks (``). To create a string variable, all you have to do is declare the 
 * variable you wish to bind to the string and assign it to any text data 
 * you want (wrapped in quotes or backticks). ALSO! Whichever punctuation you
 * use for your string, it needs to be the same at the beginning AND the end.
 * No mixing and mathcing!
 */ 

var nameFirst = 'Rene'; // Here, nameFirst is assigned to the string value 'Rene'
var nameLast = "Mercadel"; //Here, nameLast is assigned to the string value 
                           //Mercadel, but this time it's wrapped in double quotes
var nameFull = `Rene Mercadel`; //And here we have nameFull assigned to the string
                                //`Rene Mercadel` using backticks
 
/**
 * BOOLEANS:
 * 
 * Another simple datatype is known as a boolean. The boolean datatype is used 
 * to create a true/false statement. It is essentially an on off switch that can
 * only exist as either true or false. It basically exists to express the state 
 * of some comparison as either true/false, on/off, yes/no. However, despite it's
 * simplicity, the Boolean value of an expression creates the basis for all 
 * JavaScript comparisons and conditions. Think about when you log on to a 
 * website with a password. When you actually hit “ok” after typing it in, that 
 * action results in a boolean that will either evaluate to “true” and logs you 
 * in, or “false” and keep you out. We're able to make comparisons and set 
 * conditions based on booleans by using the comparison operators >, <, 
 */
 
 var on = true; //Here, the variable on is assigned to the boolean value, 'true'
 var off = false; //Here, the variable off is assigned to the boolean value, 'false'
 
 console.log(on);  //This will print true to the console
 console.log(off); //This will print false to the console
 
/** 
 * UNDEFINED:
 * 
 * Undefined is simply the datatype associated with a variable that has name but 
 * hasn’t actually been assigned to any value. Therefore, any instances where a 
 * declared variable isn’t also assigned to a value it has an undefined datatype.
 */
 
var nothing;      //A variable called nothing is declared but since it hasn't been
                  //assigned to anything it has a value of 'undefined'
let stillNothing; //A variable called 'stillNothing' is declared with let and is
                  //also condsidered 'undefined'

console.log(nothing);      //Prints => undefined in the console
console.log(stillNothing); //Prints => undefined as well


/** 
 * NULL:
 *  
 * The null datatype literally represents nothing. It might initially seem similar 
 * to undefined but the major distinction between the two has to do with the intent
 * of the programmer. The null datatype is used to represent the intentional 
 * absence of any object value.
 */
 
 var abyss = null;   //A programmer may want to intentially give a variable an
                     //intial value of null that they might expect to change later on
 
 console.log(abyss); //Prints => null
 
 
/**
 *                            COMPLEX DATATYPES
 * 
 * Complex data types differ from simple/primitive types in that they are mutable
 * and can contain any number of values of any datatype. Javascripts complex
 * datatypes include Objects, Arrays, and Functions. Also, unlike primitive 
 * datatypes that are copied by value, complex datatypes are copied by reference.
 * This means that if you were to define one type by using another, the value
 * itself won't be copied. Instead, only a REFERENCE (an address in memory) to 
 * the ORIGINAL complex value will be copied. For example
 */
 
var a = [1, 2, 3];      //We initialize an array, 'a', with a value of [1, 2, 3]
var b = a;              //Then we initialize 'b' with a value of 'a'                  
    a = [1, 2, 3, 4];   //Here, we reassign 'a' with a value of [1, 2, 3, 4] which
                        //ALSO changes the value of 'b' since only the address
                        //to 'a' is stored instead of the actual array
    
console.log(b); //Prints => [1, 2, 3, 4] instead of the value it was initially 
                //assigned to
 
/** 
 * ARRAYS:
 * 
 * Arrays are essentially just a container used to store ANY other type of data 
 * as a list of elements (separated by a comma), organized by index, and wrapped in 
 * brackets. Index is the term used to refer to an element's position in the list 
 * with the first position beginning at index 0, the second at index 1 and so on. 
 * While an array can contain any combination of datatypes, the elements they 
 * contain are almost always related in some way (like a shopping list). Arrays, 
 * while often referred to as their own datatype, are actually just a unique 
 * variation of another complex datatype called an object. 
 */
 
 var array = [1, 2, 3, 4, 5]; //This is an example of an array of numbers 1-5
 
/**
 * OBJECTS:
 * 
 * Objects, like arrays, are containers that can collect any type of data, however, 
 * these sets of data are organized by properties, each of which is identified by
 * a unique key with a specific value. The key and the value of each property is
 * separated by a semicolon with every property separated by a comma with everything 
 * wrapped in curly brackets/braces. Also, unlike arrays which are lists of any
 * number of elements, objects are more containers for any number of qualities 
 * describing a single thing (hence the name object). For example, if a programmer wanted to 
 * describe the unique qualities of something like a specific book, their best bet
 * would be to do so with an object that contains properties such as rating, publishing date, 
 * Title, author and any other characteristic they may want to identify, quantify,
 * or use to describe their book.
 */
 
 //Here is an object called book with 3 propertied, 'title', 'author', and 'year'
 var book = {
     title: 'Harry Potter and the Sorcerers Stone',
     author: 'JK Rowling',
     year: 2001,
 }
 
/**
 * FUNCTIONS:
 * 
 * Functions are another complex datatype that can be thought of as a set of actions 
 * to be taken on any type of data. Functions are what allow our applications 
 * to actually do different things. Functions are declared with the keyword function 
 * followed by a name associated with the action the function will be performing.
 * The name is then followed by () which contain the funciton's inputs (known as 
 * parameters).The code describing the action(s) you want your function to 
 * perform are held within curly brackets. To actually call/invoke/run/execute 
 * the function, we use it's identifier and supply the parameters with specific 
 * values known as arguments.
 */
 
//Here is a simple function designed to add 2 numbers and return their sum

var add = function (num1, num2) {
            return num1 + num2;
          };

add(1, 2); //this is how we invoke a function
 
 
 
//                             UNIQUE NUMBERS
 
 
/**
 * NaN:
 * 
 * NaN, short for Not-a-Number, is a property of the global object in Javascript.
 * It represents a value that is literally not a number. Ironically, even though 
 * NaN is used to denote that a value not a number, NaN is actually a member of
 * the number datatype. Moreover, since NaN is essentially used to describe a
 * number that can't exist, it's actually not even equal to itself! An instance 
 * where a programmer may come across NaN is if they mistakenly try to perform an
 * arithmetic action on something that's not a number. For example, if they tried
 * to multiply a number and a non-numberic string they'd get NaN.
 */
 
 //If we try to console.log NaN's datatype with the 'typeof' keyword, we can see 
 //that it ccomes back as a number.
 
 console.log(typeof NaN); //Prints => 'number'
 
 /**
  * INFINITY, -INFINITY:
  * 
  * Like NaN, Infinity and -Infinity are also properties of the global object in
  * Javascript designed to be a value larger (or smaller) than any other number.
  * However, any truly massive number (exceeding something like 1.798e+308) will 
  * actually be read by the Javascript interpreter as Infinity.
  */
 
 
 
