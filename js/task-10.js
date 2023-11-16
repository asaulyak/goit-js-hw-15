const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBox(size) {
  const element = document.createElement('div');
  element.style.backgroundColor = getRandomHexColor();
  element.style.height = `${size}px`;
  element.style.width = `${size}px`;

  return element;
}

function createBoxes(amount) {
  const boxes = [];
  const existingChildrenAmount = boxesContainer.children.length || 0;

  for (let i = 0; i < amount; i += 1) {
    boxes.push(createBox(30 + (i + existingChildrenAmount) * 10));
  }

  boxesContainer?.append(...boxes);
}

function destroyBoxes() {
  if (!boxesContainer) {
    return;
  }

  boxesContainer.innerHTML = '';
}

function bindEvents() {
  document.querySelector('[data-create]')?.addEventListener('click', () => {
    const amount = document.querySelector('#controls > input[type="number"]')?.value || 0;

    createBoxes(Number(amount));
  });

  document.querySelector('[data-destroy]')?.addEventListener('click', destroyBoxes);
}

bindEvents();
