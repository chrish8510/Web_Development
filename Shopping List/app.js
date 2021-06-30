// we are cacheing these variables, so when this script runs, we can use it whenever we need them
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
// remove the last item from the list
const removeItemButton = document.querySelector('button.removeItemButton');
// created below functions. They run only when we use events
function inputLength() {
	return input.value.length;
}
// this is to create a list item
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value)); // createTextNode is to add text
	ul.appendChild(li);
	input.value = "";
}
// add a list item only if there is user input and click the button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
// add a list item only if there is user input and press enter key(keycode:13)
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
// function for removing the last item on the list
function removeLastItemFromList() {
	let list = document.querySelector('ul'); 
	let li = document.querySelector('li:last-child');
	list.removeChild(li);
}
// the code skips above functions and calls the function if only button is clicked
button.addEventListener("click", addListAfterClick);
// the code skips above functions and calls the function if only key is pressed
input.addEventListener("keypress", addListAfterKeypress);
// the code skips above functions and calls the function if only you click the removeItemButton
removeItemButton.addEventListener("click", removeLastItemFromList);