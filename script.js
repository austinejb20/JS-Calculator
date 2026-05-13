const display = document.getElementById("display");

// Add numbers/operators
function appendValue(value) {
    let current = display.value;
    let lastChar = current.slice(-1);

    if (['+', '-', '*', '/'].includes(value)) {
        if (['+', '-', '*', '/'].includes(lastChar)) {
            display.value = current.slice(0, -1) + value;
            return;
        }
    }

    display.value += value;
}

// Decimal 
function appendDecimal() {
    let current = display.value;
    let lastNumber = current.split(/[\+\-\*\/]/).pop();

    if (!lastNumber.includes(".")) {
        display.value += ".";
    }
}

// Clear
function clearDisplay() {
    display.value = "";
}

// Calculate
function calculate() {
    let expression = display.value;

    // Remove ending operator
    if (['+', '-', '*', '/'].includes(expression.slice(-1))) {
        expression = expression.slice(0, -1);
    }

    try {
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

function deleteLast() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}
