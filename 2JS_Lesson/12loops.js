// Part 1 (Old)
//(es5) mostly use are i, x, 1, a,
// si i is iikot at hanggat hindi niya natatapos yun <10 iikot lang siya hanggang matapos yun loop yun i++ naman na symbol yan magdadagdag kada ikot

// For Loop 
// for(let i = 0; i < 10; i++) {
//     if (i === 2) {
//         console.log('2 is my favorite number');
//         continue;
//     }
//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log(`Number ${i}`);
// }

// for(let i = 0; i < 10; i++) {
//     if (i === 2) {
//         console.log('2 is my favorite number');
//         continue;
//     }
//     if(i === 5){
//         console.log('Five the loop');
//         continue;
//     }
//     if(i === 7){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log(`Number ${i}`);
// }

// While Loop
// let i = 0;
// while(1 < 10) {
//     console.log(`Number ${i}`);
//     i++; // para hindi mag crash yun system huwag muna isave ilagay yun i++; para hindi maging infinite
// }

// // Do While
// let i = 0;

// do {
//     console.log(`Number ${i}`);
//     i++;
// }
// while(i < 10);

// Loop through Array

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// Foreach
// cars.forEach(function(cars, index, array) {
//     console.log(`${index} : ${cars}`);
//      console.log(array);
// });

// Map
const users = [{id: 1, name: 'John'}, 
                {id: 2, name: 'Sara'}, 
                {id: 3, name: 'Karen'}, 
                {id: 4, name: 'Steve'}];
const ids = users.map(function(user) {
    return user.name;
});

console.log(ids);

// For in Loop
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 28
};

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}