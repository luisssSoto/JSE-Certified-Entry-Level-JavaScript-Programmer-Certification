"use strict";

let count = 0;
let isOver = false;
while (!isOver) {
    isOver = !confirm("Do you want to continue the program");
    console.log(count);
    count++;
};
console.log(`The loop was repeated ${count} times`);