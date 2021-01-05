export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userDate = await response.json();
    return userDate;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};
fetchUser('facebook')
  .then(userDate => console.log(userDate))
  .catch(err => alert(err.massage));
