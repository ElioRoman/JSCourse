export const parseUser = stringJSON => {
  try {
    return JSON.parse(stringJSON);
  } catch (err) {
    return null;
  }
};
// console.log(parseUser('{"name":"Tom"}'));
