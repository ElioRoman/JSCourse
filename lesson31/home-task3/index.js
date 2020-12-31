const delay = time => {
  const pr = new Promise(resolve => {
    setTimeout(() => {
      resolve(console.log('Done'));
    }, time);
  });
  return pr;
};

delay(3000);
