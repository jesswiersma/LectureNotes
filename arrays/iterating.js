let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

//regular for loop
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

food.forEach(foodItem => console.log(foodItem)); 

//The forEach method CANNOT return a value
//Biggest difference between a for loop and a forEach is that forEach cannot return a value

food.forEach((foodItem, index) => console.log(foodItem, index));

/*
CHALLENGE
************
​
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ["Frozen", "Aladdin", "Lion King"];

movies.forEach(movieList => console.log(movieList));

let moviePush = movies.push("The Little Mermaid");
console.log(moviePush);
console.log("push", movies);

let moviesSplice = movies.splice(0, 1, "Coco");
console.log(moviesSplice);
console.log("Splice:", movies);

      