"use strict";
// else if statement

let userNumber = Number(prompt("Enter a number: ", 0));
if (userNumber < 30) {
    alert(`${userNumber} < 30`);
} else if (userNumber < 60) {
    alert(`${userNumber} < 60`);
} else if (userNumber < 90) {
    alert(`${userNumber} < 90`)
} else if (userNumber === 100) {
    alert(`${userNumber} === 100`)
} else {
    alert(`${userNumber} > 100`)
};