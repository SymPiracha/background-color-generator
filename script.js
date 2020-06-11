// import { without } from "lodash";
// console.log(without);

var css = document.querySelector("h5");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); 
var button = document.getElementById("random");
 
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
button.addEventListener("click", setRandomGradient);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = "Gradient: " + color1.value + " to " + color2.value;
}
function setRandomGradient(){
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	body.style.background = 
	"linear-gradient(to right, " 
	+ "#" + randomColor1 
	+ ", " 
	+ "#" + randomColor2 
	+ ")";
	css.textContent = "Gradient: " + color1.value + " to " + color2.value;
}

