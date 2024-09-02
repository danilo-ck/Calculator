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
    if(divisor === 0){
        return "GOOD TRY!";
    }else{
        return dividend / divisor;
    }
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
        case "dot":
            addToDisplay(".");
        break;
        case "delete":
            removeFromDisplay();
        break;
    }
    
    display.textContent = showDisplay(displayValue);
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
        break;
        
    }

});


function addToDisplay(number) {
    
    if(displayValue != "GOOD TRY!"){
        if(number === "."){
            if(!itsDecimal(displayValue)){
                displayValue += number;
            }
        }else{
            if(firstNumber === null){
                if(displayValue === "0" || displayValue === 0){
                    displayValue = number;
                }else{
                    displayValue += number;
                }
            }else{
                if(displayValue == firstNumber || displayValue === "0" || displayValue === 0){
                    displayValue = number;
                }else{
                    displayValue += number;
                }
            }
        }
    }

}

function removeFromDisplay(){
    if(displayValue != "GOOD TRY!"){
        let newValue = String(displayValue);
        if(newValue.length === 1){
            displayValue = "0";
        }else{
            displayValue = newValue.slice(0, (newValue.length - 1));
        }
    }
}

function setOperator(operator){
    if(displayValue != "GOOD TRY!"){
        if(firstOperator === null){
            firstNumber = Number(displayValue);
            firstOperator = operator;
        }else if(secondOperator === null){
            secondNumber = Number(displayValue);
            secondOperator = operator;
            firstNumber = operate(firstOperator, firstNumber, secondNumber);
            displayValue = firstNumber;
            display.textContent = showDisplay(displayValue);
        }else {
            secondNumber = Number(displayValue);
            firstOperator = operator;
            firstNumber = operate(secondOperator, firstNumber, secondNumber);
            secondOperator = null;
            displayValue = firstNumber;
            display.textContent = showDisplay(displayValue);
        }
    }
}

function equalsTo() {
    if(displayValue != "GOOD TRY!"){
        if(secondOperator != null){
            secondNumber = Number(displayValue);
            displayValue = operate(secondOperator, firstNumber, secondNumber);
            display.textContent = showDisplay(displayValue);
            firstNumber = displayValue;
            firstOperator = null;
            secondNumber = null;
            secondOperator = null;
        }else if(firstOperator != null){
            secondNumber = Number(displayValue);
            displayValue = operate(firstOperator, firstNumber, secondNumber);
            display.textContent = showDisplay(displayValue);
            firstNumber = displayValue;
            firstOperator = null;
            secondNumber = null;
            secondOperator = null;
        }
    }
}

function clearAll(){
    displayValue = "0";
    firstNumber = null;
    firstOperator = null;
    secondNumber = null;
    secondOperator = null;
    display.textContent = showDisplay(displayValue);
}

function showDisplay(value){
    value = String(value);
    if(value.length > 9){
        value = value.slice(0, 9);
    }
    return value;
}

function itsDecimal(value){
    let result = String(value).indexOf(".");
    if(result === -1){
        return false;
    }else{
        return true;
    }
}

window.addEventListener('keydown', (event) => {
    const key = event.key;

    switch(key) {
        case "0": 
            addToDisplay("0");
        break;
        case "1": 
            addToDisplay("1");
        break;
        case "2": 
            addToDisplay("2");
        break;
        case "3": 
            addToDisplay("3");
        break;
        case "4": 
            addToDisplay("4");
        break;
        case "5": 
            addToDisplay("5");
        break;
        case "6": 
            addToDisplay("6");
        break;
        case "7": 
            addToDisplay("7");
        break;
        case "8": 
            addToDisplay("8");
        break;
        case "9": 
            addToDisplay("9");
        break;
        case ".":
            addToDisplay(".");
        break;
        case "Backspace":
            removeFromDisplay();
        break;
        case "=":
            equalsTo();
        break;
        case "/":
            setOperator("/");
        break;
        case "-": 
            setOperator("-");
        break;
    }
    
    display.textContent = showDisplay(displayValue);
});