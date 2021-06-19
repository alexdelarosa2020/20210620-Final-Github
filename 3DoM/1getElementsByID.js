// document.getElementByID();
console.log(document.getElementById('task-title'));

// Get thing from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = 'cyan';  //changing background color
taskTitle.style.color = '#fff';   // changing text color
taskTitle.style.padding = '5px';   

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// document.querySelector();
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('.h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';  //psuedo
document.querySelector('li:last-child(3)').style.color = 'green';  //psuedo
document.querySelector('li:last-child(4)').textContent = 'Hello World';  //psuedo
document.querySelector('li:last-child(odd)').style.background = 'lime';  //psuedo
document.querySelector('li:last-child(even)').style.background = 'yellow';  //psuedo