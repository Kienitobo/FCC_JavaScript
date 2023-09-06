//Using Objects for lookup
/* Convert the switch statement into an object called lookup. 
Use it to look up val and assign the associated string to the result variable.
*/

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  };

  const lookupVal = val;
   result = lookup[lookupVal];
  
  // Only change code above this line
  return result;
}

const display = phoneticLookup("charlie");
console.log(display);

//Testing Objects for Property
/* Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj,
 return that property's value. If not, return Not Found.*/

function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
  return "Not Found";

  // Only change code above this line
}

const answer = checkObj({"head size":12, "hat size":"3yo"},"5yo");
console.log(answer);

//Manipulating Complex Objects
/*
Add a new album to the myMusic array. Add artist and title strings, 
release_year number, and a formats array of strings.
*/

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Sia",
    "title": "Unstoppable",
    "release_year": 1983,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

//Accessing Nested Objects
/*
Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for 
all properties where possible, otherwise use bracket notation.
*/

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested Arrays
/*
Using dot and bracket notation, set the variable secondTree to 
the second item in the trees list from the myPlants object.
*/
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

//Record Collection
/*
You are creating a function that aids in the maintenance of a 
musical album collection. The collection is organized as an object
that contains multiple albums which are also objects. Each album is 
represented in the collection with a unique id as the property name.
 Within each album object, there are various properties describing 
 information about the album. Not all albums have complete information.

The updateRecords function takes 4 arguments represented by
 the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property 
from the album.
If prop isn't tracks and value isn't an empty string, 
assign the value to that album's prop.
If prop is tracks and value isn't an empty string, you need to 
update the album's tracks array. First, if the album does not 
have a tracks property, assign it an empty array. 
Then add the value as the last item in the album's tracks array.

Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.
*/

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(value==""){
    delete records[id][prop];
  }else if(prop!='tracks' && value!=""){
    records[id][prop] = value;
  }else if(prop=='tracks' && value!=""){
    if(!records[id].hasOwnProperty(prop)){
      records[id][prop] = [];
      records[id][prop].push(value);
    }else{
      records[id][prop].push(value);

    }
  }
  return records;
}

const record = updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(record);


