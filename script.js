let todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML;

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const HTML = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button"
    onclick="
    todoList.splice(${i}, 1);
    renderTodoList();">
    Delete
    </button>
    `
    todoListHTML += HTML
  }

  document.querySelector('.todo-list').innerHTML = todoListHTML;
}

// function addTodo() {
//   const todoName = document.querySelector('.todo-name');
//   const name = todoName.value;
  
//   const todoDate = document.querySelector('.todo-date');
//   const dueDate = todoDate.value;

//   todoList.push(
//     todoDate,
//     dueDate,
//   );  
  
//   todoName.value = '';

//   renderTodoList();
// }

 function addTodo() {
     const todoName = document.querySelector('.todo-name').value;
     const todoDate = document.querySelector('.todo-date').value;
     
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