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

  // When button clicked is a number and operator is not clicked yet (firstValue)
  if (event.target.classList.contains("number") && clickedOperator === "") {
    firstValue += buttonText;
  }

  // When operator is clicked, update clicked operator (clickedOperator)
  if (event.target.classList.contains("operator")) {
    clickedOperator = event.target.innerText;
    /* When continuing calculation from previous caluclated result (meaning "C" is not clicked)
    secondValue is checked because at the point of clicking operator, 
    it should still be empty if "C" not clicked. We also have to clear secondValue in this case.
    firstValue already takes previous finalValue */
    if (secondValue !== "") {
      firstValue = finalValue;
      secondValue = "";
    }
  }

  // Second value is updated when a number is clicked after operator has been clicked
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
    //removes 0 when new number is clicked after clearing.
    if (event.target.classList.contains("number") && clickedOperator === "") {
      calDisplay.textContent = firstValue;
    }
    calDisplay.textContent += event.target.innerText;
  });
});
