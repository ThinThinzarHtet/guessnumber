'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 👍🏽';

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';

// document.querySelector('.guess').value = 13
// console.log(document.querySelector('.guess').value);

// const x = function() {
//     console.log(document.querySelector('.guess').value);
// }

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When There is no input
    if (!guess || guess > 20){
        document.querySelector('.message').textContent = 'Number should be between 1 and 20! Please enter again';
        // When player win
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number 👍🏽';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '20rem';
        // When guess is too high
    } else if (guess > secretNumber) { 
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game Over ! Press Again to play again';
            document.querySelector('.score').textContent = '0';
        } 
        // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game Over ! Press Again to play again';
            document.querySelector('.score').textContent = '0';
        }
    } 
});