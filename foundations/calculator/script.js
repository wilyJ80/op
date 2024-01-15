function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

let a;
let b;
let operator;

function operate(operator, a, b) {
	if (operator === "+") {
		return add(a, b);
	}
	if (operator === "-") {
		return subtract(a, b);
	}
	if (operator === "*") {
		return multiply(a, b);
	}
	if (operator === "/") {
		return divide(a, b);
	}
}

let display = document.querySelector(".display");
let displayValue = 0;
/* const numberBtn = document.querySelectorAll(".number"); */
/* display.textContent = ""; */

/* numberBtn.addEventListener("click", () => {
	displayValue.textContent = "helllo wordl";
}); */

document.querySelectorAll(".number").forEach((button) => {
	button.addEventListener("click", () => {
		display.textContent += button.textContent;
		displayValue += button.textContent;
	});
});
