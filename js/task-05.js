const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function bindEvents() {
  if (!nameInput) {
    return;
  }

  nameInput.addEventListener('input', event => updateOutput(event.target.value));
}

function updateOutput(content) {
  if (!nameOutput) {
    return;
  }

  nameOutput.textContent = content || 'Anonymous';
}

bindEvents();
