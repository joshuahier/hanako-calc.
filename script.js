// HANAKO CALCULATOR PROGRAM

function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        let expr = display.value;
        
        expr = expr.replaceAll('x', '*')
                   .replaceAll(':', '/')
                   .replaceAll('÷', '/')
                   .replaceAll('×', '*')
                   .replaceAll('sin(', 'Math.sin(')
                   .replaceAll('cos(', 'Math.cos(')
                   .replaceAll('tan(', 'Math.tan(')
                   .replaceAll('log(', 'Math.log10(')
                   .replaceAll('^', '**')
                   .replaceAll('√', 'Math.sqrt(')
                   .replaceAll('mod', '%')
                   .replaceAll('π', 'Math.PI');
        
        let openBrackets = (expr.match(/\(/g) || []).length;
        let closeBrackets = (expr.match(/\)/g) || []).length;
        if (openBrackets > closeBrackets) {
            expr += ")".repeat(openBrackets - closeBrackets);
        }

        display.value = eval(expr);
    } catch (error) {
        display.value = "Error";
    }
}

function insertSqrt() {
    const display = document.getElementById("display");
    display.value += "√";
}

function calculateFactorial() {
    const display = document.getElementById("display");
    try {
        let currentValue = eval(
            display.value.replaceAll('x', '*')
                         .replaceAll(':', '/')
                         .replaceAll('^', '**')
                         .replaceAll('√', 'Math.sqrt(')
                         .replaceAll('π', 'Math.PI')
        );
        
        if (currentValue < 0 || !Number.isInteger(currentValue) || currentValue > 170) {
            display.value = "Error";
            return;
        }
        let result = 1;
        for (let i = 2; i <= currentValue; i++) {
            result *= i;
        }
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function toggleAdvancedKeys() {
    const standardKeys = document.getElementById("standard-keys");
    const advancedKeys = document.getElementById("advanced-keys");

    if (standardKeys.classList.contains("hidden")) {
        standardKeys.classList.remove("hidden");
        advancedKeys.classList.add("hidden");
    } else {
        standardKeys.classList.add("hidden");
        advancedKeys.classList.remove("hidden");
    }
}