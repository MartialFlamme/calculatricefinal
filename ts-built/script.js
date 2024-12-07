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
    catch (_a) {
        display.value = 'syntax error';
    }
}
