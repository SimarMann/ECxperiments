// break is not required if you use a return statement.

function caseInSwitch(val) {
  var answer = '';
  switch(val) {
  case 1:
    answer += 'alpha';
    break;
  case 2:
    answer += 'beta';
    break;
  case 3:
    answer += 'gamma';
    break;
  case 4:
    answer += 'delta';
    break;
  case 5:
  case 6:
    answer += 'Unknown';
    break;
  default:
    answer += 'NA';
  }
  return answer;
}

// Change this value to test
console.log(caseInSwitch(2));
