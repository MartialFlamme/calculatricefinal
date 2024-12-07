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
    } catch {
        display.value = 'syntax error';
    }
}
