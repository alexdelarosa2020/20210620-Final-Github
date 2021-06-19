const name = 'John';
const age = 38;
const job = 'Web Developer';
const city = 'Manila';
let html;

// Line without template string(es5)

html = '<ul><li>Name: ' +
        name +
        ' </li><li>Age: ' +
        age +
        ' </li><li>Job: ' +
        job +
        ' </li><li>City: ' +
        city +
        ' </li></ul>';

    function hello() {
        return 'Hello';
    }
        // With template strings (es6)

html = ` <ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li>${hello()}</li>
            <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
         </ul>
        `;

    document.body.innerHTML = html;