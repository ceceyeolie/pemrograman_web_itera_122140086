document.addEventListener("DOMContentLoaded", () => {
    loadTodos();
    setMotivation();
});

const motivations = [
    "Small steps every day lead to big achievements!",
    "Progress, not perfection. Just keep going!",
    "A little effort today makes tomorrow easier!",
    "Start now. You’re closer than you think!",
    "Your goals won’t achieve themselves—let’s do this!"
];

function setMotivation() {
    const motivationText = document.querySelector(".motivation");
    const randomIndex = Math.floor(Math.random() * motivations.length);
    motivationText.textContent = motivations[randomIndex];
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => renderTodo(todo.text, todo.completed));
}

function addTodo() {
    const input = document.getElementById("todo-input");
    const text = input.value.trim();
    if (text) {
        renderTodo(text, false);
        saveTodo(text, false);
        input.value = "";
    }
}

function renderTodo(text, completed) {
    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("custom-checkbox");
    checkBox.checked = completed;
    checkBox.onclick = () => toggleTodo(li, text, taskText, checkBox);

    const taskText = document.createElement("span");
    taskText.textContent = text;

    if (completed) {
        li.classList.add("completed");
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "gray";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => removeTodo(li, text);

    li.appendChild(checkBox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
}

function saveTodo(text, completed) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push({ text, completed });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function toggleTodo(li, text, taskText, checkBox) {
    li.classList.toggle("completed");
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const index = todos.findIndex(todo => todo.text === text);

    if (index > -1) {
        todos[index].completed = checkBox.checked;
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    if (checkBox.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "gray";
    } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "black";
    }
}

function removeTodo(li, text) {
    li.remove();
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.filter(todo => todo.text !== text);
    localStorage.setItem("todos", JSON.stringify(todos));
}
