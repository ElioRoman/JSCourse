export const finishForm = () => {
  const elemList = document.querySelector('input');
  elemList.setAttribute('type', 'text');
  elemList.setAttribute('name', 'login');
  const inputNew = document.createElement('input');
  elemList.append(inputNew);
  inputNew.setAttribute('type', 'password');
  inputNew.setAttribute('name', 'password');
};
