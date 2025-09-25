// DOM value assignment for the create task form
const formSubmit = document.getElementById("create-task-form");

formSubmit.addEventListener("submit", (event) => {
  addingTasks();
  // Reset form after data submission
  formSubmit.reset();

  // Prevent default form POST behaviour. Without this, form resets and clears the Todo list
  event.preventDefault();
});

// Function to handle adding tasks to "My Todos"
function addingTasks() {
  // ul element selection
  const tasks = document.getElementById("tasks");
  // Form Input value selection
  const newTask = document.getElementById("new-task-description").value;

  // Create new list element
  const li = document.createElement("li");

  // Assign Form Input Value to li's text content
  li.textContent = newTask;

  // Append li element to ul
  tasks.append(li);
}
