// import { without } from "lodash";
// console.log(without);

var css = document.querySelector("h5");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); 
 
 color1.addEventListener("input",setGradient);
 color2.addEventListener("input",setGradient);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = "Gradient: " + color1.value + " to " + color2.value;
}

