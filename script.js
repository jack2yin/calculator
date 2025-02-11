// Create HTML buttons for each digit and operator (including =)
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ['+', '-', '*', '/', '%', 'clear'];
let equalSign = document.createElement('button');
let result = null;
let operand1 = null;
let operand2 = null;
let operatorSign = null;
let displayValue = '';

const container = document.getElementById('container');

operators.forEach(operator => {
    const button = document.createElement('button');
    button.textContent = operator;
    container.appendChild(button);

    button.style.boxSizing = 'border-box';
    button.style.fontSize = '20px';
});

numbers.forEach(operand => {
    const button = document.createElement('button');
    button.textContent = operand;
    container.appendChild(button);
    button.style.boxSizing = 'border-box';
    button.style.fontSize = '20px';
});

equalSign.textContent = '=';
equalSign.style.boxSizing = 'border-box';
equalSign.style.fontSize = '20px';
container.appendChild(equalSign);

// Create a function that populate the display when you click the digit buttons

const display = document.getElementById('display');

container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.textContent;

        if (numbers.includes(Number(buttonText))) {
            //  If no operator is selected, push digits to operand1
            if (!operatorSign) {
                // operand1 = operand1 ? operand1 + buttonText : buttonText;
                if (operand1) {
                    if (operand1 == '0') {
                        operand1 = null;
                        operand1 = buttonText;
                    } else {
                        operand1 += buttonText;
                    }
                } else {
                    operand1 = buttonText;
                }
                displayValue = operand1;
                // If an operator is selected, push digits to operand2
            } else {
                operand2 = operand2 ? operand2 + buttonText : buttonText;
                displayValue = operand2;
            }
        }

        if (operators.includes(buttonText)) {
            operatorSign = buttonText;
            if (buttonText === 'clear') {
                displayValue = '0';
                operand1 = null;
                operand2 = null;
                operatorSign = null;
            }
        }

        if (buttonText === '=') {
                // Truthy vs Falsy Value
            if (operand1 && operand2 && operatorSign) {
                // Perform calculation
                result = operate(operand1, operand2, operatorSign);
                // Convert result to string
                displayValue = String(result);
                // Set operand1 to the result for further calculations
                operand1 = displayValue;
                // Reset variables for new calculations
                operand2 = null;
                operatorSign = null;
            }
        }
        display.textContent = displayValue;
    }
});

// Store the first and second numbers input by the user and then operate() on them when the user presses = button, according to the selected operator between the numbers
function operate(operand1, operand2, operatorSign) {
    operand1 = Number(operand1); // Convert to number
    operand2 = Number(operand2); // Convert to number

    switch (operatorSign) {
        case '+': return operand1 + operand2;
        case '-': return operand1 - operand2;
        case '*': return operand1 * operand2;
        case '/': return operand1 / operand2;
        case '%': return operand1 % operand2;
        default:
            return null; // Handle invalid operators
    }
}

