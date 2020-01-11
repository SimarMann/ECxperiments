/* 
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
  "use strict";
  var i = "function scope";
  console.log("Function scope i is: ", i);
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
