// Define the Task object
class Task {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }
}

// Define the TaskScheduler object
class TaskScheduler {
    constructor() {
        this.tasks = [];
    }

    // Function to add tasks with due dates to the scheduler
    addTask(title, description, dueDate) {
        const newTask = new Task(title, description, dueDate);
        this.tasks.push(newTask);
        console.log(`Task "${title}" added to the scheduler with due date ${dueDate}`);
    }

    // Function to display tasks sorted by their due dates
    displayTasksByDueDate() {
        const sortedTasks = this.tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        console.log("Tasks Sorted by Due Date:");
        sortedTasks.forEach(task => {
            console.log(`${task.title} - Due: ${task.dueDate} - Completed: ${task.completed ? 'Yes' : 'No'}`);
        });
    }

    // Function to update task details or mark tasks as completed
    updateTask(title, newDescription, newDueDate, completed) {
        const task = this.tasks.find(task => task.title === title);
        if (task) {
            task.description = newDescription || task.description;
            task.dueDate = newDueDate || task.dueDate;
            task.completed = completed !== undefined ? completed : task.completed;
            console.log(`Task "${title}" updated.`);
        } else {
            console.log(`Task "${title}" not found.`);
        }
    }

    // Function to remove tasks from the scheduler
    removeTask(title) {
        const index = this.tasks.findIndex(task => task.title === title);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log(`Task "${title}" removed from the scheduler.`);
        } else {
            console.log(`Task "${title}" not found.`);
        }
    }
}

// Example usage:
const taskScheduler = new TaskScheduler();

// Adding tasks
taskScheduler.addTask("Finish project", "Complete the coding project", "2024-03-10");
taskScheduler.addTask("Meeting with client", "Discuss project requirements", "2024-03-08");
taskScheduler.addTask("Buy groceries", "Milk, bread, eggs", "2024-03-05");

// Displaying tasks sorted by due dates
taskScheduler.displayTasksByDueDate();

// Updating task details or marking tasks as completed
taskScheduler.updateTask("Finish project", "Review code and add comments", "2024-03-12", false);

// Removing a task
taskScheduler.removeTask("Meeting with client");

// Displaying tasks sorted by due dates after modifications
taskScheduler.displayTasksByDueDate();
