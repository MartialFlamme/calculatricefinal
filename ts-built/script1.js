function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}
function calculateResult() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value).toString();
    }
    catch (error) {
        display.value = 'syntax error';
    }
}
function calculatePower() {
    var display = document.getElementById('display');
    var base = parseFloat(display.value);
    var exponent = prompt("Entrez l'exposant :");
    if (exponent !== null) {
        display.value = Math.pow(base, parseFloat(exponent)).toString();
    }
}
function calculateFactorial() {
    var display = document.getElementById('display');
    var num = parseInt(display.value);
    if (num < 0) {
        display.value = 'syntax error';
        return;
    }
    display.value = factorial(num).toString();
}
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
function calculateSqrt() {
    var display = document.getElementById('display');
    var num = parseFloat(display.value);
    display.value = Math.sqrt(num).toString();
}
function calculateLog() {
    var display = document.getElementById('display');
    var num = parseFloat(display.value);
    display.value = Math.log(num).toString();
}
function calculateExp() {
    var display = document.getElementById('display');
    var num = parseFloat(display.value);
    display.value = Math.exp(num).toString();
}
function calculateSin() {
    var display = document.getElementById('display');
    var num = parseFloat(display.value);
    display.value = Math.sin(num * Math.PI / 180).toString();
}
function calculateCos() {
    var display = document.getElementById('display');
    var num = parseFloat(display.value);
    display.value = Math.cos(num * Math.PI / 180).toString();
}
function calculateTan() {
    var display = document.getElementById('display');
    var num = parseFloat(display.value);
    display.value = Math.tan(num * Math.PI / 180).toString();
}
function convertToBinary() {
    var display = document.getElementById('display');
    var num = parseInt(display.value);
    display.value = num.toString(2);
}
function convertToHex() {
    var display = document.getElementById('display');
    var num = parseInt(display.value);
    display.value = num.toString(16);
}
function displayCurrentTime() {
    var display = document.getElementById('display');
    var now = new Date();
    display.value = now.toLocaleTimeString();
}
function convertToDecimal() {
    var display = document.getElementById('display');
    var inputValue = display.value;
    var conversionType = document.getElementById('conversionType').value;
    var decimalValue;
    if (conversionType === 'binary') {
        decimalValue = parseInt(inputValue, 2);
    }
    else if (conversionType === 'hexadecimal') {
        decimalValue = parseInt(inputValue, 16);
    }
    if (!isNaN(decimalValue)) {
        display.value = decimalValue.toString();
    }
    else {
        display.value = 'Syntax error';
    }
}
