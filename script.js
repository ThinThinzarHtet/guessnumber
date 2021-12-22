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

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if (!guess){
        document.querySelector('.message').textContent = 'No Number! Please enter again;'
    }

    // if (guess === 0){
    //     document.querySelector('.message').textContent = 'No Number! Please enter again;'
    // }
});