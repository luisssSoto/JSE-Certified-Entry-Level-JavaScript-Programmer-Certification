"use strict";

// 1.
let n = 2 * 3 ** 3 - 1;
console.log(n);
console.log();

// 2. 
let m = 2
console.log(m * m * m);
m **= 3;
console.log(m);
console.log();

//3
let str = "12";
console.log(str);
str = +str
console.log(str);
console.log(typeof str);
console.log();

//4. 
let o = 10;
let p = ++o;
console.log(o);
console.log(p);
console.log();

// 5.
console.log(!(true && false || true));
console.log();

// 6.
console.log(20 || 5);
console.log();

// 7.
console.log(false || "false");
console.log();

// 8.
let nr = "1";
let x = (nr === 1);
let y = (nr == 1);
let z = (nr = 1);
console.log(x);
console.log(y);
console.log(z);
console.log();

// 9. === strict operator no strict operator

// 10.
console.log("abcd" > "Abcd");
console.log();

// 11.
console.log(3 * 4 > 20 - 15);
console.log();

// 12.
// The confirm method allows you to create a dialog box, when the user closes 
// the window it will appear a boolean value depends on the option selected 
// by the user.

// 13.
// The window object represents the window in which the HTML document containing the JavaScript code currently being executed is open.
// You can call window methods, such as window.alert, without including the name window, so calling alert("abc") would be correct.
// The alert, confirm, and prompt methods display information in modal windows that block access to the page until they are closed.

// 14.
// let test = prompt("Hello", "World");
