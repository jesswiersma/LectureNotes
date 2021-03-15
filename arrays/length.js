let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["blue", "green", "red", "yellow" ];
console.log(colors.length);
console.log(colors.toString());

console.log(typeof colors);

/*
CHALLENGE
************
​
    - First check if you are working with an array
    - Using a method, flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
*/



let arr = [1,2,3,4,5];

/*let newArr = new Array(1,2,3,4,5);
console.log(Array.isArray(newArr));
*/

if (arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
    console.log(revArr)
} else {
    console.log("not an array!");
}