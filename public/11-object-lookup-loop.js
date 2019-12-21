// Iterate through an object using a for loop
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
    } else if (name === contacts[i].firstName && !contacts[i].hasOwnProperty(prop)) {
      return 'No such property';
    }
  }
  return 'No such contact';
}

// Change these values to test your function
console.log(lookUpProfile('Kristian', 'lastName')); // 'Vos'
console.log(lookUpProfile('Sherlock', 'likes')); // ['Intriguing Cases', 'Violin']
console.log(lookUpProfile('Bob', 'number')); // 'No such contact'
console.log(lookUpProfile('Akira', 'address')); // 'No such property'
