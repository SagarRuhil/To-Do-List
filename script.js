document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
document.getElementById('dateInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');
    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value.trim();
    
    if (taskText === '') {
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskTextSpan.classList.add('task-text');
    
    const taskDateSpan = document.createElement('span');
    taskDateSpan.textContent = taskDate ? `Due: ${taskDate}` : '';
    taskDateSpan.classList.add('task-date');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(taskDateSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
    dateInput.value = '';
}
