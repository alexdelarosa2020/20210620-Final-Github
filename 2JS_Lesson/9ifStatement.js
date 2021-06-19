const id = 100;

// Equal to (symbol ==)(Correct)
if(id == 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Not equal (symbol !=) incorrect
if(id != 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Equal to value and type (Symbol ===)(hinahanap yun data type or value ===)
if(id === '100') {
    console.log('Correct');
} else {
    console.log('Incorrect');
}
// Equal to value and type (symbol !==)
if(id !== '100') {
    console.log('Correct');
} else {
    console.log('Incorrect');
}
// Test If undefined (symbol typeof id !==)
if (typeof id !== 'undefined') {
    console.log(`The ID is ${id}`);
} else {
    console.log('NO ID');
}

// Greater or Less than (<= less than equal to)
if(id <= 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

const color = 'Blue';
if(color === 'Red') {
console.log('Color is Red');
} else if(color === 'Blue') {
    console.log('Color is Blue');
} else {
    console.log('Color is not Red or Blue');
}