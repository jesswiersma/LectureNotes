/*
 - First pass of JS: stores our variable and function declarations but does not assign values.
    Anything that needs hoisted is hoisted in the first pass.
- Second pass of JS: assigns the values to our variables and executes any hoisted source code.
*/

//console.log(myName);
///let myName = "Jessica";

b();

function b() {
    console.log("I have been hoisted!")
}



function whatDoesItDo(val) {
    return val ? 1 : 2;
};
