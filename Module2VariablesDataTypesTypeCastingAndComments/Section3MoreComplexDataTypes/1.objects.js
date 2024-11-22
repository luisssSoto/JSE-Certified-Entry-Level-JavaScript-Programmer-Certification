"use strict";
// Tradional way (more complicated)
let employee1Name = 'Bob';
let employee1LastName = 'Squarepants';
let employee1Salary = 5;

//Object
let employee1 = {
    name: "Bob",
    lastName: "SquarePants",
    salary: 5
};

let employee2 = {
    name: "Squidward",
    lastName: "Quincy Tentacles",
    salary: 10
};

//dot notation
//Getting
console.log(employee1.name);
console.log(employee2.lastName);

//Setting
employee1.salary = 15;
console.log(employee1.salary);

//Creating as part of setting
employee1.address = 'pineapple home is 124 Conch St., Bikini Bottom';
console.log(employee1.address);

//Delete
delete employee1.address;
console.log(employee1.address);
