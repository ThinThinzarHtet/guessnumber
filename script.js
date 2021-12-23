'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// when click check button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When There is no input
    if (!guess || guess > 20){
        displayMessage('Number should be between 1 and 20! Please enter again!');
        // When player win
    } else if (guess === secretNumber) {
        displayMessage('Correct Number 👍🏽');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '20rem';

        // highscore   
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
        // When guess is too high or too low
    } else if (guess !== secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!'); 
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Game Over ! Press Again to play again');
            document.querySelector('.score').textContent = '0';
        } 
    } 
});

// when click again button
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});