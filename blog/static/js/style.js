let display = document.getElementById('display');
let memory = 0;
let memoryInUse = false;

function appendValue(value) {
  if (memoryInUse) {
    display.value = '';
    memoryInUse = false;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function clearEntry() {
  display.value = display.value.slice(0, -1);
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function toggleSign() {
  if (display.value !== '') {
    if (display.value[0] === '-') {
      display.value = display.value.slice(1);
    } else {
      display.value = '-' + display.value;
    }
  }
}

function memoryRecall() {
  display.value = memory;
}

function memoryStore() {
  memory = parseFloat(display.value);
}

function memoryAdd() {
  memory += parseFloat(display.value);
}

function memorySubtract() {
  memory -= parseFloat(display.value);
}

function memoryClear() {
  memory = 0;
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = Number.isInteger(result) ? result : result.toFixed(6);
    memoryInUse = true;
  } catch (error) {
    display.value = 'Error';
  }
}
