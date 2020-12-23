const taskStatus = document.querySelector('.task-status');
const handleClick = event => {
  console.log(event.target.checked);
};
taskStatus.addEventListener('change', handleClick);
