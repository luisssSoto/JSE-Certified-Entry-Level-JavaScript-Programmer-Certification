"use strict";
//Comparison Operators
/**Js is going to try to convert any type to number when we talk about 
 * equality operator (==) but in the case of Strings and strict equality
 * operator (===) there is an exception
*/

//Strict equality operator
console.log('1' === 1);
console.log(1 === 1);
console.log('1' === '1');
console.log('John' === 'Jane');
console.log();

//Equality operator
/**
 * Note that if any of the operands has a NaN value 
 * (or has been converted to NaN, e.g. with undefined), 
 * the equality operator will return false.
 */
console.log('1' == 1);
console.log(1 == 1);
console.log('1' == '1');
console.log('John' == 'Jane');
console.log(undefined == false);
console.log(NaN == NaN);
console.log();

//Nonidentity operator
console.log('1' !== 1);
console.log(1 !== 1);
console.log('1' !== '1');
console.log('John' !== 'Jane');
console.log(undefined !== false);    
console.log();

//Inequality operator
console.log('1' != 1);
console.log(1 != 1);
console.log('1' != '1');
console.log('John' != 'Jane');
console.log(undefined != false);
console.log(NaN != NaN);
console.log();

//Relational operators
console.log(1 < 2);
console.log('1' < 2);
console.log('1' > '2');
console.log('1' > '10');
console.log('1' < 5);
console.log(10 >= '10');
console.log(10 <= '11');
console.log();

//Relational operators strings
//Unicode values: https://unicode-table.com/en/
console.log('Jane' < 'John');
console.log('ab' > 'AB');
console.log('ab' > 'aa');
console.log('ab2' > 'ab1');
console.log('AB' > 'AB2');
console.log('AB' >= 'AB1');