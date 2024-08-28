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

let btn = document.querySelector('#one');

btn.addEventListener('click',(event) => {
    console.log('clicked');
});