const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const btnCheck = document.createElement("button");
    btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'
    btnCheck.classList.add("check-btn");
    todoDiv.appendChild(btnCheck);

    const btnTrash = document.createElement("button");
    btnTrash.innerHTML = '<i class="fa-solid fa-trash"></i>'
    btnTrash.classList.add("trash-btn");
    todoDiv.appendChild(btnTrash);
    todoList.appendChild(todoDiv);
    todoDiv.style.display = 'flex';
    todoDiv.style.justifyContent = 'center'
    todoDiv.style.alignItems = 'center'
    todoDiv.style.gap = '10px'
    todoDiv.style.listStyle = 'none'
    todoDiv.style.marginTop = '20pxw'
}