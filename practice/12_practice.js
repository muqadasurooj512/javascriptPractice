/*Task Manager for Personal Goals
Scenario: You’re helping a friend who’s trying to stay organized with their daily tasks and goals. They want a simple app where they can:

Add tasks with a description, due date, and priority level (e.g., high, medium, low).
View a list of all tasks and filter by due date or priority.
Update task status to mark it as "completed" when finished.
Delete tasks they no longer need to focus on.
Features to implement:

Create: Add a task with name, due date, and priority.
Read: List all tasks, with options to filter by priority or due date.
Update: Change the task’s status to “completed” or edit task details.
Delete: Remove a task that’s completed or unnecessary.*/

class Task {
  constructor(description, date, priority) {
    this.description = description;
    this.date = new Date(date);
    this.priority = priority;
    this.completed = false;
  }
  markCompleted() {
    this.completed = true;
  }
  editTask(newDescription, newDueDate, newPriority) {
    this.description = newDescription || this.description;
    this.date = newDueDate ? new Date(newDueDate) : this.date; // Corrected from dueDate to date
    this.priority = newPriority || this.priority;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }
  addTask(description, date, priority) {
    const newTask = new Task(description, date, priority);
    this.tasks.push(newTask);
    console.log(`Task added: ${description}`);
  }
  viewTasks(filter = {}) {
    const { priority, date } = filter;
    const filterTask = this.tasks.filter(task => {
      const matchesPriority = priority ? task.priority === priority : true;
      const matchesDate = date ? task.date.toDateString() === new Date(date).toDateString() : true;
      return matchesPriority && matchesDate;
    });
    console.log('Tasks:');
    filterTask.forEach((task, index) => {
      console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description} - Due: ${task.date.toDateString()} - Priority: ${task.priority}`);
    });
  }

  updateTask(index, update) {
    if (this.tasks[index]) {
      const { newDescription, newDueDate, newPriority, markAsCompleted } = update;
      if (markAsCompleted) {
        this.tasks[index].markCompleted(); // Fixed here
      } else {
        this.tasks[index].editTask(newDescription, newDueDate, newPriority);
      }
      console.log(`Task updated: ${this.tasks[index].description}`);
    } else {
      console.log('Task not found');
    }
  }
  deleteTask(index) {
    if (this.tasks[index]) {
      this.tasks.splice(index, 1);
      console.log('Task deleted.');
    } else {
      console.log('Task not found.');
    }
  }
}

const taskManager = new TaskList();
taskManager.addTask('project is complete', '2024-10-29', 'high');
taskManager.addTask('project complete', '2024-10-10', 'low');
taskManager.addTask('project description', '2024-10-18', 'medium');
taskManager.viewTasks();
taskManager.updateTask(0, { markAsCompleted: true });
taskManager.viewTasks();
taskManager.deleteTask(1);
taskManager.viewTasks();
