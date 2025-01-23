"use strict";
//Logical Operators

//Logical NOT (!) Negation first priority
console.log(!true); 
console.log(!false);

//Logical AND (&&) Conjunction second priority
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//Logical OR (||) Disjunction third priority
console.log(true || true);
console.log(true || false); 
console.log(false || true);
console.log(false || false);


//Watch out the higher precedence of the logical operators
console.log(true && false || true);
console.log(true || false && true);
console.log(true && (false || true));


