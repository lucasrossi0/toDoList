document.addEventListener("DOMContentLoaded", () => {
  let btnAdd = document.getElementById("btnAdd");
  let inpTask = document.getElementById("inpTask");
  let taskContainer = document.getElementById("container");
  // getting the dom objects of the page

  btnAdd.addEventListener("click", () => {
    let div = document.createElement("div");
    let btn = document.createElement("button");
    let p = document.createElement("p");
    // creating html tags fot the to do tasks
    add(div, p, btn);

    // calling the function that adds those html tags to the dom

    btn.addEventListener("click", () => {
      remove(div);
    });
    // onclick the remove btn is being used
  });

  function remove(btn) {
    btn.remove();
  }
  // to remove the task

  function add(div, p, btn) {
    div.id = "taskContainer";
    btn.innerText = "Remove";
    btn.id = "btnRemove";
    p.innerText = inpTask.value;
    div.appendChild(p);
    div.appendChild(btn);
    taskContainer.appendChild(div);
  }
  // this function associate the html tags created before with the ids, text content
  // this function adds those html tags inside the dom
});
