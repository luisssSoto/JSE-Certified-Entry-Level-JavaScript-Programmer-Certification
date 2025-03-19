"use strict";

// 1.
let userNumber = prompt("Guess the number I'm thinking...");
if (userNumber > 90 && userNumber < 110) {
    alert("Bingo!");
} else {
    alert("Miss.");
};

// 2.
let userNumber2 = prompt("Guess the number I'm thinking...");
let message = (userNumber2 > 90 && userNumber2 < 110) ? "Bingo!" : "Miss.";
alert(message);

// 3.
let firstOperand = Number(prompt("Type the first operand"));
let secondOperand = Number(prompt("Type the second operand"));
let operator = prompt("Type the operation you want to use; + or - or * or /");
let result;
if (Number.isNaN(firstOperand) || Number.isNaN(secondOperand)) {
    alert("Invalid data in first operand or in second operand; only accept numbers");
} else {
    switch (operator) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = firstOperand / secondOperand;
            break;
        default:
            result = "Invalid operator " + operator;
    };
    alert(result);
};