const input = document.querySelector("input");
const addBtn = document.querySelector(".addBtn");
const ul = document.querySelector("ul");

function addTask(taskName) {
  const li = document.createElement("li");
  li.innerHTML = `
    <button class="chickBtn"></button>
    <p>${taskName}</p>
    <button class="edit">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>`;
  ul.prepend(li);
  input.value = "";
}

function addEditInput(editInput , p) {
  editInput.value = p.textContent;
  p.textContent = "";
  p.append(editInput);
  editInput.addEventListener("keypress", function (e) {
    const newInputValue = e.target.value;
    if (newInputValue && e.key === "Enter") {
      p.innerHTML = newInputValue;
    }
  });
}

input.addEventListener("keypress", function (e) {
  const taskName = e.target.value;
  if (taskName && e.key === "Enter") {
    addTask(taskName);
  }
});

addBtn.addEventListener("click", function (e) {
  const taskName = input.value;
  if (taskName) {
    addTask(taskName);
  }
});
addBtn.addEventListener("mousedown" , function(e) {
  this.style.backgroundColor = "#509d2b80"
})
addBtn.addEventListener("mouseup" , function(e) {
  this.style.backgroundColor = "#509d2b"
})

ul.addEventListener("click", function (e) {
  const taskBtn = e.target;
  console.log(taskBtn);
  if (taskBtn.className === "fa-solid fa-trash-can") {
    taskBtn.parentElement.parentElement.remove();
  }
  if (taskBtn.className === "delete") {
    taskBtn.parentElement.remove();
  }
  if (taskBtn.className === "fa-regular fa-pen-to-square") {
    const p = taskBtn.parentElement.previousElementSibling;
    const editInput = document.createElement("input");
    addEditInput(editInput ,p)
  }
  if (taskBtn.className === "edit") {
    const p = taskBtn.previousElementSibling;
    const editInput = document.createElement("input");
    addEditInput(editInput ,p)
  }
  if (taskBtn.className === "chickBtn") {
    const p = taskBtn.parentElement.children[1];
    p.classList.add("line_del");
    taskBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  }
  if (taskBtn.className === "fa-solid fa-check") {
    const p = taskBtn.parentElement.parentElement.children[1];
    p.classList.remove("line_del");
    taskBtn.remove();
  }
});

ul.addEventListener("mousedown", function(e) {
  const taskBtn = e.target;
  console.log(taskBtn);
  if (taskBtn.className === "fa-solid fa-trash-can") {
    taskBtn.parentElement.style.backgroundColor = "#DB287980"
  }
  if (taskBtn.className === "delete") {
    taskBtn.style.backgroundColor = "#DB287980"
  }
  if   (taskBtn.className === "fa-regular fa-pen-to-square"){
    taskBtn.parentElement.style.backgroundColor = "#79127F80"
  }
  if   (taskBtn.className === "edit"){
    taskBtn.style.backgroundColor = "#79127F80"
  }
})
ul.addEventListener("mouseup", function(e) {
  const taskBtn = e.target;
  console.log(taskBtn);
  if (taskBtn.className === "fa-solid fa-trash-can") {
    taskBtn.parentElement.style.backgroundColor = "#DB2879"
  }
  if (taskBtn.className === "delete") {
    taskBtn.style.backgroundColor = "#DB2879"
  }
  if   (taskBtn.className === "fa-regular fa-pen-to-square"){
    taskBtn.parentElement.style.backgroundColor = "#79127F"
  }
  if   (taskBtn.className === "edit"){
    taskBtn.style.backgroundColor = "#79127F"
  }
})
