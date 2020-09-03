var bgColor = document.getElementById("bg-color");
var button = document.getElementById("button");

function changeBackground() {
    document.body.style.background = bgColor.value;
}

button.addEventListener("click", changeBackground);