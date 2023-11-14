let counterValue = 0;
const counterView = document.getElementById('value');

function bindEvents() {
  const buttonIncrement = document.querySelector('[data-action="increment"]');
  const buttonDecrement = document.querySelector('[data-action="decrement"]');

  if (!buttonIncrement || !buttonDecrement) {
    return;
  }

  buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    updateView();
  });
  buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    updateView();
  });
}

function updateView() {
  if (!counterView) {
    return;
  }

  counterView.textContent = counterValue;
}

bindEvents();
