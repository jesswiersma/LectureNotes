/*
- Array destructuring allows you to unpack values from arrays, or even properties from objects, into distinct variables.

- Destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator which is where we define what values to unpack from the source variable. 

- Best used for pulling information out of an array/object and assigning that data to its own variable.

*/

const fullName = ["Donovan", "Triplett", "Mr", {month: 12, date: 18, year: 1992}];
//const fullName = fullName[0];
//const lastName = fullName[1];

const [firstName, lastName, ...otherInfo] = fullName
console.log("First:", firstName);
console.log("Last:", lastName);
console.log(otherInfo);

//can skip an element with a blank comma space Ex [firstName, lastName, , ...otherInfo]