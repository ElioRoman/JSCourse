export const getTitleElement = () => {
  const titleElem = document.querySelector('title');
  console.dir(titleElem);
};

getTitleElement();

export const getInputElement = () => {
  const titleElem = document.querySelector('input', 'type=text');
  console.log(titleElem);
};

getInputElement();
