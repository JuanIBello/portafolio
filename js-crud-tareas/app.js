let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button onclick="removeTask(${index})">X</button>
      </li>
    `;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  tasks.push(input.value);
  input.value = "";
  render();
}

function removeTask(index) {
  tasks.splice(index, 1);
  render();
}

render();
