let firstNum;
let operator;
let secondNum;

function add(a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("You can\'t divide by 0!");
        return;
    } else {
        return a / b;
    }
}

function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            add(firstNum, secondNum);
            break;
        case "-":
            subtract(firstNum, secondNum);
            break;
        case "x":
            multiply(firstNum, secondNum);
            break;
        case "÷":
            divide(firstNum, secondNum);
            break;
        default:
            break;
    }
}