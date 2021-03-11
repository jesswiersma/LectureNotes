/* Constructor Functions
**************************
- Constructor functions can be thought of us a reusable skeleton object 
- We can add to the constructor functions the same way we add to objects - dot notation
- It is good practice to capitalize your constructor functions
- A constructor function is like a blueprint for an object
*/

//Option 1 - creating several objects

let artist1 = {
    name: 'Queen',
    albums: 15,
    allMembersAlive: false,
}

let artist2 = {
    name: 'Fleetwodd Mac',
    albums: 18,
    allMembersAlive: false,
}

let artist3 = {
    name: 'Stevie Wonder',
    albums: 11, 
    allMembersAlive: true,
}

//     (1)      (2)             (3)
     function Artist(name, albums, allMembersAlive) {
//       (4)  (5)    (6)
         this.name = name
         this.albums = albums
         this.allMembersAlive = allMembersAlive
}
//           (7)  (8)
let artist = new Artist(`Lizzo`, 3, true)
console.log(artist);


function Car(make, model, miles, hasBeenCrashed){
    this.make = make;
    this.model = model;
    this.miles = miles;
    this.hasBeenCrashed = hasBeenCrashed;
}

let car = new Car("honda", "accord",200000, true)
console.log(car)

/*
1 - The function keyword
2 - CAPITALIZED function
3 - The parameters : These will be the values of the object once this function is in use.
4 - The "this" keyword ; "this" gives us the ability to refer back to whatever called or whatever activates it. In this case, "this" will refer to our Artist being created.
5 - The key of our new object that is being created
6 - Is referring back to the parameter that is being passed to the function
7 & 8 - The new keyword calling our Artist function creating a new "Artist" with values passed in as parameters

*/