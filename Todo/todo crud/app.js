var tasks = [];

function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(taskText);
    renderTasks();
    
    taskInput.value = "";
}

function renderTasks() {
    var taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");
        li.textContent = tasks[i];
        li.className = "list-group-item";

        li.addEventListener("click", function() {
            this.classList.toggle("completed");
        });

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger btn-sm float-right ml-2";
        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent li click event from firing
            deleteTask(this.parentNode.textContent);
        });

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "btn btn-warning btn-sm float-right";
        editButton.addEventListener("click", function() {
            var newText = prompt("Edit task:", this.parentNode.textContent.trim());
            if (newText !== null) {
                editTask(this.parentNode.textContent, newText);
            }
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
}

function deleteTask(taskText) {
    tasks = tasks.filter(function(task) {
        return task !== taskText.trim();
    });

    renderTasks();
}

function editTask(oldText, newText) {
    tasks = tasks.map(function(task) {
        return task === oldText.trim() ? newText.trim() : task;
    });

    renderTasks();
}

// Initial rendering
renderTasks();
