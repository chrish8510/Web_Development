// below const are to link from html file for button and h1
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    // below line is to match h1 to random rgb numbers instead of welcome.
    h1.innerText = newColor;

})
// created a separate function for rgb random colors.
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // below return is to have random numbers printed out separately.
    return `rgb(${r}, ${g}, ${b})`

}

