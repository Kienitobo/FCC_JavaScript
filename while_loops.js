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
