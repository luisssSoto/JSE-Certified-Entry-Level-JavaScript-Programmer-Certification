"use strict";
//Precedence and Associativity

/*
 The JavaScript interpreter uses two operator properties to determine the sequence 
 of operations: precedence and associativity. Precedence can be treated as a priority, 
 with some operators having the same precedence (e.g. addition and subtraction). 
 Associativity allows you to specify the order of execution if there are several 
 operators with the same priorities next to each other.
 */

//example
let user = {
    firstName: 'Jane',
    lastName: 'Doe'
};

console.log(delete user.lastName == 'Doe');

//try to use parentheses when you have doubts so that you can
// assurance what the result will be and increase the readability
user.lastName = 'Doe';
console.log(delete (user.lastName === 'Doe'));
console.log(user.lastName);
 
 