//Some methods of Strings

//length
let sentence = 'java script is so cool';
console.log(sentence.length);
console.log()

//charAt()
let space = sentence.charAt(11);
console.log(space);

//slice(beginning, [optional]end(this doesn't count))
let origin = sentence.slice(0, 4);
console.log(origin);
console.log(sentence.slice(5));
console.log();

//split(separator, [optional] limit)
console.log(sentence.split(' '));
console.log(sentence.split(' ', 2));
console.log('192.0.0.1'.split('.'));

