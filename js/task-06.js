function bindEvents() {
  const input = document.getElementById('validation-input');

  if (!input) {
    return;
  }

  input.addEventListener('blur', () => {
    const desiredLength = Number(input.dataset.length);

    if (isNaN(desiredLength)) {
      return;
    }

    const currentLength = input.value.length;

    input.classList.remove('valid', 'invalid');

    if (currentLength !== desiredLength) {
      input.classList.add('invalid');
    } else {
      input.classList.add('valid');
    }
  });
}

bindEvents();
