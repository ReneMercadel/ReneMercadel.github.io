/**
 *                          STRING MANIPULATION
 * 
 * Primitive datatypes, like strings, are immutable and therefore cannot change
 * by themselves. However, when applying methods and properties, Javascript
 * actually treats primitive values (including strings) as if they were objects.
 * This enables programmers to facilitate something called string manipulation.
 * To manipulate strings in Javascript, programmers have a plethora of methods
 * at their disposal. 
 * 
 * 
 * LENGTH PROPERTY:
 * 
 * The primary string property we've used so far is known as the length
 * property. The Length property, as the name states, will return the length of
 * a string in terms of the number of characters (including spaces, numbers, and
 * most symbols) it contains. This may sound similar to an index, especially 
 * when we consider strings are organized by index, however, the final index in 
 * any string (or array for that matter) will always be one less than the return
 * value of the length property.
 */
 //Here we initialize a string value and apply the length property
 var nameFull = 'Rene Mercadel';
 console.log(nameFull.length); //Prints => 13 to the console
 
 /** 
 * (+) OPERATOR
 * 
 * The addition (+) operator is actually capable of manipulating strings in
 * much the same way one of it's methods (concat) does. The + operator can actually
 * be used to combine any number of strings.
 */
 var nameFirst = 'Rene';
 var nameLast = 'Mercadel';
 console.log(nameFirst + " " + nameLast); //Prints => Rene Mercadel. You can see
                                          //how we are able to include spaces in 
                                          //the new string simply be wrapping them
                                          //in quotes

 
/**
 *                              STRING METHODS     
 * 
 * In Javascript, programmers are able to apply different actions to objects via
 * methods. A method in Javascript is simply an object property that stores a function
 * definition. Below I've included several of the most common string methods
 */
 
/**
 * CONCAT()
 *
 * The concat method is used to combine the text data of two strings and return
 * a new unified string. Note however that it doesn't include a space between 
 * the 2 substrings.
 */
var string = 'string one';
var stringTwo = 'string two';
console.log(string.concat(stringTwo)); //Prints => 'string onestring two'
 
/**
 * INDEXOF()
 * 
 * The indexof method will search a string for a value and either return the
 * first indexed position of the value in question, or a -1 if the value isn't
 * found. The indexOf method takes two arguments, the value to search for and
 * the index at which to start.
 */
var stringThree = 'string one, string two';
stringThree.indexOf('one'); //Will return 7 since that is the index where the 
                            //value 'one' begins
                            
/**
 * SPLIT()
 * 
 * The split() method splits a string into an array of strings. The split method
 * takes an argument of the character that specifies where to split the main
 * string. If the split isn't given it will return an array with the entire 
 * string as a single element.
 */
 var nameFull = 'Rene Mercadel';
 nameFull.split(" ");       //Will return an array with two elements separated
                            //by a space: ['Rene', 'Mercadel']

/**
 * TOUPPERCASE()
 * 
 * The toUpperCase() method will return the string it's applied to with all of
 * it's indexed positions converted to uppercase (if they aren't already). It 
 * takes no arguments.
 */
 var nameFull = 'Rene Mercadel';
 console.log(nameFull.toUpperCase()); //Prints => 'RENE MERCADEL'
 
/**
 * TOLOWERCASE()
 * 
 *  The toLowerCase() method will return the string it's applied to with all of
 * it's indexed positions converted to lowercase (if they aren't already). It 
 * takes no arguments.
 */
var nameFull = 'Rene Mercadel';
console.log(nameFull.toLowerCase());  //Prints => 'rene mercadel'

/**
 * TOSTRING()
 * 
 * The toString method will take whatever value it's applied to and return a 
 * string representing the specified value. It takes no arguments.
 */
 var nums = 372;
 console.log(nums.toString()); //Prints => '372' as a string
 var bool = true; 
 console.log(bool.toString()); //Prints => 'true' as a string
 
 /**
  * CHARAT()
  * 
  * The charAt() method will return a character from a particular given index. It
  * takes a number representing the index of the string it's applied to; therefore
  * it can take any number value from 0 to string.length-1.
  */
var nameFull = 'Rene Mercadel';
console.log(nameFull.charAt(5)); //Prints => 'M'

/**
 * SLICE()
 * 
 * The slice() method is used to pull out a part of a string and return it as
 * a new string. The slice method takes two arguments, the first is the index
 * where we want to begin our 'slice' and the second is the index where we want
 * to end it. If the second argument is ommitted it will end it's slice at the
 * end of the string
 */
var nameFull = 'Rene Mercadel';
nameFull.slice(4);          //Will return the string 'Mercadel'.


