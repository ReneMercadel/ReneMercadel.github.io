////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
      return num1 < num2 ? num1 : num2;
  

  
  // //use if statement to compare num1 num2
  //   if (num1 < num2) {
  //     //if true return num1    
  //     return num1;
  //   } 
  //   return num2;
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
    //if nm is 0 return true and if num is 1 return false
    num = Math.abs(num);
    if (num === 0) return true;
    if (num === 1) return false;
    return isEven(num - 2);
    
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
        var totalBs = 0;
        for (var i = 0; i < string.length; i++) {
            //if statement to test characters in string
            if (string[i] === char) totalBs++;
        }
        return totalBs;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
        //can iterate over string like an array
        //create number variable to store total count of 'B's in string
        var totalBs = 0;
        for (var i = 0; i < string.length; i++) {
            //if statement to test characters in string
            if (string[i] === 'B') totalBs++;
        }
        return totalBs;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
