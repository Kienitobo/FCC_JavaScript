//Use the parseInt function
/*

*/
function convertToInteger(str) {
    return parseInt(str); 
  }
  
  let parsed = convertToInteger("56");
  console.log(parsed);

//Use the parseInt function with a Radix
/*
Use parseInt() in the convertToInteger function so it 
converts a binary number to an integer and returns it.
*/

function convertToInteger(str) {
    return parseInt(str, 2);
  }
  
  let radix = convertToInteger("10011");
  console.log(radix);