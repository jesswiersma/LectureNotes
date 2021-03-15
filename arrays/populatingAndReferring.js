/*
- Arrays are containers that hold lists of items
- They are denoted by []

let list = [ "item1", "item2", "item3"];
    (1)   (2)  (3)

    1. name of the arry or list
    2. the array is within the square brackets
    3. each item, regardless of data, type is separated by a comma

*/

let list = ["orange", "banana", "apple"];

console.log(list[1]);

let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Ryan", "Iesha", "Amira"]];

console.log(students[2]);

//Challenge - grab Amira from array and print out "Hello Amira"

console.log("Hello" , students[6][2] + "!");

//the [6] brings us to the second array and the [2] brings us to the second index

