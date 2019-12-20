// iterating through a multi-dimensional array using a nested for loop
var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// -----------------------------------------------------------------------
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

// Modify values below to test your code
console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ]),
); //5040
