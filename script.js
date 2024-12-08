document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("todo-list");
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    ${taskText} <span class="delete-btn">❌</span>
  `;

  listItem.querySelector(".delete-btn").addEventListener("click", function() {
    taskList.removeChild(listItem);
  });

  taskList.appendChild(listItem);
  taskInput.value = "";
}
