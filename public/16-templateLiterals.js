/* A function that takes a Present Value of Cash pv,
an Investment Rate ir, the Number of Years years to be Invested
and returns the Net Present Value. */

function netPresentValue(pv, ir, years) {
  for (var i = 0; i < 3; i++) {
    if (Math.sign(arguments[i]) != 1) {
      return false;
    }
  }
  return `$${Math.round((pv * (1 - (1 + ir) ** -years)) / ir)}`;
}

console.log('\n================\n');
// Alternative solution
const netPresentValueTwo = (pv, ir, y) => {
  return [pv, ir, y].every(arg => Math.sign(arg) === 1)
    ? `$${Math.round(pv * ((1 - (1 + ir) ** -y) / ir))}`
    : false;
};

console.log(netPresentValue(100, 0.1, 1)); // '$91'
console.log(netPresentValue(100, -0.1, 1)); // false
console.log(netPresentValueTwo(10000, 0.05, 20)); // '$124622'
console.log(netPresentValueTwo(250, 0.01, -1)); // false
