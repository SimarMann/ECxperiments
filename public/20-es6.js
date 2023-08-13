'use strict';
/* 
(1).
 Let vs. Var:
 With the var keyword you can overwrite variable declarations without an error.
 When using let, a variable with the same name can only be declared once.  
 */
var a = 1;
var a = 2; // Overwrites variable
let b = 1;
let b = 2; // SyntaxError: Identifier 'b' has already been declared

/*
Var vs. Let Scope;
The Var Keyword: declares a variable globally or locally if declared inside a function.
The Let keyword: behaves the same but inside a block, statement, or expression, 
its scope is limited to that block, statement, or expression.
*/

function checkScope() {
  var i = 'function scope';
  console.log('Function scope i is: ', i);
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

/* 
Const: All features of let, but read-only variables that cannot be reassigned 
       Used for variables that won't change
*/

const FAV_PET = 'Cats';
FAV_PET = 'Dogs'; // returns error

function printManyTimes(str) {
  const SENTENCE = str + ' World';
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
printManyTimes('Hello');

/* 
Mutability of a Const Variable; 
Objects (including arrays and functions) assigned to a variable using const are still mutable.
The const declaration only prevents reassignment of the variable identifier.
*/

const s = [5, 7, 2];
function editInPlace() {
  // s = [2, 5, 7]; <- error: variable identifier 's' cannot point to a different array
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Like all arrays the elements in s are mutable
}
editInPlace(); // const s = [2, 5, 7]

/*
Prevent Object Mutation:
Const functions dont prevent mutation of objects
Javascript provides Object.freeze to prevent data mutation
Once the object is frozen, you can no longer add, update, or delete properties from it
*/

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/* 
(2).
Arrow Functions:
When there is no function body, and only a return value, 
arrow function syntax allows you to omit the keyword return 
& the brackets surrounding the code

Anonymous Functions (functions that won't be reused);
*/

// Vanilla
const myFunc = function() {
  const myVar = 'value';
  return myVar;
};

var magic = function() {
  return new Date();
};

// Arrow
const myFunc = () => 'value';

const magic = () => new Date();

/* 
Arrow Functions with Parameters:
*/

// single argument functions, written without parentheses surrounding argument
const doubler = item => item * 2;

// arrow function with multiple arguments
const multiplier = (item, multi) => item * multi;

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

/*
Default parameters for functions:
the default parameter kicks in when the argument is not specified (it is undefined)
*/
const greeting = (name = 'Anonymous') => 'Hello ' + name;

console.log(greeting('John')); // Hello John
console.log(greeting()); // Hello Anonymous

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

/* 
Rest Parameters for Functions:
creates functions that take a variable number of arguments
the arguments are stored in a parameter array which can be accessed inside the function
allows us to apply map(), filter() and reduce() on the parameters array
*/
const howMany = (...args) => 'You have passed ' + args.length + ' arguments.';

console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany('string', null, [1, 2, 3], {})); // You have passed 4 arguments.

const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3)); // 6

/* 
Spread Operator: 
expand arrays and other expressions where multiple parameters or elements are expected 
*/

// Vanilla
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

// ES6
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];
console.log(arr2);

/*
Destructuring Assignment:
makes it possible to assign values from arrays, 
or properties from objects, into distinct variables.
*/

// Vanilla
const user = { name: 'John Doe', age: 34 };
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

// ES6
const { name, age } = user; // name = 'John Doe', age = 34

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES; // today = 77, tommorow = 80

// Destructuring; assign a new variable name when extracting values:

const { name: userName, age: userAge } = user; // userName = 'John Doe', userAge = 34
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES; // highToday = 77, highTomorrow = 80

// Destructuring to Assign Variables from Nested Objects:

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low, high },
} = LOCAL_FORECAST; // assign to variables w/ same name
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST; // assign to variables w/ different name

console.log(lowToday); // 64
console.log(highToday); // 77

/* 
Destructuring to Assign Variables from Arrays:
Spread Operator vs Destructuring Assignment;
spread operator unpacks all contents of an array into a comma-separated list
vs
destructuring assignment lets you pick or choose which elements you want to assign to variables 
*/

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [a, b, , , c] = [1, 2, 3, 4, 5, 6]; // access value at any index using commas
console.log(a, b, c); // 1, 2, 5

let [a, b, [c, [d]]] = [1, 2, 3, 4, 5, 6]; // access nested elements

/* Destructuring Assignment with the Rest Parameter to Reassign Array Elements:
  Rest element only works correctly as the last variable in the list */

// Example 1
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

// Example 2
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

/* Destructuring Assignment to Pass an Object as a Function's Parameters: */

// Without Destructuring
const profileUpdate = profileData => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
};

const half = stats => (stats.max + stats.min) / 2.0;

// With
const profileUpdate = ({ name, age, nationality, location }) => {
  // do something with these fields
};

