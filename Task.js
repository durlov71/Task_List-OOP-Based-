class Task {
    constructor(title) {
        this.id = new Date().toLocaleString();
        this.title = title;
        this.isComplete = false;
    }
}


// function Task(title) {
//     this.id = new Date().toLocaleString();
//     this.title = title;
//     this.isComplete = false;
// }

export default Task;