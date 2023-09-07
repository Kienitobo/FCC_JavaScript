//Tenary operators: Single line if-else statements

/*
Use the conditional operator in the checkEqual function to check if 
two numbers are equal or not. The function should return either the 
string Equal or the string Not Equal.
*/

function checkEqual(a, b) {
    return a==b? "Equal" : "Not Equal";
    }
    
    let equal = checkEqual(1, 2);
    console.log(equal);


//Use Multiple Conditional Tenary Operators
/*
In the checkSign function, use multiple conditional operators - 
following the recommended format used in findGreaterOrEqual - to check if a number 
is positive, negative or zero. The function should return positive, negative or zero.
*/
function checkSign(num) {
    return num > 0 ? "positive"
      : num == 0 ? "zero"
      :"negative";
  
  }
  
  let sign = checkSign(-4);
  console.log(sign);