// Selectors
const numberContainer = document.querySelector('.number-box');
const numberParagraph = document.querySelector('.number');
const resultParagraph = document.querySelector('.result');
const userInput = document.querySelector('#user-input');
const sendBtn = document.querySelector('#send-input');

// Listeners
document.addEventListener('DOMContentLoaded', randomizeNumber);
sendBtn.addEventListener('click', sendNumber);

// Functions
function randomizeNumber() {
    let n = Math.trunc(Math.random()*10);
    numberParagraph.innerText = n;
    console.log(n);
}

function sendNumber() {
    let n = userInput.value;
    if (n == numberParagraph.innerText) {
        numberContainer.classList.add('visible');
        resultParagraph.innerText = 'Hai indovinato!';
    } else {
        resultParagraph.innerText = 'Non hai indivinato, riprova';
        setTimeout(randomizeNumber, 5000)
    }
}