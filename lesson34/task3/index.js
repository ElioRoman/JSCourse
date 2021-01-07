const baseUrl = 'https://5fedddb29708250017ce3f18.mockapi.io/api/v1/users';

const loginForm = document.querySelector('.login-form');
const submitButton = document.querySelector('.submit-button');
const errorField = document.querySelector('.error-text');

const formChanges = () => {
  if (loginForm.reportValidity()) {
    submitButton.disabled = false;
  }
};
loginForm.addEventListener('input', formChanges);

const getUserInfo = e => {
  e.preventDefault();
  const dataForm = [...new FormData(loginForm)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charser= utf-8',
    },
    body: JSON.stringify(dataForm),
  })
    .then(response => response.json())
    .then(data => {
      loginForm.reset();
      alert(JSON.stringify(data));
    })
    .catch(() => {
      errorField.textContent = 'Failed to create user';
    });
};
loginForm.addEventListener('submit', getUserInfo);
