"use strict";

//Question 1
//declaring variables
let roses;
let lilies;
let tulips;

//initializing variables
roses = 8 * 70;
lilies = 10 * 50;
tulips = 2 * 120;

let total = roses + lilies + tulips;

//displaying the data:
console.log(`Rose - unit price: 8, quantity: 70, value: ${roses}
Lily - unit price: 10, quantity: 10, value: ${lilies}
Tulip - unit price: 2, quantity: 120, value: ${tulips}
Total: ${total} `)

//Question 2

let numberOfRoses = 8;
let numberOfLilies = 10;
let numberOfTulips = 2;

const priceRoses = numberOfRoses * 70;
const priceLilies = numberOfLilies * 50;
const priceTulips = numberOfTulips * 120;

const priceTotal = priceRoses + priceLilies + priceTulips;

console.log(`Rose - unit price: 8, quantity: 70, value: ${priceRoses}
Lily - unit price: 10, quantity: 10, value: ${priceLilies}
Tulip - unit price: 2, quantity: 120, value: ${priceTulips}
Total: ${priceTotal} `)

numberOfRoses -= 20;
numberOfLilies -= 30;

priceRoses = numberOfRoses * 70;
numberOfLilies = numberOfLilies * 50;

console.log(`Rose - unit price: 8, quantity: 70, value: ${priceRoses}
Lily - unit price: 10, quantity: 10, value: ${priceLilies}
Tulip - unit price: 2, quantity: 120, value: ${priceTulips}
Total: ${priceTotal} `)
