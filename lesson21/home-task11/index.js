export const squaredNumbers = () => {
  const a = document.querySelectorAll('.number');
  [...a].map(el => (el.dataset.squaredNumber = el.dataset.number ** 2));
};
squaredNumbers();
