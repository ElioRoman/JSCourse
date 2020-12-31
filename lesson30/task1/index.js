export const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.src = imgSrc;
    imgElem.setAttribute('alt', 'My photo');

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImgLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImgLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });
  return p;
};
