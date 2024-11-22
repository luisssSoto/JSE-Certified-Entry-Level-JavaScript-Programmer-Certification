"use strict";
//BigInt

console.log(BigInt(11));
console.log(BigInt(0x11));
console.log(BigInt(11e2))

console.log(BigInt(true));
console.log(BigInt(false));

console.log(BigInt("11"));
console.log(BigInt("0x11"));

try {
    console.log(BigInt(null));
} catch (error) {
    console.log("error");
}

try {
    console.log(BigInt(undefined));
} catch (error) {
    console.log("error");
}

try {
    console.log(BigInt(Nan));
} catch (error) {
    console.log(error)
}