const elPage = document.querySelectorAll('.pagination__page');
const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};
[...elPage].map(el => el.addEventListener('click', handleClick));
