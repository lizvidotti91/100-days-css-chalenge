var number = document.querySelector('.number');
var count = 0;

number.innerHTML = count;

function plus() {
    // Tiro a animação do número
    number.style.animation = '';

    // Incrementa o contador
    number.innerHTML = ++count;

    // intervalo de 5ms para animar o número
    setTimeout(() => number.style.animation = 'blink-number 1s linear', 5);
}

function subtraction() {
    // Tiro a animação do número
    number.style.animation = '';

    // Decrementa o contador
    number.innerHTML = --count;

    // intervalo de 5ms para animar o número
    setTimeout(() => number.style.animation = 'blink-number 1s linear', 5);
}

document.querySelector('.less').addEventListener('click', subtraction)

document.querySelector('.plus').addEventListener('click', plus);