function appendToDisplay(value: string) {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
}


function calculateResult() {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        display.value = eval(display.value).toString();
    } catch(error) {
        display.value = 'syntax error';
    }
}

function calculatePower() {
    const display = document.getElementById('display') as HTMLInputElement;
    const base = parseFloat(display.value);
    const exponent = prompt("Entrez l'exposant :");
    if (exponent !== null) {
        display.value = Math.pow(base, parseFloat(exponent)).toString();
    }
}

function calculateFactorial() {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseInt(display.value);
    if (num < 0) {
        display.value = 'syntax error';
        return;
    }
    display.value = factorial(num).toString();
}

function factorial(n: number): number {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function calculateSqrt() {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    display.value = Math.sqrt(num).toString();
}

function calculateLog() {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    display.value = Math.log(num).toString();
}

function calculateExp() {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    display.value = Math.exp(num).toString();
}

function calculateSin() {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    display.value = Math.sin(num*Math.PI/180).toString();
}

function calculateCos() {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    display.value = Math.cos(num*Math.PI/180).toString();
}

function calculateTan() {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    display.value = Math.tan(num*Math.PI/180).toString();
}

function convertToBinary() {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseInt(display.value);
    display.value = num.toString(2);
}

function convertToHex() {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseInt(display.value);
    display.value = num.toString(16);
}
function displayCurrentTime() {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toLocaleTimeString();
}
function convertToDecimal() {
    const display = document.getElementById('display') as HTMLInputElement;
    const inputValue = display.value;
    const conversionType = (document.getElementById('conversionType') as HTMLSelectElement).value;
    let decimalValue: number;

    if (conversionType === 'binary') {
        decimalValue = parseInt(inputValue, 2);
    } else if (conversionType === 'hexadecimal') {
        decimalValue = parseInt(inputValue, 16);
    }

    if (!isNaN(decimalValue)) {
        display.value = decimalValue.toString();
    } else {
        display.value = 'Syntax error';
    }
}