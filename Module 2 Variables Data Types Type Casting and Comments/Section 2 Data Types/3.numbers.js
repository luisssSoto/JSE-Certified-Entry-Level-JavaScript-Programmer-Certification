"use strict";
//Data types: Numbers

const year = 1991;
let delatInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;

console.log(year);
console.log(typeof year);

//binary, hexadecimal and octal is allowed
// and also an exponential way
let a = 10;
let b = 0x10;
let c = 0o10;
let d = 0b10;

console.log(a, '\n', b, '\n', c, '\n', d);

let x = 9e3;
let y = 123e-5;
console.log(x);
console.log(y);

//In addition there are three more values -Infinity Infinity NaN
let a1 = 1/0;
let b1 = -Infinity;

console.log(a1);
console.log(b1);
console.log(typeof a1);
console.log(typeof b1);

let s = "it's definitely not a number";
let n = s * 10;
console.log(n)
console.log(typeof n);