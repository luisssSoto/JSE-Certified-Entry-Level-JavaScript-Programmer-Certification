"use strict";

//It's more efficient to work with arrays thant variables:
let character1 = {
    name: "Goku",
    anime: "Dragon Ball"
}

//arrays 
let mainCharacters = [
    {
        name: "Naruto",
        anime: "Naruto"
    },
    {
        name: "Saitama",
        anime: "One Punch Man"
    }
];

//one of the benefits to use an array instead a bunch of variables
// it's because during the execution of the program we can get
// more data in the meantime and save it in the array

//Adding new character
mainCharacters[2] = {
    name: "Taichi Yagami",
    anime: "Digimon"
}

console.log(mainCharacters);