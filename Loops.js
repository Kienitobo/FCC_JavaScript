//Iterate with Javasript While Loops
/*
Add the numbers 5 through 0 (inclusive) 
in descending order to myArray using a while loop.
*/

// Setup
const myArray = [];

// Only change code below this line
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

console.log(myArray);

//Iterate with Javascript For Loops
/*
Use a for loop to push the values 1 through 5 onto myArray.
*/

// Setup
const secArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++) {
  secArray.push(i);
}
console.log(secArray);

//Iterate Odd Numbers With a For Loop
/*
Push the odd numbers from 1 through 9 to myArray using a for loop.
*/

// Setup
const thirdArray = [];

// Only change code below this line

for (let i = 1; i < 10; i += 2) {
  thirdArray.push(i);
}
console.log(thirdArray);

//Count Backwards with a For Loop
/*
Push the odd numbers from 9 through 1 to myArray using a for loop.
*/

// Setup
const fourthArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
  fourthArray.push(i);
}

console.log(fourthArray);

//Iterate Through an Array with a For Loop
/*
Declare and initialize a variable total to 0. Use a for 
loop to add the value of each element of the myArr array to total.
*/

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);

//Nesting For Loops
/*
Modify function multiplyAll so that it 
returns the product of all the numbers in the sub-arrays of arr.
*/
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

const res = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(res);

//Iterate With JavaScript Do...While Loop
/*
Change the while loop in the code to a
 do...while loop so the loop will push only the number 10 to myArray, 
 and i will be equal to 11 when your code has finished running.
*/
// Setup
const fifthArray = [];
let x = 10;

// Only change code below this line
do {
  fifthArray.push(i);
  x++;
} while (x < 5);

//Replace Loops Using Recursion
/*
Write a recursive function, sum(arr, n), 
that returns the sum of the first n elements of an array arr.
*/

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

let plus = sum([1], 0);
console.log(plus);
plus = sum([2, 3, 4], 1);
console.log(plus);

//Profile Lookup
/*
We have an array of objects representing different people in our 
contacts lists.

A lookUpProfile function that takes name and a property (prop) 
as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName 
and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string 
No such contact.

If prop does not correspond to any valid properties of a contact 
found to match name then return the string No such property.
*/

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for (let i=0; i<contacts.length;i++){
  if(name==contacts[i]["firstName"] && contacts[i].hasOwnProperty(prop)){
    console.log(contacts[i]["firstName"]);
    return contacts[i][prop];
  } else if(name==contacts[i]["firstName"] && !contacts[i].hasOwnProperty(prop)){
    return "No such property";
  }
}
return "No such contact";
  // Only change code above this line
}

let y =lookUpProfile("Bob", "number");
console.log(y)

//