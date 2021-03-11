/*
- PROPERTIES: qualities that are associated with a data type
- STRINGS: only have one singular property for us to access which is the length property
*/
//This counts the number of characters in your string
let myName = "Jessica Wiersma";
console.log(myName.length);


/*
- METHODS are tools that can help us manipulate data
- .property vs .method()
- A method is a function associated with data types
*/

let myNameIs = "Jessica"
console.log(myNameIs.toUpperCase());

let home = "My home is Chicago";
console.log(home.includes("Chicago"));

//Challenge: Use google, find MDN Documentation for Strings, research and use the 
//split method to get an array back from this string
//Let sent = "This sentence will be split into individual parts";

//DONT FORGET THE () TO INVOKE

const sent="This sentence will be split into individual parts";
console.log(sent.split(" "));
