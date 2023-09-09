//Compare scopes of the var and let keywords
/*
Fix the code so that i declared in the if statement is a 
separate variable than i declared in the first line of the function. 
Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between
 how var and let keywords assign scope to the declared variable. 
 When programming a function similar to the one used in this exercise, 
it is often better to use different variable names to avoid confusion.
*/

function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();

//Mutate an array declared with const
/*
An array is declared as const s = [5, 7, 2].
 Change the array to [2, 5, 7] using various element assignments.
*/
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return s;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
console.log(editInPlace());

//Prevent object mutation
/*
In this challenge you are going to use Object.freeze to prevent 
mathematical constants from changing. You need to freeze the 
MATH_CONSTANTS object so that no one is able to alter the value of PI,
 add, or delete properties. Using Object.freeze() function
*/
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line

  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Use arrow functions to write concise anonymous functions
/*
Rewrite the function assigned to the variable magic which returns a
 new Date() to use arrow function syntax. Also, make sure nothing is 
 defined using the keyword var.
*/

/*var magic = function() {
  return new Date();
};
*/

const magic = () => new Date();

//Write arrow functions with parameters
/*
Rewrite the myConcat function which appends contents of 
arr2 to arr1 so that the function uses arrow function syntax.
*/
/*var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//Set default parameters for your functions
/*
Modify the function increment by adding default
 parameters so that it will add 1 to number if value is not specified.
*/
// Only change code below this line
//const increment = (number, value) => number + value;
// Only change code above this line

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2));
console.log(increment(5));

//Use the rest parameter with function parameters
/*Modify the function sum using the rest parameter in such a 
way that the function sum is able to take any number of arguments 
and return their sum.*/
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(sum(0, 1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(5));
console.log(sum());

//Use the spread operator to evaluate arrays in place
/*
Copy all contents of arr1 into another array arr2 using the spread operator.
*/
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

//Use deststructuring assignment to extract values from objects
/*Replace the two assignments with an equivalent destructuring assignment.
 It should still assign the variables today and tomorrow the values of
  today and tomorrow from the HIGH_TEMPERATURES object.*/
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
console.log(today, tomorrow);

//Use Destructuring Assignment to Assign Variables from Objects
/*Replace the two assignments with an equivalent destructuring assignment. 
  It should still assign the variables highToday and highTomorrow the 
  values of today and tomorrow from the HIGH_TEMPERATURES object.
  */
const NEXTHIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line
const { today: highToday, tomorrow: highTomorrow } = NEXTHIGH_TEMPERATURES;
// Only change code above this line
console.log(highToday, highTomorrow);

//Use Destructuring Assignment to Assign Variables from Nested Objects
/*
Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables lowToday and highToday the values 
of today.low and today.high from the LOCAL_FORECAST object.
*/
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

const {
  today: { low: lowToday, high: higherToday },
} = LOCAL_FORECAST;

// Only change code above this line
console.log(lowToday, higherToday);

//Use Destructuring Assignment to Assign Variables from Arrays
/*Use destructuring assignment to swap the values of a and b so that a receives
 the value stored in b, and b receives the value stored in a.
*/
let a = 8,
  b = 6;
// Only change code below this line
[b, a] = [a, b];
console.log(a, b);

//Destructuring via rest elements
/*Use a destructuring assignment with the rest syntax to emulate the behavior
 of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original 
 array list with the first two elements omitted.
*/

function removeFirstTwo(list) {
  [list[0], list[1], ...list] = list;
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
/*Use destructuring assignment within the argument to the function half
 to send only max and min inside the function.
*/
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

console.log(half(stats));
//Create Strings using Template Literals
/*
Use an iterator method (any kind of loop) to get the desired output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  "use strict";
  // change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // change code above this line
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);

//Write Concise Object Literal Declarations Using Object Property Shorthand
/*Use object property shorthand with object literals to create and return 
an object with name, age and gender properties.
*/
const createPerson = (name, age, gender) => ({
  // Only change code below this line
  name,
  age,
  gender,

  // Only change code above this line
});

console.log(createPerson("Zodiac Hasbro", 56, "male"));

//Write Concise Declarative Functions with ES6
/*Refactor the function setGear inside the object bicycle to use the 
shorthand syntax described above.
*/
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(48);
console.log(bicycle.gear);

//Use class Syntax to Define a Constructor Function
/*Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property name
 that gets passed to the constructor.
*/
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'
