// Setup
var collection = {
  '2548': {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  '2468': {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  '1245': {
    artist: 'Robert Palmer',
    tracks: [],
  },
  '5439': {
    album: 'ABBA Gold',
  },
};
// Keep a copy of the collection for tests
let collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    collection[id][prop] = value; // creates property and gives it a value
  } else if (prop === 'tracks' && collection[id].hasOwnProperty(prop) === false) {
    collection[id][prop] = new Array(value); // used [] with value inside to create array and give it a value.
  } else if (prop === 'tracks' && value !== '') {
    collection[id][prop].push(value); // pushes a new value onto the end of an existing array.
  } else if (value === '') {
    delete collection[id][prop]; // deletes property.
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, 'Artist', 'ABBA');
updateRecords(5439, 'tracks', 'Take a Chance on Me');
updateRecords(2548, 'artist', '');
updateRecords(1245, 'tracks', 'Addicted to Love');
updateRecords(2468, 'tracks', 'Free');
updateRecords(2548, 'tracks', '');
console.log(updateRecords(1245, 'album', 'Riptide'));
