//** Guess the number game */

//Todo: set the correct number wether its random or set
// correct number is 37
// let correctNumber = 37;
let correctNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 7; //user get 7 atteps total
let guesses = []; //aray to store past guesses

//Todo: Ask the user to choose a number between 1-100
let userGuess = Number(prompt("Guess a number between 1 & 100:"));

//Todo: Get the ul element to display guesses
let guessList = document.getElementById('guessList');

//Todo: create a while loop

while (attempts > 0) {
    let userGuess = Number(prompt(`Guess a number between 1 and 100. You have ${attempts} attempts left`))

    guesses.push(userGuess);// add guess to the guesses array

    let li = document.createElement('Li');
    li.textContent = `Attempt ${7 - attempts}: ${userGuess}`; //Show the attempt and number of guesses
    guessList.appendChild(li); //add the <li> to the list on the page

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

