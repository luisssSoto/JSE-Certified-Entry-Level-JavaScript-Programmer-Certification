"use strict";
//Arrays
let days = ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat'];

//Getting by indexes
console.log(days[0]);

//Setting
days[0] = 'Sunday'
console.log(days[0]);

//Empty arrays
let zoo = [];
console.log(zoo[0]);

//You can leave any index without any value:
zoo[0] = 'monkeys'
zoo[2] = 'tigers'
console.log(zoo);

//Array whatever type you want...
var dataTypes = ['string', 1, 2n, true, 0.2, undefined, null];
dataTypes.forEach(element => {
    console.log(element + ": " + typeof element);
}); 

//even arrays
let similarSeries = [['Naruto', 'Sasuke', 'Sakura'], ['Yuji', 'Megumi', 'Nobara']];
let jejeWoman = [];
jejeWoman[0] = similarSeries[0][2];
jejeWoman[1] = similarSeries[1][2];
console.log(jejeWoman);
console.log(`It is better: ${similarSeries[0]}`);