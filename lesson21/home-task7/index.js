export const createButton = buttonText => {
  const buttonElem = document.createElement('button');
  buttonElem.textContent = buttonText;
  const listElem = document.querySelector('body');
  listElem.append(buttonElem);
};
