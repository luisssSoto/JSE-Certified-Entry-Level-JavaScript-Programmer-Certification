"use strict";

//Question 1 Creating and Initializing
const b = Boolean(false);
console.log(typeof b);
const n = 2;
console.log(typeof n);
const bn = 200_000_000_000_000n;
console.log(typeof bn);
const s = "String";
console.log(typeof s);
const u = undefined;
console.log(typeof u);
const nu = null;
console.log(typeof nu);
const sy = Symbol();
console.log(typeof sy, "\n");

//Question2 Interpolation 
console.log(`${b} [${typeof b}]`);
console.log(`${n} [${typeof n}]\n`);

//Question 3 Casting
let chain = "1234";
console.log(`${typeof chain}`);
chain = Number(chain)
console.log(typeof chain);
chain = BigInt(chain);
console.log(typeof chain);
chain = Boolean(chain);
console.log(chain);
console.log(typeof chain, "\n");

//Question 4 Adding same type data
let string1 = "1" + "1";
console.log(typeof string1);
let boolean1 = true + false;
console.log(typeof boolean1);
let number1 = 1 + 1;
console.log(typeof number1);
let bigInt1 = 1n + 1n;
console.log(typeof bigInt1);
let undefined1 = undefined + undefined;
console.log(typeof undefined1, "\n");

//Question 5 Adding different type data
let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]
console.log();

//Question 6 Get the result 43
const str1 = 42 + Number("1");
console.log(str1);
const str2 = 42 + +"1";
console.log(str2);