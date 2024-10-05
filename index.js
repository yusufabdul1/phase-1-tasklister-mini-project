document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const taskDescription = document.querySelector("#new-task-description").value;

      if (taskDescription.trim() !== "") {
          addTask(taskDescription);
          document.querySelector("#new-task-description").value = "";
      }
  });
});

function addTask(task) {
  const newTask = document.createElement("li");
  newTask.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
      newTask.remove();
  });

  newTask.appendChild(deleteButton);
  document.querySelector("#tasks").appendChild(newTask);
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const taskDescription = document.querySelector("#new-task-description").value;

      if (taskDescription.trim() !== "") {
          addTask(taskDescription);
          document.querySelector("#new-task-description").value = "";
      }
  });
});

function addTask(task) {
  const newTask = document.createElement("li");
  newTask.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
      newTask.remove();
  });

  newTask.appendChild(deleteButton);
  document.querySelector("#tasks").appendChild(newTask);
}

function addTask(task) {
  const newTask = document.createElement("li");
  newTask.textContent = task;

  const priority = document.querySelector("#priority").value;

  if (priority === "high") {
      newTask.style.color = "red";
  } else if (priority === "medium") {
      newTask.style.color = "yellow";
  } else {
      newTask.style.color = "green";
  }

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
      newTask.remove();
  });

  newTask.appendChild(deleteButton);
  document.querySelector("#tasks").appendChild(newTask);
}
