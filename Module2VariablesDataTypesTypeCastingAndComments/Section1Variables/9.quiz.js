"use strict";

//Question 1
//declaring variables
let amountRoses;
let pricePerRose;
let roses;

let amountLilies;
let pricePerLily;
let lilies;

let amountTulips;
let pricePerTulip
let tulips;

//initializing variables
pricePerRose = 8;
amountRoses =  70;
roses = pricePerRose * amountRoses;

pricePerLily = 10;
amountLilies = 50;
lilies = pricePerLily * amountLilies;

pricePerTulip = 2;
amountTulips = 120;
tulips = pricePerTulip * amountTulips;

let total = roses + lilies + tulips;

//displaying the data:
console.log(`Rose - unit price: 8, quantity: 70, value: ${roses}
Lily - unit price: 10, quantity: 10, value: ${lilies}
Tulip - unit price: 2, quantity: 120, value: ${tulips}
Total: ${total} `)

//Question 2

const priceRose = 8;
const priceLily = 10;
const priceTulip = 2;

let amountOfRoses = 70;
let amountOfLilies = 10;
let amountOfTulips = 120;

let totalRoses = priceRose * amountOfRoses;
let totalLilies = priceLily * amountOfLilies;
let totalTulips =  priceTulip * amountOfTulips;

const priceTotal = totalRoses + totalLilies + totalTulips;

console.log(`Rose - unit price: 8, quantity: 70, value: ${totalRoses}
Lily - unit price: 10, quantity: 10, value: ${totalLilies}
Tulip - unit price: 2, quantity: 120, value: ${totalTulips}
Total: ${priceTotal} `)

amountOfRoses -= 20;
amountOfLilies -= 30;

console.log(`Rose - unit price: 8, quantity: 70, value: ${totalRoses}
Lily - unit price: 10, quantity: 10, value: ${totalLilies}
Tulip - unit price: 2, quantity: 120, value: ${totalTulips}
Total: ${priceTotal} `)

//Question 3
let name1 = "Maxwell Wright";
let phone1 = "(0191) 719 6495";
let email1 = "Curabitur.egestas.nunc@nunummyac.co.uk";

let name2 = "Raja Villareal";
let phone2 = "0866 398 2895";
let email2 = "posuere.vulputate@sed.com";

let name3 = "Helen Richards";
let phone3 = "0800 1111";
let email3 = "libero@convallis.edu";

console.log(`${name1}/${phone1}/${email1}
${name2}/${phone2}/${email2}
${name3}/${phone3}/${email3}`);