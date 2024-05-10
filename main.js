
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

function addTask() {
  var input = taskInput.value.trim();
  if (input === '') {
    alert("Please enter a task!");
    return;
  }
  var li = document.createElement("li");
  li.textContent = input;
  li.addEventListener("click", toggleTask);
  taskList.appendChild(li);
  taskInput.value = "";
}

function toggleTask() {
  this.classList.toggle("completed");
}

function deleteCompletedTasks() {
  var completedTasks = document.querySelectorAll(".completed");
  completedTasks.forEach(function (task) {
    task.remove();
  });
}