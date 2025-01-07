"use strict";
//Unary Operators

//Casting the type of the value to Number

let str = '123';
console.log(typeof str);
console.log(typeof +str);
console.log(typeof -str);

//and in the case of the "-" operand negates the value
console.log(-str);

//but if the string can't cast to a real number...
let nValue = 'noNUmber';
console.log(+nValue, typeof nValue);
