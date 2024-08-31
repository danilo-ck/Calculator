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

function operate(operator, num1, num2){
    switch(operator){
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
    }
}

let displayValue = "0"; 
let firstNumber = null;
let firstOperator = null;
let secondNumber = null;
let secondOperator = null;
let result = null;

const numbers = document.querySelector('.numbers');


const display = document.querySelector('.display');
display.textContent = displayValue;

numbers.addEventListener('click', (event) => {
    let target = event.target;
    
    switch(target.id) {
        case "zero": 
            addToDisplay("0");
        break;
        case "one": 
            addToDisplay("1");
        break;
        case "two": 
            addToDisplay("2");
        break;
        case "three": 
            addToDisplay("3");
        break;
        case "four": 
            addToDisplay("4");
        break;
        case "five": 
            addToDisplay("5");
        break;
        case "six": 
            addToDisplay("6");
        break;
        case "seven": 
            addToDisplay("7");
        break;
        case "eight": 
            addToDisplay("8");
        break;
        case "nine": 
            addToDisplay("9");
        break;
    }
    
    display.textContent = displayValue;
});

numbers.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case "plus": 
            setOperator("+");
        break;
        case "minus": 
            setOperator("-");
        break;
        case "times":
            setOperator("*");
        break;
        case "divided":
            setOperator("/");
        break;
        case "equal":
            equalsTo();
    }

});


function addToDisplay(number) {
    if(firstNumber === null){
        if(displayValue == "0" || displayValue == 0){
            displayValue = number;
        }else{
            displayValue += number;
        }
    }else{
        if(displayValue == firstNumber){
            displayValue = number;
        }else{
            displayValue += number;
        }
    }
}

function setOperator(operator){
    if(firstOperator === null){
        firstNumber = Number(displayValue);
        firstOperator = operator;
    }
}

function equalsTo() {
    secondNumber = Number(displayValue);
    displayValue = operate(firstOperator, firstNumber, secondNumber);
    display.textContent = displayValue;
}