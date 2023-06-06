'use-strict';

// GUESS MY NUMBER GAME 🔢💗
// This game was built using Javascript, CSS & HTML

// Implementing the Game Logic and setting the variables 
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20; 
let highscore = 0;

// Function to set the message with the parameter message 
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input 
    if(!guess){
        displayMessage("No number! 🤨");
        // document.querySelector('.message').textContent = "No number! 🤨"
    
    // When player wins 
    } else if(guess === secretNumber) {
        displayMessage("Congrats, you guessed right! 😍");
        document.querySelector('.number').textContent = secretNumber;
    // We manipulate the background color to lighter pink when player wins ! 
    document.querySelector('body').style.background = "#f3cad4";

    // We manipulate the number screen bigger when player wins!
    document.querySelector('.number').style.width = "30rem";

    // We set the highscore 
    if(score > highscore){
        highscore = score; 
        document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong 
} else if(guess !== secretNumber) {
    if(score > 1){
        // document.querySelector('.message').textContent 
        // = guess > secretNumber ? 'Too high...✨' :  "Too low...🪄";
        displayMessage(guess > secretNumber ? 'Too high...✨' :  "Too low...🪄");
        score--;
        document.querySelector('.score').textContent = score; 
    } else {
        displayMessage("OH NO,You lost the Game! 🤯🧨");
        document.querySelector('.score').textContent = score = 0;
    }
    document.querySelector('.score').textContent = score;
  }
});

// Defining the play again button functionality
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.background = "linear-gradient(to top left, #f3cad4, #df698e)";
    document.querySelector('.number').style.width = "15rem";

})
