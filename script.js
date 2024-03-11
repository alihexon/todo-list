// Retrieve the todoList from localStorage or initialize an empty array
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
const todoInput = document.querySelector('.todo-name');
const todoSend = document.querySelector('.add-todo');
const checkboxElement = document.querySelector('.todo-checkbox');

renderTodoList(); // Call the function to render the todo list when entering the page
// Function to render the todo list items
function renderTodoList() {
  let todoListHTML = '';
  const todoListContainerHTML = document.querySelector('.todo-list');

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject; // Destructure the name and dueDate from todoObject
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
    ` // HTML template for each todo item
    todoListHTML += HTML // Append the HTML to the todoListHTML string
  })
  todoListContainerHTML.innerHTML = todoListHTML; // Update the todo list container with the generated HTML
  seperateOnRender(); // Call a function to handle UI separation based on todo list items
}
// Function to handle UI separation based on todo list items
function seperateOnRender() {
  const todoListContainerHTML = document.querySelector('.todo-list'); // Get the todo list container
  const seperator = document.querySelector('.seperator-off'); // Get the separator element
  // Check if there are any todo list items
  if (todoListContainerHTML.children.length > 0) {
    seperator.classList.add('seperator'); // Add the separator class if there are items
  } else {
    seperator.classList.remove('seperator'); // Remove the separator class if there are no items
  }
}
// Function to add a new todo item
function addTodo() {
  const todoName = document.querySelector('.todo-name').value; // Get the value of the todo name input
  const todoDate = document.querySelector('.todo-date').value; // Get the value of the todo date input
  
  if (todoName === '' || todoDate === '') {
   alert('Please fill the inputs in order to add a new todo.') // Display an alert if inputs are empty
   return // Exit the function
  }
  // Create a new todo object with name and due date
  const newTodo = {
    name: todoName,
    dueDate: todoDate
  };
  
  todoList.push(newTodo); // Add the new todo to the todoList array
  localStorage.setItem('todoList', JSON.stringify(todoList)); // Update the todoList in localStorage
  renderTodoList(); // Re-render the todo list
  document.querySelector('.todo-name').value = ''; // Clear the todo name input
  document.querySelector('.todo-date').value = ''; // Clear the todo date input
}
// Event listener for clicking the add todo button
todoSend.addEventListener('click', () => addTodo());
// Event listener for pressing Enter to add a todo
todoInput.addEventListener('keydown', () => { if (event.key === 'Enter') { addTodo() }}) 
// Function to apply line-through style to todo item based on checkbox state
function lineThroughTodo() {
  const checkedBox = checkboxElement.checked
  const todoItem = document.querySelector('.todo-item');

  if (checkedBox) {
    todoItem.classList.add('todo-item-done');
  } else {
    todoItem.classList.remove('todo-item-done');
  }
}

checkboxElement.addEventListener('click', () => lineThroughTodo())