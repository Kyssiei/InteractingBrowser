//** Guess the number game */

//Todo: set the correct number wether its random or set
// correct number is 37
let correctNumber = 37;
// let correctNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 7

//Todo: Ask the user to choose a number between 1-100
let userGuess = Number(prompt("Guess a number between 1 & 100:"));

//Todo: create a while loop

while (attempts > 0) {
    let userGuess = Number(prompt(`Guess a number between 1 and 100. You have ${attempts} attempts left`))

    if (userGuess === correctNumber) {
        alert("Congradulations you guessed the number! ");
        break; // exit the loop if correct, they won the game 
    } else if (userGuess > correctNumber){
        alert("Too high, guess again!")
    } else {
        alert("Too low, try again!");
    }
    attempts--;

    if(attempts === 0) {
        alert(`Game over! The correct number was ${correctNumber}.`)
    }
}

