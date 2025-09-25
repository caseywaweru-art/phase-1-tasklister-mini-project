// DOM value assignment for the create task form
const form = document.querySelector('#create-task-form')

form.addEventListener("submit", (event) => {
  addingTasks();
  // Reset form after data submission
  form.reset();

  // Prevent default form POST behaviour. Without this, form resets and clears the Todo list
  event.preventDefault();
});

// Function to handle adding tasks to "My Todos"
function addingTasks() {
  // ul element selection
  const taskList = document.querySelector('#tasks')
  // Form Input value selection
  const formInput = document.querySelector('#new-task-description').value;

  // Create new list element
  const li = document.createElement("li");

  // Assign Form Input Value to li's text content
  li.textContent = formInput;

  // Append li element to ul
  taskList.append(li);
}

/*
form = document.querySelector('#create-task-form')
formInput = document.querySelector('#new-task-description')
taskList = document.querySelector('#tasks')
*/
