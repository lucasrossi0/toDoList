let btnAdd = document.getElementById("btnAdd");
let inpTask = document.getElementById("inpTask");
let taskContainer = document.getElementById("test");

btnAdd.addEventListener("click", () => {
  let div = document.createElement("div");
  div.id = "taskContainer";

  let button = document.createElement("button");
  button.innerText = "Remove";
  button.id = "btnRemove";

  let p = document.createElement("p");
  taskContainer.appendChild(div);

  p.innerText = inpTask.value;

  div.appendChild(p);
  div.appendChild(button);

  button.onclick = () => {
    remove(div);
  };
});

function remove(btn) {
  btn.remove();
}
