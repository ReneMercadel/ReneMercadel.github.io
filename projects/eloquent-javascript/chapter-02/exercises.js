
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
//create an empty string variable to count up
            var string = "";
//use a for loop to repeat a command until string.length is equal to 7
            for (var i = 0; i < num; i++) {
//console.log the expression string += # so each time the loop executes, string
//grows by one #
                console.log(string += "#");
            }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
//need to set up a loop to count from one to 100
    for (var i = 1; i <= 15; i++) {
        //set up if/else statement to test each value
        //if divisible by 3 print fizz; 5 print buzz; 15 fizzbuzz
        //ESTABLISH FIZZBUZZ CONDITION FIRST SO IT CAN EXECUTE BEFORE EITHER 
        //FIZZ OR BUZZ CONDITIONALS HAVE THE CHANCE TO EXECUTE
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }    
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
//use a loop to print '#' 
//I: number, O: string that repeats based on num parameter
    //declare empty string variable to contain result string
    var str = '';
    //I can utilise .repeat to print alternating hashtags and spaces
    //need to define odd lines vs even lines
    var odd = '# '.repeat(num/2);
    var even = ' #'.repeat(num/2);
    //if num is odd I have to add a space at the end
    if (num % 2 === 1) {
        odd += '#\n';
        even += ' \n';
    } else {
        odd += '\n';
        even += '\n';
    }
    
    for (var i = 0; i < num; i++) {
    //if statement to print 2 variations of # line
        if (i % 2 !== 0) {
            str += odd;
        } else {
            str += even;
        }
    }
    console.log(str);
}

drawChessboard(8);
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
