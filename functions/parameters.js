/*
- Function parameters are place holders for data that we pass into the function when invoking the function
                  (1)
     function hi(name) {
         console.log(`Hi ${name}`);
                            (2)
     }
           (3)
     hi("Jessica");

    1 - The parameter(s) that the function is accepting or holding
    2 - Using string interpolation we can refer to the parameter given to the function
    3 - This is where we define the parameter's value
*/


function jessica(ticket){
    console.log(`I exchanged my ticket for a ${ticket}`);
}

jessica("pepperoni pizza");

/*Here’s the example we did in the invoke.js file using a parameter:

let arr = ['This', 'is', 'really', 'cool'];

function sendMessage(x) {
    for (let words of x) {
        console.log(words);
    }
}

sendMessage(arr);
parameter is ‘x’    then I call “arr” for the ‘x’ parameter*/

/*Challenge:
Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function myFullName(firstName, lastName){
    let myFullName = " ";
    myFullName += firsName + " " + lastName;
    console.log("Hello my name is" + myFullName);
}

myFullName("Jessica" , "Wiersma");


