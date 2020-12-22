export const finishList = () => {
  const elemLi1 = document.createElement('li');
  const elemLi4 = document.createElement('li');
  const elemLi6 = document.createElement('li');
  const elemLi8 = document.createElement('li');
  elemLi1.textContent = '1';
  elemLi4.textContent = '4';
  elemLi6.textContent = '6';
  elemLi8.textContent = '8';
  const elemList = document.querySelector('.list');
  elemList.append(elemLi8);
  elemList.prepend(elemLi1);
  const elemSpec = document.querySelector('.special');
  elemSpec.before(elemLi4);
  elemSpec.after(elemLi6);
};
