const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// // Click
// clearBtn.addEventListener('click', runEvent);

// // Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);

// // Mouse Up
// clearBtn.addEventListener('mouseup', runEvent);

// // Mouse Enter
// clearBtn.addEventListener('mouseenter', runEvent);

// // Mouse Leave
// clearBtn.addEventListener('mouseleave', runEvent);

// // Mouse Over
// clearBtn.addEventListener('mouseover', runEvent);

// // Mouse Out
// clearBtn.addEventListener('mouseout', runEvent);

// Mouse Move
    clearBtn.addEventListener('mousemove', runEvent);

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}