// Create some arrays
const numbers = [100, 43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ['Apple', 'Banana', 'Orange', 'Pears'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date ()];


let val;

// Get array length
val = numbers.length;
// Check if its array
val = Array.isArray(numbers);
// Get single value (Getting the index starts from zero 0)
val = numbers[3]
val = numbers[0]
// Insert into array
// numbers[2] = 100;
// Find index of value
val = numbers.indexOf(43);

// Mutating of Arrays
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice Values   (Note: from here to top console.log(numbers); ang gamitin)
// numbers.splice(0, 3);  
// Reverse and array
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);


// Sorting of array 
val = fruits.sort();
val = numbers.sort();        //sort niya first letter or number
// Use the compare function  //sort niya yun buong value to ascending
val = numbers.sort(function(x, y) {
    return x - y;
});
// Use the compare function  //sort niya yun buong value to descending
val = numbers.sort(function(x, y) {
    return y - x;
});
// Find (hahanapin yun pinakamataas ng value kasi over50 ang hinahanap)
function over50(num) {
return num > 50;
}

val = numbers.find(over50);

console.log(val);
