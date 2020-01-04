// Original exercise by github.com/mpalmr
// Functions

/**
 * Takes a number and returns double that number
 */
function double(a) {
  // Write a "return" statement below
  return a * 2;
}

console.log("double(4):", double(4)); // 8
console.log("double(7):", double(7)); // 14
console.log("double(2.4):", double(2.4)); // 4.8

console.log("\n===\n");

/**
 * Returns true if number is between 25 and 71
 */
function isBetweenRange(a) {
  // Write a "return" statement below
  if (a >= 25 && a <= 71) {
    return true;
  } else {
    return false;
  }
}

console.log("isBetweenRange(25):", isBetweenRange(25)); // true
console.log("isBetweenRange(24):", isBetweenRange(24)); // false
console.log("isBetweenRange(72):", isBetweenRange(72)); // false
console.log("isBetweenRange(71):", isBetweenRange(71)); // true

/**
 * Returns the area of a rectangle
 */
function getRectangleArea(width, height) {
  // Write a "return" statement below
  return width * height;
}

console.log("getRectangleArea(4, 2):", getRectangleArea(4, 2)); // 8
console.log("getRectangleArea(1, 1):", getRectangleArea(1, 1)); // 1
console.log("getRectangleArea(53, 21):", getRectangleArea(53, 21)); // 1113

console.log("\n===\n");

/**
 * Returns the area of a square *using* the "getRectangleArea" function
 * Make sure you call getRectangleArea() in this function
 */
function getSquareArea(width) {
  // Write a "return" statement below
  return getRectangleArea(width, width);
}

console.log("getSquareArea(3):", getSquareArea(3)); // 9
console.log("getSquareArea(1):", getSquareArea(1)); // 1
console.log("getSquareArea(28.4):", getSquareArea(28.4)); // 806.56

console.log("\n===\n");
