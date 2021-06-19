// Create Element
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Add ID
li.id = 'new-item';

// Add Attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create New Link Element
const link = document.createElement('a');

// Add Classes
link.className = 'delete-item secondary-content';

// Add Icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
