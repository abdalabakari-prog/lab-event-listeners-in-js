// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Generate a random color
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}

// Capture Keyboard Input
// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyOutput = document.getElementById('keyOutput');
  if (keyOutput) {
    keyOutput.textContent = `You pressed: ${event.key}`;
  }
}

// Process Text Input
// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const textOutput = document.getElementById('textOutput');
  
  if (textInput && textOutput) {
    textOutput.textContent = textInput.value;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  const changeColorButton = document.getElementById('changeColorButton');
  if (changeColorButton) {
    changeColorButton.addEventListener('click', changeBackgroundColor);
  }
  
  // Attach event listener to reset background color when the button is double-clicked
  const resetColorButton = document.getElementById('resetColorButton');
  if (resetColorButton) {
    resetColorButton.addEventListener('dblclick', resetBackgroundColor);
  }
  
  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress);
  
  // Attach event listener to display user input in real-time as they type
  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
