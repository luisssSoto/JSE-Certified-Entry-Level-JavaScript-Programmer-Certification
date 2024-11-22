//Bigint
let big = 1234561789000000000n;
let big2 = 1n;

console.log(big);
console.log(typeof big)

console.log(big2);
//the result of division will be rounded down
console.log(7n / 4n);

// You can't mix the data types in order to do operations
let big3 = 1000 / 5n;
console.log(big3);

//if you try to divide by zero or doing operations
//between strings and numbers will be an error