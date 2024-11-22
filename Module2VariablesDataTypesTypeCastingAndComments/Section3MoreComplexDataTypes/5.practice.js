"use strict";

//Objects
//1.ticket Train Object
let ticket = {
    from: "Guadalajara, Jalisco, Mexico",
    to: "McAllen, Texas, USA",
    price: 500
};
console.log(ticket.from);
console.log(ticket.to);
console.log(ticket.price);

//2. empty object
let person = {};

person.name = "Homero";
person.surName = "Simpson";

console.log(person.name, person.surName);
console.log();

//Arrays
//1. Create a library array which has books as objects
let library = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    
    }
];

console.log(library[1].title);
console.log(library[2].pages, "\n");

//2 add another book
let newBook = {
    title: "JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254 
}
library.push(newBook);
console.log(library.length);
console.log(library, "\n");

//3. create a new array with the two last elements
let newLibrary = library.slice(2)
console.log(newLibrary, "\n");

//4. delete the first book
let loseBook = library.shift();
console.log(loseBook);
console.log(library.length);
library.forEach(element => {
    console.log(`Title of the book: ${element.title}`);    
});
console.log();

//sum all the pages
let totalPages = 0;
library.forEach(element => {
    totalPages += element.pages;
});
console.log(`Total of pages: ${totalPages}`);