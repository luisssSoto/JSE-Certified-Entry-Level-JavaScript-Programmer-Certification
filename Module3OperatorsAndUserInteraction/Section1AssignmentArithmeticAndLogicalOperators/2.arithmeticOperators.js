"use strict";
//Arithmetic Operators

/*All the operators try to convert the operands into a number
except if the operator is a "+" and one of the operands is
a String*/
console.log("3" * 2);
console.log(true * 2);
console.log(2 + "2" + '\n'); //firstly exist an implicit conversion

//It's a good practice write down parentheses instead to trust only 
// in the precedence of the operators
console.log(3 + 2 * 2 - 2);
console.log(3 + (2 * 2) - 2);
console.log();

//Basic Binary Operators
let x = 5;
let y = 2;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
