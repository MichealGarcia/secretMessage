// Project
// Secret Message

// Starting code

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);

// remove the last string of secretMessage

secretMessage.pop();

console.log(secretMessage.length);

// Add the words 'to' and 'program' to the end of the array

secretMessage.push('to', 'Program');

console.log(secretMessage.length);

// change word 'easily' with 'right'

secretMessage.splice(secretMessage.indexOf('easily'), 1, 'right');

console.log(secretMessage);

// remove the first string of the array
console.log(`First item in array is ${secretMessage[0]}`);

secretMessage.shift();

console.log(`First item in array is ${secretMessage[0]}`);

// add 'Programming to the beginning of the array

secretMessage.unshift('Programming');
console.log(secretMessage);

// remove 'get' 'get' 'get' 'get' 'get' and replace them with know

secretMessage.splice(secretMessage.indexOf('get'), 5, 'know')
console.log(secretMessage)

// Make the array into one sentence using join

console.log(secretMessage.join(" "))
