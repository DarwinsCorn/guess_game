'use strict';

// console.log(document.querySelector(".message"));
let secret = Math.trunc(Math.random() * 20) + 1;

const questionBox = document.querySelector(".number");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const body = document.querySelector("body");
const message = document.querySelector(".message");
const scoreBox = document.querySelector(".score");
const highscoreBox = document.querySelector(".highscore");
const guessBox = document.querySelector(".guess");


let score = 20;
let highscore = 0;


check.addEventListener('click', () => {
    const guess = Number(guessBox.value);
    
    if (!guess) {
        message.textContent = "⛔ No value was entered";
    }
    else if (guess === secret) {
        questionBox.textContent = secret
        message.textContent = "🎉 Correct Number!"
        body.style.backgroundColor = "green";
        questionBox.style.width = "30rem";
        if (score > highscore) {
            highscore = score;
            highscoreBox.textContent = highscore;
        };
    }
    else if (guess !== secret && score > 0) {
        message.textContent = guess > secret ? "📈 Guessed too high" : "📉 Guessed too low";
        score--;
        scoreBox.textContent = score;
    }
    
    if (score === 0) {
        message.textContent = "💥 You lost the game;"
    }
});

again.addEventListener('click', () => {
    guessBox.value = "0";
    score = 20;
    scoreBox.textContent = score;
    body.style.backgroundColor = "black";
    questionBox.style.width = "15rem";
    questionBox.textContent = "?";
    message.textContent = "Start guessing...";
    secret = Math.trunc(Math.random() * 20) + 1;
})





