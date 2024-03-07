let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  const todoListContainerHTML = document.querySelector('.todo-list');

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const HTML = `
      <li>
        <div class="todo-info">
          <div>${name}</div>
          <div>-</div>
          <div>${dueDate}</div>
        </div>
        <button class="delete-btn"
        onclick="
        todoList.splice(${i}, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        renderTodoList();">
          <i class='bx bxs-trash'></i>
        </button>
      </li>
    `
    todoListHTML += HTML
  }

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

  function sendOnEnter() {
    if (event.key === 'Enter') {
      addTodo();
    }
}