// Basic use of parseInt
function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56"));

// Converting hexadecimal to decimal
function convertToInteger(str, radix) {
  return parseInt(str, radix);
}

console.log(convertToInteger("0xF", 16));

// Converting binary to decimal
function binaryToDecimal(binary) {
  return parseInt(binary.join(""), 2);
}
console.log(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]));
console.log(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]));
