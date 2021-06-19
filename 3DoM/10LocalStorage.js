// Local Storage (Object sa loob ng JavaScript or Small DataBase)

// Set Local Storage Item
localStorage.setItem('name', 'John');  //we need to add to parameter at dapat nasa loob ng string '
localStorage.setItem('age', '30');  //we need to add to parameter at dapat nasa loob ng string '

// Set Session Storage Item
sessionStorage.setItem('name', 'Beth');

// Remove from Storage (buburahin isa isa yun binibigay na value)
localStorage.removeItem('tasks');  // only 1 parameter
localStorage.removeItem('name');  // only 1 parameter
localStorage.removeItem('age');  // only 1 parameter


// Get from Local Storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

console.log(name, age);

// Clear Local Storage
// localStorage.clear();  //(Kapag pinindot yun clear task mawawala laht yun data sa local storage)


// kukunin yun input value ni user
document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;
    console.log(task);

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')); //JSON = JavaScript Object Notaion
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task Saved');
    tasks.forEach(function(task) {
        console.log(task);
    });


    e.preventDefault();
});