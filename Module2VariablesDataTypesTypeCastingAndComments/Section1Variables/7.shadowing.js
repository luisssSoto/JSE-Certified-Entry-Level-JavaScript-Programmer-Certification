"use strict";

//shadowing is to see any global variable instead
//of a global variable with the same name
let counter = 100;
console.log(counter);
{
    counter = 200;
    console.log(counter);
}
console.log(counter);

//shadowing let
let counter1 = 100;
console.log(counter1);
{
    let counter1 = 200;
    console.log(counter1);
}
console.log(counter1);

//shadowing var
var counter2 = 100;

function testFunction(){
    var counter2 = 200;
    console.log(counter2);
}

console.log(counter2);
testFunction();
console.log(counter2);