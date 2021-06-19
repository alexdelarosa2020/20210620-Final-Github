// Event Bubbling

// document.querySelector('.card-action').addEventListener('click', function() {
//     console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click', function() {
//     console.log('card content');
// });
// document.querySelector('.card').addEventListener('click', function() {
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
    // console.log('col');
// });

// Event Deligation (target niya yun materialize-icon na close)

const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);  //siya yun a-tag parent lang ang pwede idelete)

document.body.addEventListener('click', deleteItem); //dalawa yun lalabas kapag pinindot sa body yun delete niya

function deleteItem(e) {
    // console.log(e.target);
    // if(e.target.parentElement.className === 'delete-item secondary-content') {
    //     console.log('delete item');
    // }
    if(e.target.parentElement.classList.contains('delete-item')) {   //delete niya lahat yun materialize icon na close 
        console.log('delete-item');
        e.target.parentElement.parentElement.remove();
    }
}