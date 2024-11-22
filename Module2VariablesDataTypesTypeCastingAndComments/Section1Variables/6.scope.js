"use strict";
//let and const are globals
//Note: it's not common to use "{}" curly brackets
//but are used in this case only with educational purpose
//All that are between {} is called "program block"
let counter;
console.log(counter);
{
    counter = 1;
    console.log(counter);
}
counter = counter + 1;
console.log(counter);

let counter1;
console.log(counter1);
{
    counter1 = 1;
    {
        console.log(counter1);
    }
}
counter1 = counter1 + 1;
console.log(counter1);

// let and const are globals but if they are declare inside a program block,
// only will be vissible where they were declared and from the program blocks
// nested it
let height = 180;
{
    let weight = 70;
    console.log(height);
    console.log(weight);
}
console.log(height);
//console.log(weight); it'll be an error

let height1 = 200;
{
    let weight = 100;
    {
        let info = "tall";
        console.log(height);
        console.log(weight);
        console.log(info);
    }
    console.log(height);
    console.log(weight);
    // console.log(info); //it'll be an error
}

// var is a quite different that let and const
var height2 = 180;
{
    var weight2 = 70;
    console.log(height2);
    console.log(weight2);
}
console.log(height2);
console.log(weight2);

// but if there is a variable declared into a function will be local:
var globalGreeting = "Good";

function testFunction(){
    var localGreeting = "Morning";
    console.log("function");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("main program:");
console.log(globalGreeting);
// console.log(localGreeting); //it'll be an error