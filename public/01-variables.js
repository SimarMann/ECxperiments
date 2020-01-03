// Original exercise by github.com/mpalmr
// Introduction

/* In computer science, data is anything that is meaningful to the computer.
JavaScript provides seven different data types which are:
undefined, null, boolean, string, symbol, number, and object*/

/**
 * Declare the variables "a" and "b" to be two numbers
 * "a" should be 8
 * "b" should be 3
 * "a" should always be on the left side of an equation
 *
 * 1. Add them together in a variable named "sum"
 * 2. Subtract them in a variable named "difference"
 * 3. Multiply them in a variable named "product"
 * 4. Divide them in a variable named "quotient"
 */

// Define "a" below
let a = 8;

// Define "b" below
let b = 3;

let sum = a + b;
console.log("sum:", sum); // 11

let difference = a - b;
console.log("difference:", difference); // 5

let product = a * b;
console.log("product:", product); // 24

let quotient = a / b;
console.log("quotient:", quotient); // 2.66 (etc)

console.log("\n===\n"); // Don't mind these things

/**
 * Reassign "a" and "b" to numbers of your choice with two decimal values
 * Reassign "sum", "difference", "product", and "quotient"
 *
 * Example: 15.34
 */

// Reassign "a" below
a = 22.5;

// Reassign "b" below
b = 11.5;

// Reassign "sum" below
sum = a + b;
console.log("sum:", sum);

// Reassign "difference" below
difference = a - b;
console.log("difference:", difference);

// Reassign "product" below
product = a * b;
console.log("product:", product);

// Reassign "quotient"
quotient = a / b;
console.log("quotient:", quotient);

// Find the Remainder
/* In mathematics, a number can be checked to be even or odd by checking the remainder
of the division of the number by 2. */

let remainder = 17 % 2; // = 1 (17 is Odd)
let remainderTwo = 48 % 2; //= 0 (48 is Even)
remainder += remainderTwo;
console.log("\n===\n");

/**
 * Combine the two strings together called "firstName" and "lastName" in the variable "finalString"
 * finalString should separate your first name and last name with a comma and a space
 * The two variables you define should be your first and last name
 */

// Define "firstName" below
let firstName = "John";

// Define "lastName" below
let lastName = "Doe";
let finalString = `${firstName}, ${lastName}`;
console.log("finalString:", finalString);

/* \'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed */

console.log("\n===\n");

/**
 * Change the "x" and "y" variable before each console.log() to make each print the boolean true
 */

let x = 0;
let y = 1;

x = 1;

console.log("x === y:", x === y);

x = 2;
console.log("x > y", x > y);

x = -1;
y = -1;
console.log("x === -1 && y === x:", x === -1 && y === x);

x = 1;
y = 24;
console.log("x > 0 && y === 24:", x > 0 && y === 24);

y = 26;
console.log("!(y === 24)", !(y === 24));

x = 13;
console.log("x * 2 === y", x * 2 === y);
