// constant variable for random numbers between 1 to 10
const randomNumber = Math.floor(Math.random() * 10 + 1)
// below is function for comparing guessing numbers with numbers that users enter
function checkGuess () {
    // using let for variables because guessing numbers are Math.floor random numbers
    let myGuess = guess.value
    // 3 choices for guessing numbers, and alerts for each choice
    if (myGuess === randomNumber) {
        alert("You got it right!");
    } else if (myGuess > randomNumber) {
        alert("Your guess was " + myGuess +". That's too high. Try again!");
    } else if (myGuess < randomNumber) {
        alert("Your guess was " + myGuess +". That's too low. Try again!");
    }
}
// action click to see result of checkGuess function
submitGuess.addEventListener('click', checkGuess)