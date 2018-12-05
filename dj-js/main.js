var box = document.querySelector('.box');

var someFunction = function(event){
    // console.log(event);
    // could of used switch instead
    if (event.type == 'mouseover' || event.which == 66){
        box.style.backgroundColor = 'blue';
    } else if (event.type == 'mouseout') {
        box.style.backgroundColor = '';
    } else if (event.type == 'mousedown' || event.which == 82) {
        box.style.backgroundColor = 'red';
    } else if (event.type == 'mouseup' || event.which == 89) {
        box.style.backgroundColor = 'yellow';
    } else if (event.type == 'dblclick' || event.which == 71) {
        box.style.backgroundColor = 'green';
    } else if (event.type == 'wheel' || event.which == 79) {
        box.style.backgroundColor = 'orange';
    } 
}
box.addEventListener('mouseover', someFunction, false)
box.addEventListener('mouseout', someFunction, false)
box.addEventListener('mousedown', someFunction, false)
box.addEventListener('mouseup', someFunction, false)
box.addEventListener('dblclick', someFunction, false)
box.addEventListener('wheel', someFunction, false)

// in crhome eventListener did not capture some keys,b for example. But ctrl+b gets picked up... b & ctrl+b have the same which value...
window.addEventListener('keydown', someFunction, false)


// box.addEventListener('mouseover', 'keydown', function(e){
//     e.target.style.backgroundColor = 'blue';
// })

// box.addEventListener('mouseout', function(e){
//     e.target.style.backgroundColor = '';
// })

// box.addEventListener('mousedown', function(e){
//     e.target.style.backgroundColor = 'red';
// })

// box.addEventListener('mouseup', function(e){
//     e.target.style.backgroundColor = 'yellow';
// })

// box.addEventListener('dblclick', function(e){
//     e.target.style.backgroundColor = 'green';
// })
// window.addEventListener('wheel', function(e){
//     box.style.backgroundColor = 'orange';
// })




// // Setup our function to run on various events
// var someFunction = function (event) {
//     // Do something...
// };

// // Add our event listeners
// window.addEventListener('click', someFunction, false);
// window.addEventListener('mouseover', someFunction, false);