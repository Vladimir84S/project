'use strict';

// const bigint = 123162656562321654645954954946161261426542n;

const sameBigint = BigInt(123162656562321654645954954946161261426542);

console.log(2n === 2);

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);