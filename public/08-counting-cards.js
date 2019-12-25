/* In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative
number of high and low cards remaining in the deck. This is called Card Counting.
Having more high cards remaining in the deck favors the player.
Each card is assigned a value according to the table below.
When the count is positive, the player should bet high.
When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
 0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A' */

/* eslint-disable indent */
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      ++count;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      --count;
  }
  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }
}

cc('A');
cc('J');
cc('K');
cc(10);
cc('Q');
console.log(cc());

// Regex Solution:
function ccRegex(card) {
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || String(card).match(regex)) {
    count--;
  }

  if (count > 0) return count + ' Bet';
  return count + ' Hold';
}
