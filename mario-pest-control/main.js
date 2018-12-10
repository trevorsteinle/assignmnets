// var total = document.querySelector('total');

document.total.addEventListener("submit", function(e) {
    e.preventDefault();
    var goombacalc = total.goomba.value * 5;
    var bobombcalc = total.bobomb.value * 7;
    var koopatroopacalc = total.koopatroopa.value * 11;
    var wrapper = document.createElement('span');
    wrapper.setAttribute("id", "grandtotal");
    
    if (document.contains(document.getElementById("grandtotal"))) {
        document.getElementById("grandtotal").remove();
    }   else {
    document.total.appendChild(wrapper);  
    }
    var calc = goombacalc + bobombcalc + koopatroopacalc; 
    wrapper.textContent = calc;
    document.total.appendChild(wrapper);
})