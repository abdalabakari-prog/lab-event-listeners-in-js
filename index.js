// script.js - Event Listeners Lab

// ========================================
// 1. HANDLE BUTTON CLICKS
// ========================================

// Get the button element
const colorBtn = document.getElementById('colorBtn');

// Array of colors to cycle through
const colors = ['#ffcdd2', '#f8bbd0', '#e1bee7', '#c5cae9', '#bbdefb', '#b2dfdb', '#c8e6c9', '#fff9c4'];
let colorIndex = 0;

// Function to change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

// Function to reset background color
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
    colorIndex = 0;
}

// Attach event listeners to button
colorBtn.addEventListener('click', changeBackgroundColor);
colorBtn.addEventListener('dblclick', resetBackgroundColor);

// ========================================
// 2. CAPTURE KEYBOARD INPUT
// ========================================

// Get the output element
const keyOutput = document.getElementById('keyOutput');

// Function to display key press
function displayKeyPress(event) {
    const key = event.key;
    const code = event.code;
    const keyChar = event.key.length === 1 ? event.key : `[${event.key}]`;
    
    keyOutput.innerHTML = `
        <strong>Key Pressed:</strong> ${keyChar}<br>
        <strong>Key Code:</strong> ${code}<br>
        <strong>Timestamp:</strong> ${new Date().toLocaleTimeString()}
    `;
}

// Attach keydown event listener to document
document.addEventListener('keydown', displayKeyPress);

// ========================================
// 3. PROCESS TEXT INPUT
// ========================================

// Get the text input and output elements
const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

// Function to display user input in real-time
function displayUserInput() {
    const inputValue = textInput.value;
    
    if (inputValue.trim() === '') {
        textOutput.textContent = 'Your text will appear here...';
        textOutput.style.color = '#999';
    } else {
        textOutput.textContent = inputValue;
        textOutput.style.color = '#333';
    }
}

// Attach input event listener to text field
textInput.addEventListener('input', displayUserInput);

// ========================================
// 4. COMBINE MULTIPLE EVENTS
// ========================================

// Get elements for combined events
const combinedInput = document.getElementById('combinedInput');
const submitBtn = document.getElementById('submitBtn');
const combinedOutput = document.getElementById('combinedOutput');

// Array to store entries
let entries = [];

// Function to add entry
function addEntry() {
    const value = combinedInput.value.trim();
    
    if (value !== '') {
        entries.push({
            text: value,
            timestamp: new Date().toLocaleTimeString()
        });
        
        // Update display
        updateCombinedOutput();
        
        // Clear input
        combinedInput.value = '';
        combinedInput.focus();
    }
}

// Function to update the combined output display
function updateCombinedOutput() {
    if (entries.length === 0) {
        combinedOutput.innerHTML = 'No entries yet...';
        return;
    }
    
    let html = '<strong>Entries:</strong><br>';
    entries.forEach((entry, index) => {
        html += `${index + 1}. "${entry.text}" - ${entry.timestamp}<br>`;
    });
    
    combinedOutput.innerHTML = html;
}

// Add entry on button click
submitBtn.addEventListener('click', addEntry);

// Add entry on Enter key press
combinedInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addEntry();
    }
});

// ========================================
// BONUS: ADDITIONAL FEATURES
// ========================================

// Hover Effect (mouseover and mouseout)
const hoverBox = document.getElementById('hoverBox');

hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = '#ffeb3b';
    hoverBox.style.transform = 'scale(1.05)';
    hoverBox.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    hoverBox.textContent = '✨ You are hovering! ✨';
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '#e8f4f8';
    hoverBox.style.transform = 'scale(1)';
    hoverBox.style.boxShadow = 'none';
    hoverBox.textContent = 'Hover over me!';
});

// Form Submission
const userForm = document.getElementById('userForm');
const successMessage = document.getElementById('successMessage');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    // Display success message
    successMessage.innerHTML = `
        <strong>✅ Form Submitted Successfully!</strong><br>
        Username: ${username}<br>
        Email: ${email}
    `;
    successMessage.style.display = 'block';
    
    // Reset form
    userForm.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
});

// ========================================
// ADDITIONAL ENHANCEMENTS
// ========================================

// Click counter for the color button
let clickCount = 0;
colorBtn.addEventListener('click', () => {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
});

// Log all key presses to console for debugging
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}, Code: ${event.code}`);
});

// Add focus and blur events to text inputs
const allInputs = document.querySelectorAll('input[type="text"]');

allInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.backgroundColor = '#f0f8ff';
    });
    
    input.addEventListener('blur', () => {
        input.style.backgroundColor = 'white';
    });
});

console.log('✅ Event listeners initialized successfully!');
