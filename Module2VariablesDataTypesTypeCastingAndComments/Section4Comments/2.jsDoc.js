"use strict";
//Comment only that it is necessary

//JsDoc https://jsdoc.app/about-getting-started 


/**
 * Represents a videogame
 * @constructor
 * @param {string} name 
 * @param {string} company 
 */
function VideoGame(name, company) {
    this.name = name,
    this.company = company;
};

let xboxOne = new VideoGame('Xbox One', 'Microsoft');
console.log(xboxOne);