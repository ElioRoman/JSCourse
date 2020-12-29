import { initTodoListHandlers } from './todo-list.js';
import { renderTasks } from './renderTasks.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
