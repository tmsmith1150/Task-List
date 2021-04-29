
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Delete this task?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerhtml-vs-removechild

  // Clear from LS
  clearTasksFromLocalStorage();
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
















// //define UI vars

// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document .querySelector('#task');

// //Function to load all event listeners
// loadEventListeners();

// function loadEventListeners() {
//     //Add task event listener to form element, a 'submit' event and a addTask function
//     form.addEventListener('submit', addTask);
//     //Remove task event listener(added to taskList'collection",the ul because multiple lines)
//     taskList.addEventListener('click', removeTask);
//     //Clear task event
//     clearBtn.addEventListener('click', clearTasks);
//     //Filter task event
//     filter.addEventListener('keyup', filterTasks);
//     // DOM re-load events from saved local storage
//     document.addEventListener('DOMContentLoaded', getTasks);


// }

// // Get saved tasks from LS
// function getTasks() {
//     let tasks;
//   if(localStorage.getItem('tasks') === null){
//       tasks = [];
//   } else {
//       tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach(function(task){
//       // Create li element
//     const li = document.createElement('li');
//     //Add a class to li
//     li.className = 'collection-item';
//     //Create text node and append to li
//     li.appendChild(document.createTextNode(task));
//     //create delete link element
//     const link = document.createElement('a');
//     //Add class to link element
//     link.className = 'delete-item secondary-content';
//     //Add icon to html
//     link.innerHTML = '<i class="fa fa-remove"></i>';
//     //Append the link to li
//     li.appendChild(link);

//     //Append li to ul
//     taskList.appendChild(li);

//   });
// };


// //create addTask function (an event handler)
// function addTask(e) {
//     if(taskInput.value === '') {
//         alert('Add a Task');
//     }

//     // Create li element
//     const li = document.createElement('li');
//     //Add a class to li
//     li.className = 'collection-item';
//     //Create text node and append to li
//     li.appendChild(document.createTextNode(taskInput.value));
//     //create delete link element
//     const link = document.createElement('a');
//     //Add class to link element
//     link.className = 'delete-item secondary-content';
//     //Add icon to html
//     link.innerHTML = '<i class="fa fa-remove"></i>';
//     //Append the link to li
//     li.appendChild(link);

//     //Append li to ul
//     taskList.appendChild(li);

//     //Store in locaol storage
//     storeTaskInLocalStorage(taskInput.value);

//     //Clear input
//     taskInput.value = '';

//     e.preventDefault();

//     // // Clear filter
//     // filter.value = '';
//     // e.preventDefault();
// }

// // Store task function
// function storeTaskInLocalStorage(task) {
//   let tasks;
//   if(localStorage.getItem('tasks') === null){
//       tasks = [];
//   } else {
//       tasks = JSON.parse(localStorage.getItem('tasks'));
//   }
//   tasks.push(task);

//   localStorage.setItems('tasks', JSON.stringify(tasks));
// }

// //Remove task function
// function removeTask(e) {
//     if(e.target.parentElement.classList.contains('delete-item')){
//         if(confirm('are you sure you want to delete this task?'))
//         e.target.parentElement.parentElement.remove();

//     }
// }
// //Clear tasks
// function clearTasks() {
//     // taskList.innerHTML = '';
//     // https://jsperf.com/innerhtml-vs-removechild

//     // Faster
//     while(taskList.firstChild) {
//         taskList.removeChild(taskList.firstChild);
//     }
// }

// // Filter task function
// function filterTasks(e) {
//     const text = e.target.value.toLowerCase();

//     document.querySelectorAll('.collection-item').forEach(function(task){
//         const item = task.firstChild.textContent;
//         if(item.toLocaleLowerCase().indexOf(text) != -1){
//             task.style.display = 'block';
//         } else {
//             task.style.display = 'none';
//         }
//     })

//     console.log(text);
// }