const half = ({ max, min }) => (max + min) / 2.0;

/* 
(3).
Template Literal:
 Create multi-line strings without \n
 Use placeholders (variables) to create strings
 Uses backticks (`), not quotes (' or ") to wrap string
 Don't have to use concatenation with the + operator
 To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }
 Can include expressions e.g ${a + b}
*/

// Example One:
const person = {
  name: 'Zodiac Hasbro',
  age: 56,
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

// Example Two:
const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['id-blacklist', 'no-dup-keys'],
};
function makeList(arr) {
  'use strict';
  // change code below this line
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line
  return resultDisplayArray;
}

/*
   makeList(result.failure) should return:
  [ `<li class="text-warning">no-var</li>`,
    `<li class="text-warning">var-on-top</li>`,
    `<li class="text-warning">linebreak</li>` ]
 */
const resultDisplayArray = makeList(result.failure);

/* 
Object Literal Declarations Using Object Property Shorthand:
eliminates the redundancy of having to write key : value
*/

// Without
const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});

const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
console.log(createPerson('Zodiac Hasbro', 56, 'male')); // returns a proper object

// With
const getMousePosition = (x, y) => ({ x, y });

const createPerson = (name, age, gender) => {
  return { name, age, gender };
};
console.log(createPerson('Zodiac Hasbro', 56, 'male')); // returns a proper object

/* 
Declarative Functions Shorthand:
eliminates the function keyword and colon altogether when defining functions in objects
*/

// ES5
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

// ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

/* 
(4).
Class syntax:
a new syntax to create objects, using the class keyword
UpperCamelCase should be used for names by convention 
*/

// ES5
var Vegetable = function(name) {
  this.name = name;
};
var carrot = new Vegetable('carrot');
console.log(carrot.name);

// ES6
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

/*
Getters and Setters:
Getter functions return (get) the value of an object's private variable
Setter functions are meant to modify (set) the value of an object's private variable
They hide the object by abstracting implementation details from the user
Convention to precede the name of a private variable with an underscore (_)
*/

class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }

  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

/* 
(5).
Modules:
Share code among JavaScript files
Export parts of a file 
Import parts of a file
*/

// ES5: each script loaded one by one
<html>
<head>
</head>
<body>
  
  <!--HTML content goes here-->
  
  <script src="js/jquery.js"></script>
  <script src="js/script2.js"></script>
  <script src="js/script3.js"></script>
  <script src="js/script4.js"></script>
</body>
</html>


// ES6: Module Script loaded in one file 
<html>
  <body>
  <!--HTML content goes here-->
    <script type="module" src="index.js"></script>
  </body>
</html>

/*
Export:
 Export component into another file and use it without having to rewrite the code
 Share components across several javascript files
*/

// Export before declaration

export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase();
}

// Export apart from declarations 

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString };

/*
Export Default:
Single default export per module
Default export can be a function, a class, an object or anything else
Use this syntax if only one value is being exported from a file
Creates a fallback value for a file or module
You cannot use export default with var, let, or const
*/

// anonymous function
export default function(x, y) {
  return x * y;
}

// named function
export default function multiply(x, y) {
  return x * y;
}

/*
Import:
 Import component into another file and use it without having to rewrite the code
 Share components across several javascript files
*/

// Import specific exports
import { uppercaseString, lowercaseString } from './string_functions.js';

// Import entire module
import * as myArithmetic from './math_functions.js';

/* Import a Default Export:
The imported value is not surrounded by curly braces ({})
Combine the default syntax with others, default import must be declared first
*/

import multiply from "./math_functions.js";

// Combine default import with specific imports
import myDefault, { uppercaseString , lowercaseString } from '/modules/my-module.js';

/*
Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation, 
and its resulting value.
Three states;
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.
Promise is a constructor function, so you need to use the new keyword to create one
It takes a function, as its argument, with two parameters - resolve and reject
*/ 

const makeServerRequest = new Promise((resolve, reject) => {

});

/*
Handle a Fulfilled Promise with then method;
After a server request, the then method allows you to do something with the response
*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    makeServerRequest.then(result => console.log(result)); // logs result if successful
  } else {  
    reject("Data not received");
  }
});

/*
Handle a Rejected Promise with catch;
catch is the method used when your promise has been rejected. 
It is executed immediately after a promise's reject method is called. 
*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    makeServerRequest.catch(error => {
    console.log(error);
    });
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

/* 
(6).
Map Object:
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.
*/
const romans = new Map([
 [1000, "M"],
 [900, "CM"],
 [500, "D"], 
 [400, "CD"],
 [100, "C"],
 [90, "XC"],
 [50, "L"],
 [40, "XL"],
 [10, "X"],
 [9, "IX"],
 [5, "V"],
 [4, "IV"],
 [1, "I"]
]);


