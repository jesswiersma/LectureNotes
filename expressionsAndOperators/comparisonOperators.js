//Equal to
//Checks for the value alone to match
let equalTo = "3" == 3;
console.log(equalTo)

/*If we use ==, it does not care about the DATA type and only checks value*/

//Strict Equals To
//Strict checks for data type AND value to match
let strictEqualTo = "3" === 3;
console.log(strictEqualTo)

/* If we use ===, it DOES care about data type and value*/

//Not Equal To
//Checks for the value alone to match
let notEqualTo = 3 != "3";
console.log(notEqualTo)

//Strict Not Equal To
//Strict checks for data type as well as the value
let strictNotEqualTo = 3 !=="3";
console.log(strictNotEqualTo);


//Greater Than
let greaterThan = 4 > 7;
console.log(greaterThan);

//Less Than
let lessThan = 33 < 100;
console.log(lessThan)

//Great Than Or Equal To
let greaterThanOrEqualTo = 3 >= 2;
console.log(greaterThanOrEqualTo);

//Less Than Or Equal To - always use the < first in comparing
let lessThanOrEqualTo = 2 <= 3 
console.log(lessThanOrEqualTo)

//And - checks for multiple conditions to be true or false
2 + 2 && 3 + 3 

//Or - checks for one condition to be true

2 || 3