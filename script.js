let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
let checkedItems = JSON.parse(localStorage.getItem('checked')) || [];
const todoInput = document.querySelector('.todo-name');
const todoSend = document.querySelector('.add-todo');

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

  document.querySelectorAll('.todo-checkbox').forEach((checkbox, index) => {
    checkbox.addEventListener('click', (event) => {
      const todoItem = document.querySelectorAll('.todo-item')[index];
      todoItem.classList.toggle('todo-item-done', event.target.checked);
      checked = true;
      localStorage.setItem('checked', JSON.stringify(checked));
    });
  });
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
// Function to add a new todo item
function addTodo() {
  const todoName = document.querySelector('.todo-name').value;
  const todoDate = document.querySelector('.todo-date').value;
  
  if (todoName === '') {
   alert('Please fill the inputs in order to add a new todo.');
   return;
  }

  const newTodo = {
    name: todoName,
    dueDate: todoDate,
    checked: false,
  };
  
  todoList.push(newTodo);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
  document.querySelector('.todo-name').value = '';
  document.querySelector('.todo-date').value = '';
}

todoSend.addEventListener('click', () => addTodo());

todoInput.addEventListener('keydown', () => { if (event.key === 'Enter') { addTodo() }}) 

const checkboxElement = document.querySelector('.todo-checkbox');

function lineThroughTodo() {
  const checkedBox = checkboxElement.checked
  const todoItem = document.querySelector('.todo-item');

  todoItem.classList.toggle('todo-item-done', checkedBox)
}
