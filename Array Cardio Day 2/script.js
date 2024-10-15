const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  

// 1. some() method
// Check if at least one person is 19 or older
const isAdult = people.some(person => ((new Date().getFullYear()) - person.year >= 19));
console.log(isAdult);

// 2. every() method
// Check if everyone is 19 or older.

const allAdult = people.every(person => ((new Date().getFullYear() - person.year >= 19)));
console.log(allAdult);

// 3. find() method
// Find the comment with the id of 823423.
const comment = comments.find(comment => comment.id === 823423);
console.log(comment)

// 4. findIndex() and splice() method
// Find the index of the comment with an id of 823423, and then delete it.
const index = comments.findIndex(comment => comment.id === 823423);
comments.splice(index, 1);
console.table(comments)

// 5. Alternative to splice() using slice() (non-mutating method)
// You can also use the slice() method to create a new array without mutating the original array:
const newArray = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

console.table(newArray)