const taskadd = document.getElementById('add-task');
const taskinput = document.getElementById('input-task');
const todos = document.getElementById('todos');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItem = [];

function Task(description) {
  this.description = description;
  this.completed = false;
}

const createTask = (task, index) => {
  return `
    <div class="todo-item ${task.completed ? 'checked' : ''}">
      <div class="description">${task.description}</div>
      <div class="buttons">
        <input onclick="completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}> 
        <button onclick="deleteTask(${index})" class="btn-delete">Delete</button>
      </div>
    </div>
  `
}

const HTMLlist = () =>{
  todos.innerHTML = "";
  if(tasks.length > 0){
    tasks.forEach((item, index) => {
      todos.innerHTML += createTask(item, index); 
    });
    todoItem = document.querySelectorAll('.todo-item');

  }
}

HTMLlist();

const update = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completeTask = index =>{
  tasks[index].completed = !tasks[index].completed;
  if(tasks[index].completed){
    todoItem[index].classList.add('checked');
  } else{
    todoItem[index].classList.remove('checked')
  }
  update();
  HTMLlist();
}

taskadd.addEventListener('click', () => {
  tasks.push(new Task(taskinput.value));
  update();
  HTMLlist();
  taskinput.value = '';
})

const deleteTask = index =>{
  tasks.splice(index, 1);
  update();
  HTMLlist();
}