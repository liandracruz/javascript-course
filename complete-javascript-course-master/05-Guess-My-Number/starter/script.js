'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent;
document.querySelector('.score').textContent;
document.querySelector('.guess').value;
*/

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'No number!'
    }
})