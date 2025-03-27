"use strict";
let price = 100;
let shippingCost;

shippingCost = price > 50 ? 0 : 5;
console.log(price, shippingCost);

// Execute in Web Browser
start = confirm("Are you ready? ");
message = start ? "Let's go" : 'Hold on';
alert(message);