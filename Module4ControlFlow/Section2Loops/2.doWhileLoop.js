"use strict";

let count = 0;
let isOver; 

do {
    isOver = !confirm(`[${count++}] Continue the loop?`);
} while (!isOver);

// At least once will be executed:

let isContinuing = false;

do {
    console.log('At the least once');
} while (isContinuing);
