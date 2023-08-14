let firstNum = "";
let operator = "";
let secondNum = "";

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (operator === "") {
            firstNum += digit.textContent;
            display.textContent = firstNum;
        } else {
            secondNum += digit.textContent;
            display.textContent = secondNum
        }
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        operator = symbol.textContent;
    })
})

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
    display.textContent = operate(Number(firstNum), operator, Number(secondNum));
    firstNum = "";
    secondNum = "";
    operator = "";
});

const display = document.querySelector(".display");

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
            console.log(add(firstNum, secondNum));
            return add(firstNum, secondNum);
        case "-":
            console.log(subtract(firstNum, secondNum));
            return subtract(firstNum, secondNum);
        case "x":
            console.log(multiply(firstNum, secondNum));
            return multiply(firstNum, secondNum);
        case "÷":
            console.log(divide(firstNum, secondNum));
            return divide(firstNum, secondNum);
        default:
            break;
    }
}