//Function expressions are functions stored within variables
//Function expressions DO NOT get hoisted

/*
     (1)
 let hey = function hi() {
     console.log("HI");
 }

  1 - the variable hey is now representative of the funciton hi()
*/

let hey = function hi() {
    console.log("Hi");
}

hey();
