// function LS() {}
class LS {

    fetchTask() {
            let tasks = localStorage.getItem('tasks');
            tasks = (tasks) ? JSON.parse(tasks) : [];
            // if (tasks) {
            //     tasks = JSON.parse(tasks)
            // } else {
            //     tasks = [];
            // }
            // console.log(tasks);
            return tasks;

        }
        // store task in LocalStorage
    storeTask(task) {
            let tasks = this.fetchTask();
            tasks.unshift(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        //Delete Task from LocalStorage
    deleteTask(id) {
        let tasks = this.fetchTask();;
        let index = tasks.findIndex(task => task.id === id);
        tasks.splice(index, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    };
    // check Marked in LocalStorage
    completeTask(id) {
        let tasks = this.fetchTask();;
        let index = tasks.findIndex(task => task.id === id);
        tasks[index].isComplete = !tasks[index].isComplete
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    findTask(id) {
        let tasks = this.fetchTask();
        return tasks.find(task => task.id === id);
    }
    updateTask(id, title) {
        const tasks = this.fetchTask()
        const index = tasks.findIndex(index => index.id === id)
        tasks[index].title = title;
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}

export default LS;