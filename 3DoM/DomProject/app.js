// Delete UI Vars
const form = document.querySelector('#task-form');  //querySelector to get an element 
const taskList = document.querySelector('.collection'); //define UI variables
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event Listener  (user defined function ibig sabhin tayo lang gumawa)
loadEventListeners();

function loadEventListeners() {
   // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add Task Event
    form.addEventListener('submit', addTask);

    // Remove Task Event
    // function loadEventListeners() {
        filter.addEventListener('keyup', filterTasks);
    }

    // taskList.addEventListener('click', removeTask);

    // Clear Task Event  (wala pa)
    // clearBtn.addEventListener('click', clearTasks);

    // Filter Tasks Event (wala pa)
    // filter.addEventListener('keyup', filterTasks);
// }

//Get Task from Local Storage
    function getTask() {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }

        tasks.forEach(function(task) {
        // Create Li Element (kapag nakuha na siya)
        const li = document.createElement('li');

        // Add Class
        li.className = 'collection-item';

        // Create text node and append to Li
        li.appendChild(document.createTextNode(task));
        // li.appendChild(document.createTextNode(taskInput.value));
        // console.log(li);

        // Create New Link Element
        const link = document.createElement('a');

        // Add Class
        link.className = 'delete-item secondary-content';

        // Add Icon HTML
        link.innerHTML = '<i class="fa fa-remove"></i>';

        // Append the link to Li
        li.appendChild(link);

        // Append Li to UL
        taskList.appendChild(li);
        
        });
    }


// Add Task
function addTask(e) {
    // console.log('add task');
    // function addTask(e) {
        // Append Li to UL
       taskList.appendChild(li);

       console.log(taskInput.value);

    // Store in Local Storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear Input
    taskInput.value = '';
    // console.log(li);
    // }

    e.preventDefault();

    }

    // Store task in Local Storage
    function storeTaskInLocalStorage(task) {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
          tasks = [];
        } else {
          tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(task);
      
        localStorage.setItem('tasks', JSON.stringify(tasks));
      
      }

// Remove Task
function removeTask(e) {
    console.log(e.target);
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure you want to Delete?')) {
            e.target.parentElement.parentElement.remove();
            // Remove from Local Storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
        
    }
} 

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(function(task, index) {
      if(taskItem.textContent === task) {
       tasks.splice(index, 1);
      }
    });
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

// Clear Tasks
function clearTasks() {
    if(confirm('Are you sure?')) {
    taskList.innerHTML = '';
    // Clear from Local Storage
    clearTasksFromLocalStorage();
   }
}

// Clear Tasks from Local Storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
  }

// Filter Tasks
function filterTasks(e) {
    // console.log(e.target);
    const text = e.target.value.toLowerCase();
    console.log(text);

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}



//Day 18 app.js
// // Add Task
// function addTask(e) {
//     // console.log('add task');
//     if(taskInput.value === '') {             //para maprevent yun empty input ni user
//         alert('Add a Task');
//     } else {
//         // Create an Li Element
//         const li = document.createElement('li');
//         // Add Class
//         li.className = 'collection-item';
//         // Create text node and append to Li
//         li.appendChild(document.createTextNode(taskInput.value));
//         // console.log(li);

//         // Create New Link Element
//         const link = document.createElement('a');

//         // Add Class
//         link.className = 'delete-item secondary-content';

//         // Add Icont HTML
//         link.innerHTML = '<i class="fa fa-remove"></i>';

//         // Append the link to Li
//         li.appendChild(link);

//         // Append Li to UL
//         taskList.appendChild(li);

//         // Clear Input
//         taskInput.value = '';

//         // console.log(li);
//     }


//     e.preventDefault();
// // }









