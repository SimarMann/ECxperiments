// Remove all null elements
function removeNull(arr) {
  return arr.filter(element => element != null);
}

console.log(removeNull(['a', null, 'b', null]), ['a', 'b']);
console.log(removeNull([null, null, null, null, null]), []);
console.log(removeNull([7, 8, null, 9]), [7, 8, 9]);

// Remove any element thats a multiple of 13
function unlucky13(nums) {
  return nums.filter(num => num % 13);
}

console.log(unlucky13([390, 438, 1014, 1067, 1091]), [438, 1067, 1091]);
console.log(unlucky13([494, 1041, 1158, 1188, 1298]), [1041, 1158, 1188, 1298]);
console.log(unlucky13([43, 117, 169, 702, 1048]), [43, 1048]);
