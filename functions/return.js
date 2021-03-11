/*

 let hi = () => {
      (1)
    return "hi"
 }
       (2)     (3)
 let newName = hi()

    console.log(newName)
 
    1. The keyword that brings our data out of our function
    2. We need a new variable to hold the value of the return
    3. When called, the function becomes the value of the return
*/

let myName = fName => {
    return fName;
}

let newName = myName("Jessica");
console.log(newName)



function capitalizeName(name){
    let capName = "";
    for (let l in name){
        if(l == 0){
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName)
    return capName
}

let finishedName = capitalizeName("jEsSiCa");
console.log(finishedName);

/*Challenge
 - Make a tip calculator using a block body fat arrow function
 - Capture the returned value in a variable
 - Print that variable (print = console.log)
 */


let check = 50;

let tipAmt = priceBeforeTip => {
    let tip = priceBeforeTip * .15;
    return tip;
}

let tip = tipAmt(check);
console.log(`Your meal cost $${check}, you should tip $${tip}`);



/*let tip = (price * .07) => {
    return `The tip is ${price * .07}`;
}
console.log(tip('price * .07))
let price = 20;
*/

