//7. CRUD Operations with Arrays
//Create an array called tasks that represents a list of to-dos, each represented by an object with properties id, description, and completed.
//Write functions to:
//Add a new task.
//Update the completed status of a task.
//Delete a task by id.
//Display all incomplete tasks.
let tasks=[]
const AddNewTask=(description)=>{
   const addTask={
    id:Date.now(),
    description:description,
    completed:false,
   }
   tasks.push(addTask)
}

const UpdateTask=(id,completed)=>{
  const task=tasks.find(task=>task.id===id)
  if (task) {
    task.completed=completed
  } else {
    console.log("not completed")
  }
}

const deletedTask=(id)=>{
  tasks=tasks.filter((deletetask)=>deletetask.id!==id)
}

const incompleteTask=()=>{
  const incomplete= tasks.filter((tasks)=>!tasks.completed)
  if (incomplete.length===0) {
    console.log('no incomplete task')

  } else {
      incomplete.forEach(tasks=>{
        console.log(`id ${tasks.id} , description ${tasks.description}`)
      })
  }
}
AddNewTask('read the book');
AddNewTask('complete work');
AddNewTask('Buy fruits');
console.log('Incomplete tasks:');
incompleteTask();
UpdateTask(tasks[0].id,true)
console.log('Incomplete tasks after updating:');
incompleteTask();
deletedTask(tasks[1].id)
console.log('Incomplete tasks after deletion:');
incompleteTask();