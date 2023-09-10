//Reuse JavaScript code using import
/*Add the appropriate import statement that will allow the 
current file to use the uppercaseString and lowercaseString functions 
you exported in the previous lesson. These functions are in a file 
called string_functions.js,  which is in the same directory as the 
current file.
*/

  
import {uppercaseString, lowercaseString} from './es6_var_let_scope.mjs';
// Only change code above this line

console.log(uppercaseString("hello"));
console.log(lowercaseString("WORLD!"));

//Use * to import everything from a file
/*The code in this file requires the contents of the 
file: string_functions.js, that is in the same directory as the
 current file. Use the import * as syntax to import everything from
  the file into an object called stringFunctions.
*/


import * as stringFunctions from './es6_var_let_scope.mjs';
// Only change code above this line

console.log(stringFunctions.uppercaseString("hello"));
console.log(stringFunctions.lowercaseString("WORLD!"));

//Import a Default Export
/*In the following code, import the default export from the 
math_functions.js file, found in the same directory as this file.
 Give the import the name subtract.
*/

import subtract from './es6_var_let_scope.mjs';
console.log(subtract(7,4));

