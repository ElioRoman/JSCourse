const elemTask = document.querySelector('.task-status');
const taskStatus = () => {
  console.log(elemTask.checked);
};
elemTask.addEventListener('change', taskStatus);
