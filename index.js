// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Generate a random color
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  
  // Check if document and body exist (for testing environment)
  if (typeof document !== 'undefined' && document.body) {
    document.body.style.backgroundColor = randomColor;
  }
}

// Function to reset the background color when the button is double-clicked
function resetBackgroundColor() {
  // Check if document and body exist (for testing environment)
  if (typeof document !== 'undefined' && document.body) {
    document.body.style.backgroundColor = '';
  }
}

// Capture Keyboard Input
// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Check if document exists (for testing environment)
  if (typeof document !== 'undefined') {
    const keyPressDisplay = document.getElementById('keyPressDisplay');
    if (keyPressDisplay) {
      keyPressDisplay.textContent = `Key pressed: ${event.key}`;
    }
  }
}

// Process Text Input
// Function to display user input in real-time
function displayUserInput() {
  // Check if document exists (for testing environment)
  if (typeof document !== 'undefined') {
    const textInput = document.getElementById('textInput');
    const textInputDisplay = document.getElementById('textInputDisplay');
    
    if (textInput && textInputDisplay) {
      textInputDisplay.textContent = `You typed: ${textInput.value}`;
    }
  }
}

// Attach Event Listeners
function setupEventListeners() {
  // Check if document exists (for testing environment)
  if (typeof document === 'undefined') {
    return;
  }

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
