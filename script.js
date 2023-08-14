let firstNum;
let operator = "";
let secondNum;

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (operator === "") {
            firstNum = Number(digit.textContent);
        } else {
            secondNum = Number(digit.textContent);
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
    operate(firstNum, operator, secondNum);
    firstNum = null;
    secondNum = null;
    operator = "";
});

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
            break;
        case "-":
            console.log(subtract(firstNum, secondNum));
            break;
        case "x":
            console.log(multiply(firstNum, secondNum));
            break;
        case "÷":
            console.log(divide(firstNum, secondNum));
            break;
        default:
            break;
    }
}