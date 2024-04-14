const addButton = document.querySelector("#addButton");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const deleteButton=document.querySelector("#deleteButton")
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("ol");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const label = document.createElement("label");
        label.textContent = taskText;
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        taskList.appendChild(listItem);
        
        taskInput.value = "";
    } else {
        alert("Please enter something to add to the to-do list.");
    }
});
deleteButton.addEventListener("click", () => {
    const selectedTask = taskList.querySelector("input[type='checkbox']:checked");
    if (selectedTask) {
        taskList.removeChild(selectedTask.parentElement);
    } else {
        alert("Please select a task to delete.");
    }
});
