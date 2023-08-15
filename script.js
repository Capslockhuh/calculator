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
        if (operator === "" || operator === null) {
            operator = symbol.textContent;
        } else {
            firstNum = operate(Number(firstNum), operator, Number(secondNum));
            display.textContent = firstNum;
            secondNum = "";
            operator = symbol.textContent;
        }
    })
})

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
    if ((operator === "x" && secondNum === "") || (operator === "÷" && secondNum === "")) {
        display.textContent = firstNum; // Avoid showing 0 when clicking = before entering a second number in multiplication or division  
    } else if (operator === "÷" && secondNum === "0") {
        // Avoid bugs with showing the division alert
        alert("You can\'t divide by 0!");
        clear();
    } else {
        let result = operate(Number(firstNum), operator, Number(secondNum));
        if (!(Number.isInteger(result))) {
            result = Math.round(result * 100) / 100;
        }
        display.textContent = result;
        firstNum = "";
        secondNum = "";
        operator = "";
    }
});

const display = document.querySelector(".display");

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clear);

function clear() {
    display.textContent = 0;
    firstNum = "";
    secondNum = "";
    operator = "";
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
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