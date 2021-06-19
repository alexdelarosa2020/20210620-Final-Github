// Function Declarations

// kapag yun firstName at lastName eh may nilagay ng pangalan ibig sabhin naka default na siya
function greet(firstName = 'John', lastName = 'Doe') {
    if(typeof firstName === 'undefined') {
        firstName = 'John';
    } if(typeof lastName === 'undefined') {
        lastName = 'Doe';
    }
    console.log('Hello');
    return `Hello ${firstName} ${lastName}`;

}

console.log(greet());

// Function Expression

const square = function(x = 100) {
    return x * 2;
}
console.log(square());

// Immediately invokable function expression - IIFE's
//() (); first parethesis refers to the first ()
//   second () refers to the function that runs
// (kailangan iedit)
 (function() {
     console.log('IFFE Run...');
})();

    (function(name) {
        console.log(name);
    })('Bob');




// Property Methods
const todo = {
    add: function() {
        console.log('Add todo...');
    },
    edit: function(id) {
        console.log(`Edit todo $(id)`);
    }
}

todo.delete = function() {
    console.log('Delete Todo...');
}

todo,add();
todo.edit(100);
todo.delete();



const todo = {
    add: function() {
        console.log('Add todo...');
    },
    edit: function(id = 100) {
        console.log(`Edit todo $(id)`);
        return `Edit todo $(id)`;
    }
}
console.log(todo.edit());