// QUESTION 1
console.log("QUESTION 1");
let i = 0;
let orderHasShipped = true;
let spaceString = " ";

console.log("Initialized");

// QUESTION 2
console.log("QUESTION 2");
let firstName = "Silje", lastName = "Angelvik";
console.log(firstName.concat(spaceString, lastName));

let fullName = firstName + spaceString + lastName;
console.log(fullName);

// QUESTION 3
console.log("QUESTION 3");
console.log(typeof "frog");

let myFrog = ": A red-eyed tree frog";
console.log("The type of frog is" + myFrog);

// QUESTION 4
console.log("QUESTION 4");

if (orderHasShipped === true) {
    console.log("The order shipped");
} else {
    console.log("The order did not ship");
}

// QUESTION 5
console.log("QUESTION 5");

let myNumbers = [7, 8, 9, 10, 11, 12, 13]
let len;

for (i; len = myNumbers.length, spaceString = "", i < len; i++) {
    console.log(spaceString += myNumbers[i] + "\n");
}
// variable "myNumbers" holds an array with numeric values
// declaring 3 variables "i", "length", and "text"
// length is the length of the array "myNumbers"
// i < length :  iteration is less than the arrays length ..
