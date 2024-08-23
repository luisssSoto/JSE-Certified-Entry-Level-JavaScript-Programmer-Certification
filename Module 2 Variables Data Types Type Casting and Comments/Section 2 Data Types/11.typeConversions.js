//Type conversions

"use strict";
const string = String();
const number = Number();
const boolean = Boolean();

console.log(string);
console.log(number);
console.log(boolean);

try {
    const bigInt = BigInt();
} catch (error) {
    console.log(error)
}

const bigInt = BigInt(42)
console.log(bigInt)
