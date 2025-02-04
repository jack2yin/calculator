// Create a function that accepts a pair of number and an operator aka a calculator operation
function operate(operate1, operate2, operator) {

}

// Create HTML buttons for each digit and operator (including =)
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/', '%', '=', 'clear'];
const buttonContainer = document.getElementById('button-container');

operators.forEach(operator => {
    const button = document.createElement('button');
    button.textContent = operator;
    buttonContainer.appendChild(button);

    button.style.boxSizing = 'border-box';
    button.style.fontSize = '20px';
});

numbers.forEach( operand => {
    const button = document.createElement('button');
    button.textContent = operand;
    buttonContainer.appendChild(button);

    button.style.boxSizing = 'border-box';
    button.style.fontSize = '20px';
});

// Create a function that populate the display when you click the digit buttons

const display = document.getElementById('display-value');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.textContent;
        
        if (numbers.includes(Number(buttonText))) {
            if (!operatorSign) {
                operand1 = operand1 ? operand1 + buttonText : buttonText; // Append buttonText to operand1
            }                                                             // Set operand1 to buttonText
        }
    }
})

// Store the first and second numbers input by the user and then operate() on them when the user presses = button, according to the selected operator between the numbers 
let operand1 = null;
let operand2 = null;
let operatorSign = null;
let displayValue = '0';