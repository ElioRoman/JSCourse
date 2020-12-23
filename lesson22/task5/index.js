const elemSearch = document.querySelector('.search__input');
const elemBtn = document.querySelector('.search__btn');
const getText = () => {
  console.log(elemSearch.value);
};

elemBtn.addEventListener('click', getText);
