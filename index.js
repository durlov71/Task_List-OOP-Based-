document.querySelector('.AddTaskBtn').addEventListener('click', e => {
    const taskTitle = document.querySelector('#newtaskID').value
    console.log(taskTitle);
    const task = new Task(taskTitle)

    console.log(task);
})