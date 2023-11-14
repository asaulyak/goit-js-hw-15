const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

function bindEvents() {
  if (!input || !text) {
    return;
  }

  input.addEventListener('input', event => {
    const fontSize = Number(event.target.value);

    if (isNaN(fontSize)) {
      return;
    }

    updateFontSize(fontSize);
  });
}

function updateFontSize(fontSize) {
  text.style.fontSize = `${fontSize}px`;
}

function setInitialFontSize() {
  const initialFontSize = Number(input?.value);

  if (isNaN(initialFontSize)) {
    return;
  }

  updateFontSize(initialFontSize);
}

setInitialFontSize();
bindEvents();
