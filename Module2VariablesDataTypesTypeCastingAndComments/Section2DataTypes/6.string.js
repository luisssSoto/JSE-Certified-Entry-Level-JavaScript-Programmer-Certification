"use strict";
//Strings

let country = "Malawi";
let continent = 'Africa';

console.log(country);
console.log(typeof country)
console.log(continent);
console.log(typeof continent)
console.log();

// working with double and single quotes
let message1 = "The vessel 'Mars' called at the airport.";
let message2 = 'Cyclone "Cilida" to pass close to Mauritius.';
console.log(message1);
console.log(message2);
console.log();

//You can type \ to indicate the next character will scape of the string
let message1a = 'The vessel \'Mars\' called at the port.';
console.log(message1a);
let path = "C:\\Windows";
console.log(path);
console.log()

//Operatios and strings
//*
console.log('Windows' * '3');
console.log('3' * '3');
console.log(typeof ('3' * '3'));

//-
console.log('Windows' - 's');
console.log('10' - '2');

//+ concatenation
console.log('100' + '10');
console.log('W' + 'indows');
console.log()

//String Interpolation
let sentence = `${country} is located in ${continent}`;
console.log(sentence)
console.log()

//methods are a kind a function which belongs to a specific Object, for example
// console is the object and its method could be log, time and endTime, if you want
// to call any method belong to specific object you must to follow the dot rule:
// object.method:
console.time();
console.log('Time has passed: ')
console.timeEnd();
console.log()

//autoboxing happens when you call a method according the data type:
let river = 'Mekong';
let character = river.charAt(2)
console.log(character);
console.log();
