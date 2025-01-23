"use strict";
//Other operands
//typeof
const user = "Jane";
console.log(typeof user);
console.log();

//instanceof
let users = [user, 'John'];
console.log(users instanceof Array);
console.log();

//delete
let user3 = {
    name: 'Kevin',
    age: 9
};
console.log(user3.age);
delete user3.age;
console.log(user3.age);
console.log();

//ternary
console.log(true ? 'It is true' : 'It is false');

