export const squaredNumbers = () => {
  const getNum = document.querySelectorAll('.number');
  [...getNum].map(el => (el.dataset.squaredNumber = el.dataset.number ** 2));
};
squaredNumbers();
