const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear Input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener

// KeyDown
// taskInput.addEventListener('keydown', runEvent);

// KeyUp
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input
taskInput.addEventListener('input', runEvent);



function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    console.log(`${e.target.value}`);

    heading.innerHTML = e.target.value;

// Get Input Value
    console.log(taskInput.value); //lalabas yun type mo na value

    e.preventDefault();

}

