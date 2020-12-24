const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
  const listElem = document.querySelector('.list');
  const listItemElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');

      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkBoxElem = document.createElement('input');
      checkBoxElem.setAttribute('type', 'checkbox');
      checkBoxElem.setAttribute('data-id', `${Math.random()}`);
      checkBoxElem.checked = done;

      checkBoxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkBoxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemElems);
};

const addTask = event => {
  const inputElem = document.querySelector('.task-input');
  if (inputElem.value === '') {
    return;
  }
  const task = {
    text: inputElem.value,
    done: false,
  };

  tasks.push(task);
  inputElem.value = '';

  const itemListElem = document.querySelectorAll('.list__item');
  [...itemListElem].map(el => el.remove());
  renderListItems(tasks);
};

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addTask);

const getTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const checkBoxData = event.target.dataset.id;
  const checkbox = document.querySelector(`[data-id="${checkBoxData}"]`);
  const liElem = checkbox.closest('.list__item');

  if (checkbox.checked) {
    liElem.classList.add('list__item_done');
  } else {
    liElem.classList.remove('list__item_done');
  }
};

const listElem = document.querySelector('.list');
listElem.addEventListener('click', getTask);
renderListItems(tasks);
