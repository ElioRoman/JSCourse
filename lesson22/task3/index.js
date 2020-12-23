const elInput = document.querySelector('.text-input');
const textInput = () => {
  console.log(elInput.value);
};
elInput.addEventListener('change', textInput);
