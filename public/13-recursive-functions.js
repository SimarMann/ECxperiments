// Recursive function for the sum of an array
function sum(arr, n) {
  if (n <= 0) {
    return arr[0];
  } else {
    return arr[n] + sum(arr, n - 1);
  }
}

console.log(sum([2, 3, 4], 1));

console.log('\n===\n');

// Recursive function for pushing a range of numbers to an array.
function rangeOfNumbers(startNum, endNum) {
  if (endNum <= startNum) {
    return [startNum];
  } else {
    let rangeArray = rangeOfNumbers(startNum, endNum - 1);
    rangeArray.push(endNum);
    return rangeArray;
  }
}
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));

// Recursive function for a countdown into an array.
function countdown(myArray, n) {
  if (n <= 0) {
    return [];
  } else {
    const numbers = countdown(myArray, n - 1);
    numbers.unshift(n);
    return numbers;
  }
}
console.log(countdown(Array, 10));

// Alternative countdown function
function countdown(myArray, n) {
  if (n <= 0) {
    return;
  } else {
    myArray.push(n);
    countdown(myArray, n - 1);
  }
  return myArray;
}
console.log(countdown([], 10));
