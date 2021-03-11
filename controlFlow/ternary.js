/*A ternary basically acts as a shortcut to writing if, if/else and
else/if statements*/

let num = 5;

//ternary
(num > 0) ? console.log("yes"): console.log("no")
//        ^                   ^
//        if                 else

//instead of

if (num > 0) {
    console.log("yes");
} else {
    console.log('no');
}

//ternary with multiple conditions

(num == 0) ? console.log('hello') : (num < 0) ? console.log('hi'): 
console.log('goodbye')

//same code but in an else/if statement

if (num == 0){
    console.log("hello");
} else if (num < 0) {
    console.log("hi");
} else {                    //<--- this is the default statement
    console.log("goodbye");
}

//Challenge

let age = 36;

(age >= 25) ? console.log("You can rent a car!") : (age >= 21) ? console.log("you can drink!") :
(age >= 18) ? console.log("You can vote!") : console.log("Sorry, you're too young to do anything fun.");

