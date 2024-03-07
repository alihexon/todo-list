let todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

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
        renderTodoList();">
          <i class='bx bxs-trash'></i>
        </button>
      </li>
    `
    todoListHTML += HTML
  }

  document.querySelector('.todo-list').innerHTML = todoListHTML;
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
     
     renderTodoList();
     
     document.querySelector('.todo-name').value = '';
     document.querySelector('.todo-date').value = '';
   }

  function sendOnEnter() {
    if (event.key === 'Enter') {
      addTodo();
    }
}