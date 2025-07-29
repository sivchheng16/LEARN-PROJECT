const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");

    li.textContent = taskText;

    //reate delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.style.marginLeft = "20px";

    //add click even to delete
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn)

    taskList.appendChild(li);

    taskInput.value = "";
  }
});
