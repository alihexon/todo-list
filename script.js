let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
const todoInput = document.querySelector('.todo-name')
const todoSend = document.querySelector('.add-todo')

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  const todoListContainerHTML = document.querySelector('.todo-list');

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const HTML = `
      <li>
        <input type="checkbox" class="todo-checkbox">
        <div class="todo-item">${name}</div>
        <div>${dueDate}</div>
        <button class="delete-btn"
        onclick="
        todoList.splice(${index}, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        renderTodoList();">
          <i class='bx bxs-trash'></i>
        </button>
      </li>
    `
    todoListHTML += HTML
  })

  todoListContainerHTML.innerHTML = todoListHTML;

  seperateOnRender();
}

function seperateOnRender() {
  const todoListContainerHTML = document.querySelector('.todo-list');
  const seperator = document.querySelector('.seperator-off');

  if (todoListContainerHTML.children.length > 0) {
    seperator.classList.add('seperator');
  } else {
    seperator.classList.remove('seperator');
  }
}

todoSend.addEventListener('click', () => addTodo());

function addTodo() {
  const todoName = document.querySelector('.todo-name').value;
  const todoDate = document.querySelector('.todo-date').value;
  
  if (todoName === '' || todoDate === '') {
   alert('Please fill the inputs in order to add a new todo.')
   return
  }

  const newTodo = {
    name: todoName,
    dueDate: todoDate
  };
  
  todoList.push(newTodo);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  
  renderTodoList();
  
  document.querySelector('.todo-name').value = '';
  document.querySelector('.todo-date').value = '';
}

todoInput.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    addTodo();
  }
})

const checkboxElement = document.querySelector('.todo-checkbox');
function lineThroughTodo() {
  const checkedBox = checkboxElement.checked
  const todoItem = document.querySelector('.todo-item');

  if (checkedBox) {
    todoItem.classList.add('todo-item-done');
  } else {
    todoItem.classList.remove('todo-item-done');
  }
}

checkboxElement.addEventListener('click', () => {
  lineThroughTodo();
})