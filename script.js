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
            result = Math.round((result + Number.EPSILON) * 100) / 100
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

const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {
    if (Boolean(firstNum) && !(Boolean(operator))) {
        firstNum = firstNum.slice(0, -1);
        display.textContent = firstNum;
    } else if (Boolean(firstNum) && Boolean(operator) && Boolean(secondNum)) {
        secondNum = secondNum.slice(0, -1);
        display.textContent = secondNum;
    }
})

const signBtn = document.querySelector("#sign-toggle");
// Change a number's sign (+/-)
signBtn.addEventListener("click", () => {
    if (Boolean(firstNum) && !(Boolean(operator))) {
        firstNum *= -1;
        display.textContent = firstNum;
    } else if (Boolean(firstNum) && Boolean(operator) && Boolean(secondNum)) {
        secondNum *= -1
        display.textContent = secondNum;
    }
})

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
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "x":
            return multiply(firstNum, secondNum);
        case "÷":
            return divide(firstNum, secondNum);
        default:
            break;
    }
}