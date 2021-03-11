/*
- For of loops and for in loops both do the same thing which is loop over
   data structures. There is one key difference: what they iterate over.

    - for in loops iterate over the enumberable properties in an object
    - for of loops iterate over the values of an iterable object

- For of loops are best used on arrays
- For in loops are best used on objects
*/

let catArray = ["tabby" , "brittish shorthair" , "burmese", "Maine coon", "rag doll"];

for (cat of catArray) {
    console.log(cat);
}


//Cannot use for of loops on objects without indicies

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (stud of student){
    console.log(stud);
}