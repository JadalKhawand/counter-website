const startingPoint = 0;
let currentOutput = startingPoint;
const output = document.querySelector(".output");

function updateUI() {
  output.innerHTML = currentOutput;
}

updateUI();

// function add() {
//   currentOutput++;
//   updateUI();
// }

// function sub() {
//   currentOutput--;
//   updateUI();
// }
// function add5() {
//   currentOutput += 5;
//   updateUI();
// }

function addToOutput(amount) {
  currentOutput += amount;
  updateUI();
}

document.querySelector(".add").addEventListener("click", function () {
  addToOutput(1);
});
document.querySelector(".sub").addEventListener("click", function () {
  addToOutput(-1);
});

// Get the HTML element with the id "addInput" (the button)
document.getElementById("addInput").addEventListener("click", function () {
  // When the button is clicked, execute the following function:

  // Get the current value of the input field with the id "inputNumber"
  const inputValue = parseInt(inputNumber.value) || 0;

  // If the input is not a valid number, default to 0 using the logical OR operator (||)

  // Call the addToOutput function with the parsed input value
  addToOutput(inputValue);
});

document.getElementById("resetOutput").addEventListener("click", function () {
  // Reset the output to the starting point
  currentOutput = startingPoint;
  // Update the UI to reflect the reset
  updateUI();
});
