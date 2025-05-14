"use strict";

// Loops and Arrays
let names = [];
let isOver = false;
while (isOver === false) {
    let name = prompt("Enter the name or press cancel if you want to exit the program ")
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    };
};
for (let i = 0; i < names.length; i++) {
    console.log(`Name ${i}: ${names[i]}`);
};

// Access the data in normal order
let numbers = [10, 20, 40, 80];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
};

// Access in reverse order
for (let i = numbers.length - 1; i > -1; i--) {
    console.log(numbers[i]);
};

// Access in an arbitrary order
for (let i = 0; i < numbers.length - 1; i+= 2) {
    console.log(numbers[i]);
};