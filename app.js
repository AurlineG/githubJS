const todoInput = document.getElementById ('todo-input');
const addTaskButton = document.getElementById ('add-task-btn');
const todoList = document.getElementById ('todo-list');

// Adding a task
const addTask = () => {
    const taskText = todoInput.value.trim();

    if (taskText !=='') {
        const taskItem = createTaskItem(taskText);
        todoList.appendChild(taskItem);
        todoInput.value = '';
    };

};
// Create new task items
const createTaskItem = (taskText) => {   //creating function createTaskItem
    const taskItem = document.createElement('li'); // creating List item
    taskItem.className = "todo-item"; // creating class todo-item for the function

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox' ;
    checkbox.classList.add('checkbox');

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBtn);

    return taskItem;
};
// Deleting tasks
const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    todoList.removeChild(taskItem);
};
// Cross out tasks
const toggleTask = (event) => {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle('completed');
};
//Event Listeners
addTaskButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown',function(event) {
    if(event.key === 'Enter') {
        addTask();
    };
});

todoList.addEventListener('change', toggleTask);
//Example

const initialTasks = ['Buy groceries', 'Pay Bills', 'Walk dog'];

initialTasks.forEach((task) => {
    const taskItem = createTaskItem(task);
    todoList.appendChild(taskItem);
});
    