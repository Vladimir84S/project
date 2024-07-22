'use strict';

const box = document.getElementById('box');

console.log(box);

// const btns = document.getElementsByTagName('button')[1];
const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles[0]);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);