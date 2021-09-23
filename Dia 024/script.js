var btnSend = document.querySelector('.btn-send');
var circle = document.querySelector('.circle');
var check = false;

function sending() {
    btnSend.classList.toggle('sending');
    circle.classList.toggle('active');

    if (!check) {
        btnSend.innerHTML = `<i class="fas fa-check"></i>`;
        check = true;
    } else {
        btnSend.innerHTML = `Enviar`;
        check = false;
    }
}

btnSend.addEventListener('click', sending);