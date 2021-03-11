/*
- For in loops are great for iterating over values in an object.
Properties in objects are what's called enumerable (aka countable).

- For in loops iterate over an object's enumberable properties
   (properties is another word for keys)
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (item in student) {        //item is grabbing the keys from the ojbect above
    console.log(item);        
    console.log(student[item]);
}

//                0                1                 2            3           4
let catArray = ["tabby" , "brittish shorthair" , "burmese", "Maine coon", "rag doll"];

for (cat in catArray) {              //cat is grabbing the indexes 
    console.log(cat);
    console.log(catArray[cat]);
}

/*Challenge - Write a for in loop that capitalizes the first letter of a name
              and lowercases the rest of the name */


let fName = "jeSsIca"
let capName;            //<--undefined because I intend to fill it

for (let i in fName) {
    if(i == 0){
        capName = fName[i].toUpperCase();
    } else {
        capName += fName[i].toLowerCase();
    }
}

console.log(capName);
