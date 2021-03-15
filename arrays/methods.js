let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (foodItem of food) {
    console.log(foodItem);
}

/*
food.push("Pizza");
console.log("Push:" , food)    //The "push" method will always add to the end of the array
*/

let foodPush = food.push("Pizza");
console.log(foodPush);
console.log("Push:", food);

food.splice(1, 1, "Banana");    //.splice will cut and replace items in the list
                                // the first number is where to start the item to delete, the second number is how many items to delete,
                                //the banana is what to replace the deleted item with and is optional
console.log(food);

let foodPop = food.pop();                //.pop method removes the last item in the array
console.log(foodPop);   // <-- this returns the item that was removed
console.log("Pop" , food);      // <-- this shows the array after the element was removed

food.shift ()    // The opposite of pop 

let foodShift = food.shift("");
console.log(foodShift);
console.log("Shift:", food);

food.unshift();   //adds new elements to the beginning of the array, returns new     length

let foodUnshift = ("Popcorn" , "steak");
console.log(foodUnshift);
console.log("Unshift:", food);