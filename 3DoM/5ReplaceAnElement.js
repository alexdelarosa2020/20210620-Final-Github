// Replace Element

const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'task-title';

// New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Get the Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove List Item
lis[0].remove();

// Remove Child Element
list.removeChild(lis[3]);

// Classes and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;



console.log(val); // gamitin kay attributes


// console.log(newHeading);