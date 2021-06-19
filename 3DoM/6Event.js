// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//     console.log('Hello World');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);


function onClick(e) {
    console.log('Clicked');

    let val;

    val = e;

    // Event Target Element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    // console.log(e);


    // Event Type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relative to the Element
    val = e.offSetY;
    val = e.offSetX;

    console.log(val);
   

}