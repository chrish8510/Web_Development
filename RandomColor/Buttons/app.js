// function for the rgb colors
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
// creating variable for button
const buttons = document.querySelectorAll('button');

// action/event for buttons
for (let button of buttons) {
    button.addEventListener('click', colorize);
}
// separate function for repeated actions
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
    // less than 50 is closer to black/dark colors, so button text color needs to be white
    if (makeRandColor < 50) {
        console.log(button.style.color = white);
    }
}

