function submit(e) {
  e.preventDefault();
  const task = input_add.value;
  input_add.value = ""; // Clear

  add_task(task);
}

function add_task(task) {
  const id = tasks.length + 1;

  tasks.push(id);
  task_list.innerHTML += `
  <div class="task task_${id}">
    <span class="mark"></span>
    <input type="text" placeholder="${task}" disabled />
    <button class="remove">Delete</button>
  </div>`;

  const task_list_items = document.querySelectorAll(".task");

  Array.from(task_list_items).forEach((task) => {
    task.addEventListener("click", (e) => {
      task.classList.toggle("checked");
    });

    task.querySelector(".remove").addEventListener("click", (e) => {
      task.remove();
    });
  });
}

const task_list = document.querySelector(".task-list");
const form = document.querySelector("form");
const input_add = document.querySelector(".input-add");

const tasks = [];

form.addEventListener("submit", (e) => {
  submit(e);
});
