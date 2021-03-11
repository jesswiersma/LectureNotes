//Arrow Functions
//*************** 
/* Syntax

(declaration)       (name)         (parameters & fat arrow section)        (body of function)
   let          phatArrow    = (parameter1, parameter2, etc)      =>  console.log('fat arrow')

   let phatArrow = (parameter1, parameter2, etc) => console.log('fat arrow')
       phatArrow ();

-Arrow functions are function expressions and are NOT hoisted       

*/

let phatArrow = (parameter1, parameter2, etc) => console.log('fat arrow')
phatArrow()

/*Concise Body Arrow Functions
    - return by default
    - run when they are called upon (phatArrow())
    - may only be one line long 
*/

//Concise Body Arrow Function Example
let fish = () => console.log('Bobby and Jalen had fish for lunch today!');
fish();

/* Block Body Arrow Functions

- Do NOT return by default, you MUST include a return statement
- Run when they are called upon
- May consist of more than one line, given they are wrapped in { }
*/

//Block Body Arrow Function

let myName = (firstName, lastName) => {
    return `My name is ${firstName} ${lastName}`;
}
console.log(myName('Jessica' , 'Wiersma'));

/* Concise vs Block Body Functions

Concise =>
    - returns implicitly (no return statement needed)
    - must be contained into one line                    */

    let apples = x => console.log(`there are ${x} apples`)
    apples(100)
     
    
    /*
Block => 
    - does NOT contain an explicit return statement, we have to include it (return xyz)
    - can be more than one line as long as it is contained by { }
    */

    let apples1 = x => {
        console.log(`There are ${x} apples`);
    }
    apples1(1000);

    //Note: 
    // - More than one parameter will require parenthesis 
    // - The default return of an arrow function is undefined  