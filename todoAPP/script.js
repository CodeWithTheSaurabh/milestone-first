function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value.trim();
    // Check if task text is empty 
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    // Create new list item
    let li = document.createElement("li");
    li.innerText = taskText;
    // Append new item to the list
    taskList.appendChild(li);
    // Clear the input field
    taskInput.value = "";
    taskInput.focus(); // this is not so high use it's just use to only focus on your task input code will still work if you remove it too
}
function showError(errorMessage) {
    let errorElement = document.createElement("p");
    errorElement.className = "error";
    errorElement.innerText = errorMessage;

    let todoContainer = document.querySelector(".todo-container");
    todoContainer.appendChild(errorElement);
}