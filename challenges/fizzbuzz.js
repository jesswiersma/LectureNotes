/*
FIZZBUZZ CHALLENGE (pair coding)
***************
    - Creat a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

/*let num = 10

switch (num) {
    case a: (num/3):
        console.log("Fizz);
        break; 
    case b: (num/5):
        console.log("Buzz");
        break;
    case c: (num/3 && num/5):
        console.log("Fizz Buzz");    
        break;
    default:
        console.log(`I'm sorry, not a factor of 3 or 5`);
}
*/

//possible solutions

// else if

let FB = 15;

if (FB % 3 == 0 && FB % 5 == 0) {
    console.log("Fizz Buzz");
} else if (FB % 5 == 0){
    console.log("Buzz")
} else if (FB % 3 == 0){
    console.log("Fizz");
}


//switch

switch (true){
    case (FB % 3 == 0 && FB % 5 == 0):
        console.log("Fizz Buzz");
        break;
    case (FB % 3 == 0):
        console.log("Fizz");
        break;
    case (FB % 5 == 0):
        console.log("Buzz");
        break;
    default:
        console.log(FB);
}


// ternary

(FB % 5 = 0) ? (FB % 3 ==0) 
 console.log("Fizz Buzz") :
console.log("Buzz"):
(FB %3 == 0) ?
console.log("Fizz") :
console.log(FB) 

/*
FIZZBUZZ EXERCISE (conditionals and loops)
************
-Create a function that when invoked:
    - executes a for loop running between the numbers 0 - 100
    - for multiples of 3, instead of the number, console.log "Fizz"
    - for multiples of 5 console.log "Buzz";
    - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
    - for any other number, console.log the value
*/

