/* Math formulas in code */

// Two different formulas for finding the sum of a set of consecutive numbers.
const gaussFormula = n => (n / 2) * (1 + n);
console.log(gaussFormula(100)); // 5050

const triangluarNumberSequence = n => (n * (n + 1)) / 2;
console.log(triangluarNumberSequence(100)); //5050

// Least Common Multiple for a range of sequential numbers from an unordered array of two numbers.
const leastCommonMultiple = arr => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  const gcd = (a, b) => a ? gcd(b % a, a) : b;
  const lcm = (a, b) => a * b / gcd(a, b);
  return Array.from({length: max - min + 1}, (e, i) => i + min).reduce(lcm);
}
console.log(leastCommonMultiple([23, 18]));
