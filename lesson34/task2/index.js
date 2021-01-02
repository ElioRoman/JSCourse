const baseUrl = 'https://5fedddb29708250017ce3f18.mockapi.io/api/v1/users';

/* getUsersList code here */
export const getUsersList = () =>
  fetch(baseUrl)
    .then(response => response.json())
    .then(result => console.log(result));

// getUsersList();

/* getUserById code here */
export const getUserById = userId =>
  fetch(`${baseUrl}/${userId}`)
    .then(response => response.json())
    .then(result => console.log(result));
// getUserById(4);

/* createUser code here */
export const createUser = data =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
// createUser();

/* updateUser code here */
export const updateUser = (userId, data) =>
  fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

/* deleteUser code here */
export const deleteUser = userId =>
  fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
