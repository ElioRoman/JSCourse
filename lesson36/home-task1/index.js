const fetchUsers = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);

  if (response.ok) {
    return response.json();
  }
};
export const getUsersBlogs = userId => {
  try {
    return Promise.all(userId.map(user => fetchUsers(user).then(userData => userData.blog)));
  } catch (error) {
    console.error(error.message);
  }
};

getUsersBlogs(['google', 'facebook', 'gaearon']).then(data => console.log(data));
