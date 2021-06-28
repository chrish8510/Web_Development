let button = document.createElement("button");
button.innerHTML = "Please Donate";

let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function() {
    alert("Thank You For Your Help!");
});