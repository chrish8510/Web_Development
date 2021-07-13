// set below variables for body and heads css style
// separate variables aside for clean look
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let body = document.getElementById("gradient");
// color1, color2, color3 values will randomly generate as a string every time user selects each color for the background
function setGradient() {
	body.style.background =
	"linear-gradient(to right, " // following string is from css gradient syntax
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ", "
	+ color3.value
	+ ")";
	// h3 text appear based on background colors user selects(color1, color2, and color3) for gradient
	css.textContent = body.style.background + ";";
}
// event function for 1st gradient color
color1.addEventListener("input", setGradient);
// event function for 2nd gradient color
color2.addEventListener("input", setGradient);
// event function for 3rd gradient color
color3.addEventListener("input", setGradient);