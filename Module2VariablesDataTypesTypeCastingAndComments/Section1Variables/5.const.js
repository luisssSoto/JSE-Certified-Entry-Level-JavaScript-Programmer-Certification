"use strict";

//Constants need to be declared and initialized at the same time
//1. sintax error
// const withoutChange;
// withoutChange = "it's not allowed to do any changes"

const withoutChange = "it's not allowed to do any changes";
console.log(withoutChange);

//2. type error
//this is not allowed too:
withoutChange = "only one change please";
console.log(withoutChange);
