"use strict";

// Execute in Web Browser
let gate = prompt("Choose a gate; a, b, or c: ");
let win = false;
switch (gate) {
    case "a":
        alert("Gate a: empty");
        break;
    case "b":
        alert("Gate b: main prize");
        win = true;
        break;
    case "c":
        alert("Gate c: empty");
        break;
    default:
        alert("No valid gate: " + String(gate));
}
if (win === true) {
    alert("You win!");
};
