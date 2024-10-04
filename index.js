document.addEventListener("DOMContentLoaded", () => {
    // Select the form element
    const form = document.querySelector("#create-task-form");
  
    // Add submit event listener
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default behavior of form submission
  
      // Get the value of the task description input
      const taskDescription = document.querySelector("#new-task-description").value;
  
      // Check if the taskDescription is not empty
      if (taskDescription.trim() !== "") {
        // Add the task to the list
        addTask(taskDescription);
  
        // Clear the input field after adding the task
        document.querySelector("#new-task-description").value = "";
      }
    });
  });
  
  function addTask(task) {
    // Create a new list item (li) element
    const newTask = document.createElement("li");
    newTask.textContent = task;
  
    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
  
    // Add an event listener to the delete button to remove the task
    deleteButton.addEventListener("click", () => {
      newTask.remove(); // Removes the task when the delete button is clicked
    });
  
    // Append the delete button to the task
    newTask.appendChild(deleteButton);
  
    // Append the task with delete button to the task list (ul)
    document.querySelector("#tasks").appendChild(newTask);
}

function addTask(task) {
  // Create a new list item (li) element
  const newTask = document.createElement("li");
  newTask.textContent = task;

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Add an event listener to the delete button to remove the task
  deleteButton.addEventListener("click", () => {
    newTask.remove(); // Removes the task when the delete button is clicked
  });

  // Append the delete button to the task
  newTask.appendChild(deleteButton);

  // Append the task with delete button to the task list (ul)
  document.querySelector("#tasks").appendChild(newTask);
}


  function addTask(task) {
    // Create a new list item (li) element
    const newTask = document.createElement("li");
  
    // Set the text content of the list item to the task description
    newTask.textContent = task;
  
    // Append the new task to the task list (ul)
    document.querySelector("#tasks").appendChild(newTask);
  }


  function addTask(task) {
    const newTask = document.createElement("li");
    newTask.textContent = task;
  
    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    
    // Add an event listener to the delete button to remove the task
    deleteButton.addEventListener("click", () => {
      newTask.remove(); // Removes the task when the delete button is clicked
    });
  
    // Append the delete button to the task
    newTask.appendChild(deleteButton);
  
    // Append the task with delete button to the task list
    document.querySelector("#tasks").appendChild(newTask);
  }


  function addTask(task) {
    const newTask = document.createElement("li");
    newTask.textContent = task;
  
    // Get the priority value
    const priority = document.querySelector("#priority").value;
  
    // Set the color based on the priority
    if (priority === "high") {
      newTask.style.color = "red";
    } else if (priority === "medium") {
      newTask.style.color = "yellow";
    } else {
      newTask.style.color = "green";
    }
  
    // Add delete button as before
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => newTask.remove());
    newTask.appendChild(deleteButton);
  
    document.querySelector("#tasks").appendChild(newTask);
  }