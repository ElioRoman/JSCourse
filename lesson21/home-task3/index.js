export const getTitle = () => {
  const elementTitle = document.querySelector('.title');
  return elementTitle.textContent;
};

export const getDescription = () => {
  const elemenDescr = document.querySelector('.about');
  return elemenDescr.innerText;
};

export const getPlans = () => {
  const elemenPlans = document.querySelector('.plans');
  return elemenPlans.innerHTML;
};

export const getGoal = () => {
  const elemenGoal = document.querySelector('.goal');
  return elemenGoal.outerHTML;
};
