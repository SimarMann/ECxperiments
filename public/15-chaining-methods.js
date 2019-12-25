// Convert a date formatted as MM/DD/YYYY to YYYYDDMM.
const formatDate = userDate =>
  userDate
    .split("/")
    .reverse()
    .join("");

console.log(formatDate("11/12/2019")); // 20191211

// Convert string of lowercase chars to reversed string of uppercase chars
const reverseCapitalize = str =>
  str
    .toUpperCase()
    .split("")
    .reverse()
    .join("");

console.log(reverseCapitalize("abc")); // CBA

// Retrieve each element in the semantic versioning specification
const retrieveMajor = v => v.split(".")[0];
const retrieveMinor = v => v.split(".")[1];
const retrievePatch = v => v.split(".")[2];

console.log(retrieveMajor("5.12.13")); // 5
console.log(retrieveMinor("5.12.13")); // 12
console.log(retrievePatch("5.12.13")); // 13
