/*
- Loops offer us a quick and easy way to do something repeatedly or loop something.
- There are many kinds of loops but they all roughly do the same thing.
....It will repeat until a specified condition evalutes to true
    - *for statement
    - do while statement
    - while statement
    - labeled statement
    - break statement
    - *for in statement
    - *for of statement
    * denotes most commonly used ones

Note: There is a danger of infinited loops. There are three main parts to a loop:
    1. initial expression - is run once at the beginning of every start to the loop
    2. condition - determines when the loop stops; will run until it terminates to false
       (comes after the initial expression)
    3. increment expression -
*/

//<--global i variable -- variables outside the function

for (let i = 0; i < 10; i++) {      //i++ is the short hand for i = i + 1
    console.log(i);
}

//Challenge: using a for loop, count to 20, by 2's

for (let i = 0; i <= 20; i+=2) {
    console.log(i);
}

//Challenge: use a for loop, count from 10 to 1, going down by 1

for (let i = 10; i >= 0; i-=1) {
    console.log(i);
}

//Challege: use a for loop, count from 0, going down by 2's to -24

for (let i = 0; i >= -24; i -=2){
    console.log(i);
}

//Challenge: using a for loop, go through a name and display each letter individually

let friendName = "Kenn";
let count = friendName.length;

for (let l = 0; l < count; l++ ){
    console.log(friendName[l]);
}
//other solution: use charAt

for (let j = 0; j < 5; j++) {
    console.log(j + " ")
}

