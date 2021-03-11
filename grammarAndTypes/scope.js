/*
 - Scope is how a computer keeps track of all the variables in a program.
 - Scopes can also be nested where there is an outer scope (think global scope)
    that encloses an inner scope (think local scope)
.....Think about gloabl scope as Planet Earth. Everything belongs to or is on 
     Earth itself. WE live in Indianapolis, which could be our local scope.
*/

let x = 12;

function scope() {
    let x = 33;
    console.log("local:" , x);
}

scope();
console.log("global:" , x);

/*
 - With the introduction of ES6 came two more keywords to declare 
   variables: const and let
   - const is a constant that CANNOT be changed
   - var and let seem to operate the same BUT while they do have a lot of 
      the same functionality, they behave a little differently.
       ---- let is scoped to the nearest ENCLOSING block 
       ---- var is scoped to the nearest FUNCTION block

       BEST PRACTICE TO USE LET
*/

var y = 12;

function varTest() {
    var y = 33;
    if (true) {
        var y = 45;
        console.log("If Block:" , y) 
    }
    console.log("Function Block:" , y )
}
varTest();
console.log("global:", y)