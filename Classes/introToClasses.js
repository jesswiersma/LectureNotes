/*
- JavaScript classes were introduced in ES5 as a new way to write JS's previous prototype-based inheritance which is a way of creating an object that acts as a blueprint.

- Classes act as a blueprint for creating objects that share methods and properties.

- Classes consist of the class name, curly brackets, and any properties or methods we include within the curly brackets.

- Classes can be written as class expressions or class declarations

// Always capitalize the first letter in a JS class
// Class declarations do not get hoisted

class Autombile {
    //methods and properites go here
}

let vehicle = class {
    //method and properties go here
}

- The constructor method is a special method that helps create and initialize an object created from a class. It works in tandem with a new keyword.

- The constructor needs to be included for us to create new objects or instances of our class. This allows us to set up properties as well as pass in values for those properties when creating the new instance.

- Each class can only have ONE constructor

//     (1)
class Cookie {
                //   (2)
    constructor(type, icing, shape) {
        //(3)     (4)
        this.t = type; 
        this.i = icing;
        this.s = shape;

    }
}

 1. class name
 2. parameters - This constructor method takes in three parameters of type, icing, and shape. Since the constructor method is invoked when we call upon the class, we need to supply the arguments.
 3. We are assigning keys/properties for each new instance of our Cookie class
4. We are assiging those keys/properties the values that we passed in as arguments.

*/

class Cookie {
    constructor(type, icing, shape){
        this.t = type;
        this.i = icing;
        this.s = shape;
    }
}

let chocolateChip = new Cookie("chocolate chip", false, "circle");
console.log(chocolateChip);

/*
class Automobile {
    start() {
        console.log("hello");

    }

    stop() {
        console.log("bye");

    }
}

let newCar = new Automobile();
console.log(newCar);
newCar.start();
newCar.stop();
*/

//CHALLENGE

/*
Bronze:
Build an Automobile class that takes in a make and a model in the constructor. Bind those two parameters to the class's properties with matching names. 
​
Silver:
Add two methods to the Automobile class: start() and stop(). Each method should print out a message to the console that the engine has started or stopped. Include the vehicle's make and model in the output.
​
Gold:
Use the new keyword to create a new instance of the Automobile class and assign the new instance to a variable. Run both methods.
*/

//Bronze

class Automobile {
    constructor(make, model){
        this.make = make; 
        this.model = model;
    }

    start(){
        console.log(`The ${this.make} ${this.model}'s engine started`)
    }

    stop(){ 
        console.log(`The ${this.make} ${this.model}'s engine has stopped`)
    }
    
}

let hondaAccord = new Automobile("Honda", "Accord");
console.log(hondaAccord);
hondaAccord.start();
hondaAccord.stop();

let fordEscape


/*

- The extends keyword is used in class declarations/expressions to create anew class as a child of another class.

- Each new class we create that extends from the parent class not only inherits the properties and methods from the parent class but it can also have its own methods and properties.

*/

//Parent

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat () {
        console.log(`${this.name} eats their food`);
    }
}

//Subclass
//The super method gives us access to the parent classes properties and methods
class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    play(){
        console.log(`${this.name} fetches the ball!`)
    }
}

let Georgie = new Dog("Georgie", "Bearded Collie");
Georgie.eat();
Georgie.play();




