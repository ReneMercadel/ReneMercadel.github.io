/**
 *                              CONTROL FLOW
 * 
 * In Javascript, the term 'control flow' refers to the order that in which 
 * statements get executed by the interpreter. The Javascript interpreter always
 * reads lines of code from top to bottom and RIGHT TO LEFT. Programmers utilize
 * control flow in order to create more dynamic applications that are capable of 
 * reacting to different circumstances. If we picture the interpreter reading our
 * code as if it was a car driving down a road, control flow would be like a fork
 * in the path allowing us to choose how we want our car(code) to proceed. 
 * Programmers are able to place these 'forks' in the road by utilizing both loops
 * and conditional statements. The different kinds of statements we can make are 
 * 'if statements', 'else if-else statements', and 'switch statements'.
 * 
 * IF STATEMENTS:
 * 
 * We initialize an 'if' statement by using the 'if' keyword followed by the 
 * condition we want to be met. After the condition is made (and wrapped in
 * parenthesis) what follows is the block of code we want executed ONLY if the 
 * condition evaluates to true. If the condition evaluates to false the code block
 * will be skipped over.
 */
 
 //First lets initialize some variables to compare.
 var x = 10
 var y = 100
 //This is a simple 'if' statement that will eveluate if 'x' is evenly divisible 
 //by 'y' with the help of the 'modulo' and 'strict equality' operators.
 if(x % y === 0) {
     console.log('yes'); //since the condition is satisfied with the inputs the
 }                       //interpreter will now execute the code block
                         //Prints => yes to the console
/**
 * ELSE IF STATEMENTS:
 * 
 * If statements are incredibly useful but what if we want to set up multiple
 * paths to branch from as oppose to 2? In these cases we use 'else if' statements.
 * Else if statements function almost identically to 'if' statements with the 
 * only difference being they must be preceeded by an 'if' statement. This is 
 * because we don't want it to be executed UNLESS the previous 'if' condition
 * returned false. To initialize an 'else if' statement we use the 'else if' 
 * keyword followed by the condition we're testing for. After the condition is
 * made we then write the code block we want executed if the condition evaluates 
 * to true. Same as an if statement, if the condition returns false the code block
 * will be skipped.
 */
 //We'll initialize 2 variables for this example
var breed = 'Mastiff'
var pupWeight = 200

 if (pupWeight > 180 && breed !== 'Mastiff') {      //Here, the first condition 
  console.log('NOT a healthy pup!');                //fails so the interpreter moves to the else if statement
} else if (pupWeight > 180 && breed === 'Mastiff'){ //This time the condition returns
  console.log('Healthy pup!');                      //true so the code block gets 
}                                                    //gets executed.


/**
 * ELSE STATEMENTS:
 * 
 * Else statements are used when we still want our conditional chain to execute
 * a block of code even if all previous conditions failed (returned false). To
 * use an 'else' statement, it needs to follow either an 'if' or 'else if' statement.
 * If that's the case then to begin our else statement, we use the 'else' keyword 
 * followed immediately by the block of code we want to execute (no conditional 
 * statement)
 */
 var score = 59;
 
 if (score >= 90) {
  console.log('You got an A! Good job!');
 } else if (score < 90 && score >= 80) {
  console.log('You got a B. Not bad!');
 } else if (score < 80 && score >= 70) {
  console.log('You got a C. Okay but can do better');
 } else if (score < 70 && score >= 60) {
  console.log('You got a D. We have to try harder!');
 } else {                                               //Given that all the other
  console.log('You got an F. Come see me after class'); //conditions have failed
 }                                                      //our chain will return the
                                                        //else code block.
                                //Prints => 'You got an F. Come see me after class'

/**
 * SWITCH STATEMENTS:
 * 
 * Switch statements are another means by which we can control the flow of our 
 * code in Javascript. While similar to 'if', 'else if', 'else' statements in that
 * it can perform different actions given a condition you can only have one expression
 * as your condition. Also, while if/else statements can check for both equality
 * AND logical expression, the switch statement can ONLY perform checks on 
 * equality. That being said, despite not being as robust, it's much more legible
 * and easier to read and debug (especially when there are a large number of
 * cases/comparisons being made). To use a 'switch' statement we begin with the 
 * 'switch' keyword followed by an expression that will be used to compare against
 * all the different senario's you want. After the expression comes the code block
 * which will contain all the cases you want to test your expression against. We 
 * set up these cases by using the 'case' keyword followed by the expression we're
 * comparing against our test expression. When that is set up we can then write the 
 * block of code we want executed if there's a match. In every 'case', after we 
 * write the block to be executed we must include a 'break' statement. This will
 * enable us to exit the swich statement with our matched case. If NO cases match
 * then we can include a default statement that uses the 'default' keyword to return
 * a case block in the event no other cases match.
 */

var favColor = 'red';

switch (favColor) {
    case 'orange':
        console.log('Orange my favorite color!')
        break;
    case 'yellow':
        console.log('Yellow is my favorite color!')
        break;
    case 'pink':
        console.log('Pink is my favorite color!')
        break;
    case 'green':
        console.log('green is my favorite color!')
        break;
    case 'blue':
        console.log('blue is my favorite color!')
        break;
    case 'purple':
        console.log('purple is my favorite color!')
        break;
    case 'red':
        console.log('red is my favorite color!')
        break;
    default:
        console.log('I love all the colors!')
}                                           //Prints => red is my favorite color



