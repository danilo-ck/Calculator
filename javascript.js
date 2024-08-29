function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(dividend, divisor){
    return dividend / divisor;
}

let firstNumber, operator, secondNumber;

function operate(){
    switch(operator){
        case "+": return add(firstNumber, secondNumber);
        case "-": return subtract(firstNumber, secondNumber);
        case "*": return multiply(firstNumber, secondNumber);
        case "/": return divide(firstNumber, secondNumber);
    }
}

const numbers = document.querySelector('.numbers');
let displayValue = ""; 

numbers.addEventListener('click', (event) => {
    let target = event.target;
    
    switch(target.id) {
        case "one": displayValue += "1";
        break;
        case "two": displayValue += "2";
        break;
        case "three": displayValue += "3";
        break;
        case "four": displayValue += "4";
        break;
        case "five": displayValue += "5";
        break;
        case "six": displayValue += "6";
        break;
        case "seven": displayValue += "7";
        break;
        case "eight": displayValue += "8";
        break;
        case "nine": displayValue += "9";
        break;
    }

    const display = document.querySelector('.display');

    display.textContent = displayValue;
});

