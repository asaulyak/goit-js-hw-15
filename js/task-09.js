function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor(color) {
  document.querySelector('span.color').textContent = color;
  document.body.style.backgroundColor = color;
}

function bindEvents() {
  document.querySelector('button.change-color')?.addEventListener('click', () => changeBodyColor(getRandomHexColor()));
}

bindEvents();
