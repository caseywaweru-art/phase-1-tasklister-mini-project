const formSubmit = document.getElementById("create-task-form");

/*formSubmit.addEventListener("click", function(event){
  event.PreventDefault();
  console.log("Hello there");
});*/

formSubmit.addEventListener("submit", (event) => {
  //console.log("Hello there");
  addingTasks();

  event.preventDefault();
});

// Function to handle adding new tasks to the list
function addingTasks() {
  const list = document.getElementById("list");
  const tasks = document.getElementById("tasks");
  const newTask = document.getElementById("new-task-description");
  // Creates a new list element
  const li = document.createElement("li");

  // Adds the input from the form to the list element
  li.textContent = newTask.value;
  // Appends the list element to the ul
  tasks.append(li);
}
