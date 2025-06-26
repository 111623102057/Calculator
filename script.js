const input = document.getElementById('input');
const history = document.getElementById('history');

function append(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
  history.innerText = '';
}

function deleteLast() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = input.value;
    const result = eval(expression);
    history.innerText = expression + ' =';
    input.value = result;
  } catch (err) {
    input.value = 'Error';
  }
}

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearInput();
  }
});
