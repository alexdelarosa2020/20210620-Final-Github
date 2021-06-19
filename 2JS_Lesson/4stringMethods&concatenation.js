// String Methods & Concatination
const firstName = 'William';
const lastName = 'Johnsons';
const age = 38;
const str = 'Hello there my name is Alex';
const tags = 'Wev Dev, Deb Design, Programming'

let val;

val = firstName + lastName;

// Concatination
val = firstName + ' ' + lastName;

// Append
val = 'Bobby ';
val += 'Ferrer';

val = 'Hello my name is ' + firstName + ' and i am ' + age;

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;
val = lastName.length;

// Concat()
val = firstName.concat(' ', lastName);

val = firstName.toLowerCase();
val = firstName.toUpperCase();

val = firstName[0];

// indexof()
val = firstName.indexOf('W');
val = firstName.lastIndexOf('m');

// charat()
val = firstName.charAt('3');

// Get last char
val = firstName.charAt(firstName.lenght -2);

// Substring()
val = firstName.substring(3, 6);

// Slice()
val = firstName.slice(1, 6);
val = firstName.slice(-3);

// Split
val = str.split(' ');
val = str.split('');

// Replace
val = str.replace('Alex', 'Angel');

// Includes
val = str.includes('alex');

console.log(val)