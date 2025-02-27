"use strict";

let conditional = true;
if (conditional) {
    console.log('Executing');
};

// try it in the web console
let userDecision = confirm('make your decision');
if (userDecision) {
    alert('Said yes');
};
