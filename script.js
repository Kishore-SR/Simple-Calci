let displayText = "";

function updateDisplay() {
    document.querySelector('.display').innerHTML = displayText || '0';
}

function handleButtonClick(value) {
    if (value === 'C') {
        displayText = '';
    } else if (value === '=') {
        try {
            displayText = displayText.replace(/^0+/, '');
            
            const result = Function('"use strict";return (' + displayText + ')')();
            displayText = result.toString();
        } catch (error) {
            displayText = 'Error';
        }
    } else {
        displayText += value;
    }
    updateDisplay();
}

document.querySelectorAll('.btn-container button').forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.textContent);
    });
});
