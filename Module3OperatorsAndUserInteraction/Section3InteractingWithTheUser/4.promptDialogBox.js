"use strict";
//Prompt Dialog Box
//If the button pressed was ok.... the content inside the box will return
let name = prompt('What is your name: ', 'Jane Doe');
name = name ? name : 'anonymous'
let age = window.prompt('How old are you: ', 30);
age = age ? age : 'User prefered not say it';
alert(`User: ${name}\nAge: ${age}`);

//If the button pressed was cancel.... it will return null
let result = prompt('Are you John Doe', '???');
console.log(result);