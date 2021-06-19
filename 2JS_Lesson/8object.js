const person = {    //object literal meaning meron na siyang value
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'smith@gmail.com',
    hobbies: ['coding', 'music'],
    address: {
        city: 'Manila',
        street: 'Pearl'
    },
    getBirthYear: function() {
        return 2021 - this.age;
    }
}

let val;
Math.ceil()
val = person;
// Get the specific value
val = person.firstName;
val = person.age;
val = person.getBirthYear();
val = person.address.city;
val = person.address['city'];
val = person.hobbies[0]; //naghahanap by index base

const people = [{name: 'John', age: 38}, {name: 'Mike', age: 20}, {name: 'Alvin', age: 28}]; 
//[]array can put  any
// Loop= ginagamit para makita yun sa array na madameng pinagsama na data. it has 3 parameter
// 1. input variable i=is mag handle ng value
// 2. condition or argument if true mangyari ang dapat na mangyari
for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}


console.log(val);

