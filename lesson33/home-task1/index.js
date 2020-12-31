const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
export const getTasksList = () => fetch(baseUrl).then(response => response.json());
// getTasks(baseUrl).then(taskList => console.log(taskList));

/* getTaskById code here */
export const getTaskById = id => fetch(`${baseUrl}/${id}`).then(response => response.json());
// getTaskId(30).then(taskData => console.log(taskData));
