const calcRowBtns = document.querySelectorAll(".calc-row > button");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const expressionDisplay = document.getElementById("expression");
let expression = "";
const resultDisplay = document.getElementById("result");

const operators = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
    ".": null,
    "=": null,
};

function add(a, b) {
    return Number(a) + Number(b);
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

function operate(a, b, op) {
    return operators[op](a, b);
}

function isOperationValid(content) {
    if (content === "=") return false;
    if (content in operators) {
        if (expression.at(-1) in operators || expression === '') return false;
    }
    if (content === '.' && expression.includes('.')) return false;

    return true;
}

function addCalcRowFunctionality() {
    for (let i = 0; i < calcRowBtns.length; i++) {
        calcRowBtns.item(i).addEventListener("click", (e) => {
            const btnContent = e.target.textContent;

            if (!isOperationValid(btnContent)) return;

            expression += btnContent;
            expressionDisplay.textContent = expression;
        });
    }
}

function addSpecialButtonFunctionality() {
    const equalsBtn = document.getElementById("=");
    equalsBtn.addEventListener("click", myEval);

    const delBtn = document.getElementById("delete");
    delBtn.addEventListener("click", deleteLastCharacter);

    const clear = document.getElementById("clear");
    clear.addEventListener("click", clearExpression);
}

function evaluate(expr) {
    return eval(expr);
}

let result = 0;
function myEval() {
    if (expression.at(-1) in operators || expression === '') return;

    const anyOperators = new RegExp("[-]|[+]|[/]|[*]");
    let numbers = expression.split(anyOperators);
    let expressionOperators = [...expression].filter( e => '+-/*'.includes(e));

    for (let i = 0; i < expressionOperators.length;) {
        let currentOp = expressionOperators[i];

        if (currentOp !== '*' && currentOp !== '/') {
            i++;
            continue
        }

        let partialResult = operators[currentOp](+numbers[i], +numbers[i + 1]);
        numbers[i] = partialResult;

        numbers.splice(i + 1, 1);
        expressionOperators.splice(i, 1);
    }

    while (expressionOperators.length > 0) {
        let currentOp = expressionOperators.at(0);
        let partialResult = operators[currentOp](+numbers.at(0), +numbers.at(1));

        numbers.splice(0, 2, partialResult);
        expressionOperators.shift();
    }

    const result = numbers.at(0);
    result = Math.floor(result * 1e5) / 1e5;
    resultDisplay.textContent = result;
}

function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    expressionDisplay.textContent = expression;
}

function clearExpression() {
    expression = "";
    expressionDisplay.textContent = expression;
}

addCalcRowFunctionality();
addSpecialButtonFunctionality();
