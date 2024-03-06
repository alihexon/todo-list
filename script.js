let todoList = [];
const todoName = document.querySelector('.todo-name');

function addTodo() {
  todoList.push(todoName.value);  
  console.log(todoList);
  
  todoName.value = '';
}

function sendOnEnter() {
  if (event.key === 'Enter') {
    addTodo();
  }
}