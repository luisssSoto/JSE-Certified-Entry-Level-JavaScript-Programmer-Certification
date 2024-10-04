//Conversion To String

let str = "text";
let strStr = String(str);
console.log(`${typeof str}: ${str}`);
console.log(`${typeof strStr}: ${strStr}`);

let num = 42;
let strNum = String(num);
console.log(`${typeof num}: ${num}`);
console.log(`${typeof strNum}: ${strNum}`);

let boolean = true;
let strBoolean = String(boolean);
console.log(`${typeof boolean}: ${boolean}`);
console.log(`${typeof strBoolean}: ${strBoolean}`);

let bigNum = 123n;
let strBigNum = String(bigNum);
console.log(`${typeof bigNum}: ${bigNum}`);
console.log(`${typeof strBigNum}: ${strBigNum}`);

let un = undefined;
let strUn = String(un);
console.log(`${typeof un}: ${un}`);
console.log(`${typeof strUn}: ${strUn}`);

let n = null;
let strN = String(n);
console.log(`${typeof n}: ${n}`);
console.log(`${typeof strN}: ${strN}`);