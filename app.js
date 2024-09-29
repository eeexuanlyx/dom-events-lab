/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");

const calculator = document.querySelector("#calculator");

const calDisplay = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/

let firstValue = "";
let secondValue = "";
let clickedOperator = "";
let displayValue = "0";
let finalValue = "0";

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener("click", (event) => {
  let buttonText = event.target.innerText;
  if (event.target.classList.contains("number") && clickedOperator === "") {
    firstValue += buttonText;
  }
  if (event.target.classList.contains("operator")) {
    clickedOperator = event.target.innerText;
    console.log(clickedOperator);
  }
  console.log(clickedOperator);
  if (event.target.classList.contains("number") && clickedOperator !== "") {
    secondValue += buttonText;
  } else if (buttonText === "C") {
    firstValue = "";
    secondValue = "";
    clickedOperator = "";
    calDisplay.textContent = "0";
  } else if (buttonText === "=") {
    finalValue = basicCalculator(
      parseFloat(firstValue),
      parseFloat(secondValue),
      clickedOperator
    );
    calDisplay.textContent = `${finalValue}`;
  }
});

const basicCalculator = function (x, y, z) {
  switch (z) {
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "*":
      return x * y;
      break;
    case "/":
      return x / y;
      break;
    default:
      return "invalid";
  }
};

/*-------------------------------- Functions --------------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    calDisplay.textContent += event.target.innerText;
  });
});
