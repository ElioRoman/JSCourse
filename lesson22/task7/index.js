const elemBtn = document.querySelectorAll('.btn');
const handleClick = event => {
  console.log(event.target.textContent);
};
[...elemBtn].map(el => el.addEventListener('click', handleClick));
