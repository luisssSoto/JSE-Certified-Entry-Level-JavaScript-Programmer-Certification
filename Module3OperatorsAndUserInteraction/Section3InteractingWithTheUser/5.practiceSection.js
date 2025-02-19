"use strict";

/**
 Exercise: Using everything you’ve learned up until this point, write a script that 
 asks a user about the width, height, and length of a box, then calculate and 
 return to the user the volume of this box.
 */

 let isTrue = confirm('Do you want to know the area of any box');
 if (isTrue) {
    let width = prompt('Type the width: ');
    let height = prompt('Type the height: ');
    let len = prompt('Type the length: ');
    let result = width * height * len;
    alert(`The area is ${result}`);
 } else {
    alert('Ok see you soon');
 };
 let isReviewed = confirm('Would you like to left us your review?');
 if (isReviewed) {
    let userReview = prompt('Tell us what were your comments.. ');
    console.log(userReview);
    alert('Thank you for your time');
 } else {
    alert('Ok see you later');
 };