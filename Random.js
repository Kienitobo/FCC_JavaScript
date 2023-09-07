//Generate random fractions with javascript
/*
Change randomFraction to return a random number instead of returning 0.
*/
function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }
  
  let r = randomFraction();
  console.log(r);

  //Generate Random Whole Numbers wit Javascript
  /*
Use this technique to generate and return a random 
whole number in the range from 0 to 9.
  */
function randomWholeNum() {
    return Math.floor(Math.random()*10);
  }
  
  let w = randomWholeNum();
  console.log(w);

  //Generate Random Whole Numbers Within a Range
  /*
Create a function called randomRange that takes a range myMin and myMax and returns a 
random whole number that's greater than or equal to myMin and less than or equal to myMax.
  */
  function randomRange(myMin, myMax) {
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
  }
  let range = randomRange(5,10);
  console.log(range);