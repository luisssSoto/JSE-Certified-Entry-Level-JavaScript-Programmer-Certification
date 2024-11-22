"use strict";

let xMan = ["Wolverine", "Ciclops", "Iceman"];

//typeof is specific only with primitive types but not with other types
//in js, everything except primitives is an object. 
console.log(typeof xMan, "\n");

//instanceOf helps us to figure out what kind of data is; actually what type of class belongs
console.log(xMan instanceof Array, "\n");

//length
console.log(xMan.length);
console.log(xMan[0], "\n");

//indexOf
console.log(xMan.indexOf("Ciclops"));
console.log(xMan.indexOf('Storm'));
xMan[3] = "Iceman";
console.log(xMan.indexOf("Iceman"), "\n");

//push
xMan.push("Jean Grey");
console.log(xMan);
console.log();

//unshift
xMan.unshift("Storm");
console.log(xMan, "\n");

//pop
let fenix = xMan.pop();
console.log(`${fenix} The Fenix`);
console.log(xMan, "\n");

//shift
let leader = xMan.shift();
console.log(`The leader of XMan is ${leader}`);
console.log(xMan, "\n");

//reverse
xMan.reverse();
console.log(xMan, "\n");

//slice
let team1 = xMan.slice(1);
console.log(team1);
let team2 = xMan.slice(1, 3);
console.log(team2);
let team3 = xMan.slice(0, -3);
console.log(team3);
let team4 = xMan.slice(-1);
console.log(team4);
console.log(xMan);
console.log();

//delete the repeat one
xMan.shift()
console.log(xMan, "\n");

//concat
let theOthers = ["Beast", "Nigthcrawler", "Rogue", "Storm", "Fenix"];
let completeTeam = xMan.concat(theOthers);
console.log(xMan);
console.log(theOthers);
console.log(completeTeam);