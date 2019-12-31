/* Each toy car needs 4 wheels, 1 car body, and 2 figures of people to be placed inside.
Given the total number of wheels, car bodies and figures available,
How many complete toy cars can you make? */

// While loop solution
function cars(wheels, bodies, figures) {
  var i = 0;
  while (wheels > 3 && bodies > 0 && figures > 1) {
    wheels -= 4;
    bodies -= 1;
    figures -= 2;
    i++;
  }
  return i;
}

// Solution using Math.floor & Math.min
function carsTwo(wheels, bodies, figures) {
  return Math.min(Math.floor(wheels / 4), bodies, Math.floor(figures / 2));
}

console.log(cars(37, 15, 20));
console.log(cars(72, 7, 21));
console.log(cars(9, 44, 34));
console.log(cars(50, 38, 7));
console.log(cars(68, 9, 44));
console.log(cars(3, 29, 54));
console.log(cars(28, 34, 80));
console.log(cars(88, 50, 83));
console.log(cars(66, 18, 21));
console.log(cars(97, 6, 10));
console.log(cars(921, 310, 350));
console.log(cars(736, 430, 851));
console.log(cars(405, 379, 740));
console.log(cars(593, 78, 389));
console.log(cars(875, 370, 675));
console.log(cars(863, 274, 203));
console.log(cars(959, 331, 537));
console.log(cars(416, 340, 551));
console.log(cars(692, 348, 543));
console.log(cars(527, 412, 951));
