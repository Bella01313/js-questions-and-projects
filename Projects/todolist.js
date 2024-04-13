// Define the Task object
class Task {
    constructor(description, category) {
        this.description = description;
        this.category = category;
        this.completed = false;
    }
}

// Define the ToDoList object
class ToDoList {
    constructor() {
        this.tasks = [];
    }

    // Function to add tasks to the ToDo list
    addTask(description, category) {
        const newTask = new Task(description, category);
        this.tasks.push(newTask);
        console.log(`Task "${description}" in category "${category}" has been added.`);
    }

    // Function to display tasks grouped by categories
    displayTasksByCategory() {
        const categories = {};

        this.tasks.forEach(task => {
            if (!categories[task.category]) {
                categories[task.category] = [];
            }
            categories[task.category].push(task);
        });

        console.log("Tasks Grouped by Category:");
        for (const category in categories) {
            console.log(`Category: ${category}`);
            categories[category].forEach(task => {
                console.log(`- [${task.completed ? 'X' : ' '}] ${task.description}`);
            });
        }
    }

    // Function to mark a task as completed
    markTaskAsCompleted(description) {
        const task = this.tasks.find(task => task.description === description);
        if (task) {
            task.completed = true;
            console.log(`Task "${description}" marked as completed.`);
        } else {
            console.log(`Task "${description}" not found.`);
        }
    }

    // Function to remove a task from the list
    removeTask(description) {
        const index = this.tasks.findIndex(task => task.description === description);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log(`Task "${description}" has been removed.`);
        } else {
            console.log(`Task "${description}" not found.`);
        }
    }
}

// Example usage:
const todoList = new ToDoList();

// Adding tasks
todoList.addTask("Task1", "Category1");
todoList.addTask("Task2", "Category2");
todoList.addTask("Task3", "Category3");
todoList.addTask("Task4", "Category4");

// Display tasks grouped by categories
todoList.displayTasksByCategory();

// Mark a task as completed
todoList.markTaskAsCompleted("Task1");

// Remove a task
todoList.removeTask("Task1");

// Display tasks grouped by categories after modifications
todoList.displayTasksByCategory();
