const elemSearch = document.querySelector('.single-use-btn');
const singleUse = () => {
  console.log('clicked');
  elemSearch.removeEventListener('click', singleUse);
};
elemSearch.addEventListener('click', singleUse);
