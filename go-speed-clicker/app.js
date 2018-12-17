clicky = document.querySelector('span');
var clicks = localStorage.getItem('clickCount') || 0;
var button = document.querySelector('button');

clicky.textContent = clicks;

document.addEventListener('click', function(e){
    if (e.target.id === 'reset'){
        clicks = 0;
    }else {
    clicks++;
    }
    localStorage.setItem('clickCount', clicks);
    clicky.textContent = clicks;
})