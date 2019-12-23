/* Write a program that prints the numbers from 1 to 100. 
for multiples of three print "Fizz" instead of the number, 
for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz". */

function FizzBuzz(num) {
  return num % 3 === 0 && num % 5 === 0
    ? "FizzBuzz"
    : num % 3 === 0
    ? "Fizz"
    : num % 5 === 0
    ? "Buzz"
    : `${num}`;
}

console.log("\n================\n");

function FizzBuzzTwo(num) {
  let result = "";
  if (num % 3 == 0) result += "Fizz";
  if (num % 5 == 0) result += "Buzz";
  return result || num.toString();
}

console.log("\n================\n");

function FizzBuzzThree(num) {
  return (num % 3 ? "" : "Fizz") + (num % 5 ? "" : "Buzz") || `${num}`;
}

console.log(FizzBuzz(3));
