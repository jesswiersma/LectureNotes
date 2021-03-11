/*let weather = 150;

if (weather < 70) {
    console.log("wear a jacket!");

} else {
    console.log("No jacket necessary!");
}


//challenge - see specs in instructorcode in Slack
//Bronze
let nameOne = "Jessica";

if (nameOne == "Jessica") {
    console.log(nameOne);
} else {
    console.log("Hello, what is your name?");
}

//Silver 

let nameTwo = "Jessica";

if (nameTwo == "Jessica") {
    console.log(`Hello, my name is ${nameTwo}`);
} else {
    console.log("Hello, what is your name?");
}
8

//Gold

let nameThree = "Jessica";

if (nameThree == "Jessica") {
    console.log(`Hello, my name is ${nameThree}`);
} else {
    console.log(`Hello, is your name ${nameThree}?`);
}

//challenge 2 - see specs in slack

//Bronze

let name = 'zAchARy';

if (name === `Zachary`) {
    console.log(name);
} else {
    console.log(`Hey, this isn't written correctly`);
}

//Better Bronze answer

let myName = "zAchARy"

if (myName.charAt(0) === myName.charAt(0).toUpperCase()){
    console.log(myName);
} else {
    console.log("Hey, that isn't written correctly");
}


//Silver

let myName = "zAchARy"
if (myName[0] == myName[0].toUpperCase()) {
    console.log(myName[0]);
} else {
    console.log(myName.substr(1).toLowerCase());
}

//Gold

let myName = "zAchARy"

let results = "";

if (myName[0] === myName[0].toUpperCase()) {
   results = myName[0] = myName.substr(1).toLowerCase())
} else {
    results = myName[0].toUpperCase()
}

console.log(results += myName.substr(1).toLowercase());
*/


/*Else If Statements - Order Matters - ALWAYS CHECK THE HIGHEST CONDITION FIRST
If you start with the lowest, you will always end up in there and you will never reach
the higher conditions since JS reads in order
Statements become more INCLUSIVE as you read down the list
*/

//Challenge solution I found

/*let age = 36;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.");
} else if (age >= 25) {
    console.log("You can rent a car!");
} else if (age >= 21){
    console.log("You can drink!");
} else {
    console.log("You can vote!");
}
*/

//Another solution to the challenge
let age = 36;

if(age >= 25) {
    console.log("You can rent a car!")
} else if (age < 25 && age >= 21){
    console.log("you can drink!")
} else if (age < 21 && age >= 18){
    console.log("You can vote!")
} else {
    console.log("Sorry, you are too young to do anything!")
}