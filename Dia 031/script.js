var wrapper = document.querySelector('.wrapper');
var numberOfDots = 10;
var oscillations = 30;
var duration = 30;


for (var i = 0; i <= numberOfDots; i++) {
    var dot = document.createElement('div');
    dot.className = `dot dot-${i}`;

    var time = duration / (oscillations + numberOfDots - i);
    dot.style.animation = `dot-animation ${time * 1000}ms ease-in-out infinite`;
    wrapper.appendChild(dot);
}