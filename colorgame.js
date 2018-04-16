// Variables
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//Javascript

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	//generate new colors
	colors = generateRandomColors(3);
	//generate new picked color
	pickedColor = pickColor();
	//change display text
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
})

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(6);
	//pick new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	//reset h1 background
	h1.style.backgroundColor = "#232323";
	//change reset button text
	resetButton.textContent = "New Colors";
	//remove text from message display
	messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of picked square
		var clickedColor = this.style.backgroundColor;

		//compare color to picked color
		if (clickedColor === pickedColor) {
			//change message display text
			messageDisplay.textContent = "Correct!";
			//change all colors to correct color
			changeColors(clickedColor);
			//change h1 background to correct color
			h1.style.backgroundColor = clickedColor;
			//change reset button text
			resetButton.textContent = "Play Again?";

		} else {
			//change wrong picked square to background color
			this.style.backgroundColor = "#232323";
			//change message display text
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color) {
	// Loop through all squares
	for(var i = 0; i < squares.length; i++) {
		// change each color to given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// repeat num times
	for (var i = 0; i < num; i++) {
		// get random color and push into arr
		arr.push(randomColor());
	}
	// return array
	return arr;
}

function randomColor() {
	// pic a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pic a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pic a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	// return random color
	return "rgb(" + r + ", " + g + ", " + b + ")";
}