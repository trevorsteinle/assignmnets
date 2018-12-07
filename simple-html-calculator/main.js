var add = document.addition.ad1.value;
var subtract = document.querySelector('subtract');
var multiply = document.querySelector("multiply");
console.log(multiply);


document.addition.addEventListener("submit", function(e) {
    e.preventDefault();
    var calc = +document.addition.ad1.value + +document.addition.ad2.value;
    // console.log(calc);
    var wrapper = document.createElement('span');
    wrapper.textContent = calc;
    document.addition.appendChild(wrapper);
})

document.subtract.addEventListener("submit", function(e) {
    e.preventDefault();
    var calc = +document.subtract.sub1.value - +document.subtract.sub2.value;
    var wrapper = document.createElement('span');
    wrapper.textContent = calc;
    document.subtract.appendChild(wrapper);
})

document.multiply.addEventListener("submit", function(e) {
    e.preventDefault();
    var calc = +document.multiply.mult1.value * +document.multiply.mult2.value;

    var wrapper = document.createElement('span');
    wrapper.textContent = calc;
    // wrapper.appendChild(calc);
    document.multiply.appendChild(wrapper);
})