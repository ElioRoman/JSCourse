const elemText = document.querySelector('.text-input');
const handleClick = event => {
  console.log(event.target.value);
};
elemText.addEventListener('change', handleClick);
