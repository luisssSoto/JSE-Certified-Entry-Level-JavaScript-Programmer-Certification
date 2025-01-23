"use strict";
//Logical Operators and Non-Boolean Values

//! Negation
let number = 0;
let year = 1994;
let user = 'John Doe';
let empty = "";
console.log(!number);
console.log(!year);
console.log(!user);
console.log(!empty);
console.log();

//!! Often, double negation is used to convert any type to Boolean.
console.log(`previous value: ${!number}, current value: ${!!number}`);
console.log(`previous value: ${!user}, current value: ${!!user}`);
console.log();

//&& Conjunction Operand
//The AND operator will return the first operand if it evaluates to false, 
// and the second operand otherwise.
console.log(true && 1994);
console.log(false && 1994);
console.log(2 && 5);
console.log(0 && 5);
console.log('John' && 'Doe');
console.log("" && 'John'); //empty string
console.log();

//|| Disjunction Operand
//The OR operator will return its first operand if it evaluates to true, 
// and the second operand otherwise.
console.log(true || 1994);
console.log(false || 1994);
console.log(2 || 5);
console.log(0 || 5);
console.log('John' || 'Doe');
console.log("" || 'John'); //empty string
console.log();

/*Both operators also use short-circuit evaluation.
So, if the first operand of AND is false, it will be returned, and no other 
check will be performed.
Conversely, if the first operand of OR is true*/ 
let x = 0;
let y = 0;
console.log(x++ && y++); 
console.log(x); 
console.log(y);
