let val;

const list = document.querySelector.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[3].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribure Deprecated attribute hindi na nagana or paso na
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get Children Element Nodes
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count Child Elements
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;  //returns the parent
val = listItem.parentElement; //returns the parent element
val = listItem.parentElement.parentElement; // pinaka magulang

// Get Next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; //kapag gusto bumalik sa nakaraan

// Get Previous Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);
// console.log(listItem);

