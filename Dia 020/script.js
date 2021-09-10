let btnSend = document.querySelector('.send');
let btnReset = document.querySelector('.reset');

let circle = document.querySelector('.circle');
let mail = document.querySelector('.mail');
let plane = document.querySelector('.plane');

function animate() {
    circle.classList.add('animate');
    mail.classList.add('animate');
    plane.classList.add('animate');

    btnSend.classList.add('animate');
    btnReset.classList.add('animate');
}

function reset() {
    circle.classList.remove('animate');
    mail.classList.remove('animate');
    plane.classList.remove('animate');

    btnSend.classList.remove('animate');
    btnReset.classList.remove('animate');
}

btnSend.addEventListener('click', animate);
btnReset.addEventListener('click', reset);