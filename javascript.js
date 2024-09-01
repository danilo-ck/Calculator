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
        break;
        case "-": return subtract(num1, num2);
        break;
        case "*": return multiply(num1, num2);
        break;
        case "/": return divide(num1, num2);
    }
}

let displayValue = "0"; 
let firstNumber = null;
let firstOperator = null;
let secondNumber = null;
let secondOperator = null;

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
        break;
        case "clear":
            clearAll();
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
    }else if(secondOperator === null){
        secondNumber = Number(displayValue);
        secondOperator = operator;
        firstNumber = operate(firstOperator, firstNumber, secondNumber);
        displayValue = firstNumber;
        display.textContent = displayValue;
    }else {
        secondNumber = Number(displayValue);
        firstOperator = operator;
        firstNumber = operate(secondOperator, firstNumber, secondNumber);
        secondOperator = null;
        displayValue = firstNumber;
        display.textContent = displayValue;
    }
}

function equalsTo() {
    if(secondOperator != null){
        secondNumber = Number(displayValue);
        displayValue = operate(secondOperator, firstNumber, secondNumber);
        display.textContent = displayValue;
        firstNumber = displayValue;
        firstOperator = null;
        secondNumber = null;
        secondOperator = null;
    }else if(firstOperator != null){
        secondNumber = Number(displayValue);
        displayValue = operate(firstOperator, firstNumber, secondNumber);
        display.textContent = displayValue;
        firstNumber = displayValue;
        firstOperator = null;
        secondNumber = null;
        secondOperator = null;
        //comprobar que pasa si le das a igual estando firstOperator en null al pulsar varios operadores seguidos
    }

}

function clearAll(){
    displayValue = "0";
    firstNumber = null;
    firstOperator = null;
    secondNumber = null;
    secondOperator = null;
    display.textContent = displayValue;
}