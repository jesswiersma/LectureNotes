




/*
BOOLEANS

- Are ONLY True or False values
- Booleans are like light switches (on or off)
*/

let on = true
console.log(on)

let off = false
console.log(off);


/*
NULL
- Null is like an empty bucket, it has the capacity to be filled but it currently is not.
AN INTENTIONAL EMPTY VALUE
*/

/*Null vs Undefined
Null is an intentional empty value
Undefined is generally an accidental value*/

let emptyBucket = null
emptyBucket = 'water'
console.log(emptyBucket)

/*
UNDEFINED
- currently has no value assigned
- Acts as the means (plastic/metal/material) to create the bucket
*/

let metal; //correct way to assign an undefined variable
//let metal = undefined; //Wrong way, it is redundant to initialize if it is not defined

console.log(metal)


// NULL vs UNDEFINED
//********
//Null is like an empty bucket, the bucket is there but there's nothing in it
//Unddefined is like the material we will use to create the bucket

/*We can also think of these two variables as pizza boxes
Null is like the empty pizza box just waiting for a pizza
Undefined is like the unassembled box
*/

let emptyBox = null
let unassembledBox; 


/*
NUMBERS
- In JS, numbers are just numbers. 
- You can add, subtract, multiply and divide
- You can use decimals
- Will round numbers at 16 numbers - see precise and rounded
*/

let degrees = 90;
console.log(degrees);

//will console.log() as 999999999999999
let precise = 999999999999999
console.log(precise)

//will console.log() as 10000000000000000
let rounded = 9999999999999999
console.log(rounded);


//Will console.log() as  0.30000000000000004
let notQuite = 0.2 + 0.1
console.log(notQuite);


//Function to convert a string to numbers IF that string is a number
let a = Number("123")
console.log(a)


/*
STRINGS
- A string is value in between a set of quotes or back ticks.
- A string ca be noted by '', " ", ` `
- 'string' === "string"=== `string`
*/

let stringOne = "doube quotes"
let stringTwo = 'single quotes'
console.log(stringOne, stringTwo)

//Numbers vs Strings

//Adding numbers
let addition = 1050 + 100
console.log(addition)

//Adding strings
let concatenation = '1050' + '100'
console.log(concatenation)
//Concatenation will just put the two strings next to each other, not add them as numbers

console.log(typeof addition)
console.log(typeof concatenation)


/*
OBJECTS
- Can be denoted by {}
- Objects store 2 things: a key and a value
- We can access these values by digging into the object with dot notation - object.value
*/

/*Ex: We want to create an app like spotify
We want to take in an artists name, amount of albums they've produced, all members are still alive?
*/

let artist = {
    //key //value
    name: 'Queen',
    albums: 15,
    allMembersAlive: false
}

//Examples of dot notation artist.name etc
console.log(artist)
console.log(artist.name)
console.log(artist.albums)
console.log(artist.allMembersAlive)

console.log(typeof artist.name)

//how to add to object
artist.songName = 'I want it all'
console.log(artist.songName)

//how to change an object's value
artist.songName ='Bohemian Rhapsody'
console.log(artist.songName)


/*ARRAYS

let list = [ 'item1' , 'item2' , 'item3'  ]
               (0)       (1)       (2)

- Denoted by []
- All arrays are objects but not all objects are arrays
- You can access a value by digging into the array with array[0]

*/

let burritos = ['large', 4, true]

console.log(burritos)
console.log(typeof burritos)


/*ADDITION VS CONCATENATION
 - addition is adding numbers together in JS
 - concatenation is adding strings together
 */

 let add = 100 + 100
 console.log(add)

 let concat = 'Jessica' +  ' Wiersma'
 console.log(concat)
 

 let stillConcat = '1050' + 100
 console.log(stillConcat)

 //console.log() as an object
 //BECAUSE the numbers associated with the array are 'keys'
 //and the list items are values