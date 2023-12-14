document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
    setRandomPlaceholder();
});

function setRandomPlaceholder() {
    var placeholderArray = [
        "Completed a workout!",
        "Learned something new!",
        "Cooked a delicious meal!",
        "Finished a book!",
        "Practiced a hobby!",
        "Helped someone in need!"
    ];

    var randomIndex = Math.floor(Math.random() * placeholderArray.length);
    var randomPlaceholder = placeholderArray[randomIndex];

    document.getElementById("taskInput").placeholder = randomPlaceholder;
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    saveTask(taskInput.value);
    taskInput.value = "";

    // Set a new random placeholder after adding a task
    setRandomPlaceholder();
}

// Add event listener for the Enter key
document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
function saveTask(task) {
    var tasks = getSavedTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getSavedTasks() {
    var tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = getSavedTasks();

    // Clear existing tasks
    taskList.innerHTML = "";

    // Add tasks from local storage
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}
