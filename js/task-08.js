const form = document.querySelector('.login-form');

function getFormInputs(formElement) {
  return [...formElement.elements].filter(element => element.nodeName === 'INPUT');
}

function validateForm(formElement) {
  const inputs = getFormInputs(formElement);

  return inputs.every(input => !!input.value);
}

function getFormData(formElement) {
  const inputs = getFormInputs(formElement);

  return inputs.reduce((acc, input) => ({ ...acc, [input.name]: input.value }), {});
}

function submitForm(formElement) {
  const formData = getFormData(formElement);

  console.log('form data', formData);
}

function bindEvents() {
  if (!form) {
    return;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (validateForm(form)) {
      submitForm(form);
      form.reset();
    } else {
      alert('All fields should be filled in');
    }
  });
}

bindEvents();
