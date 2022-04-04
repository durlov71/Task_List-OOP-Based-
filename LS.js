function LS() {}

LS.prototype.fetchTask = function() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
        tasks = JSON.parse(task)
    } else {
        tasks = [];
    }
    return tasks;
}
LS.prototype.storeTask = function(task) {
    let tasks = thsi.fetchTask();
    tasks.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default LS();