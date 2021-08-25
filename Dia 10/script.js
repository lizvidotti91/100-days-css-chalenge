const panel = document.querySelector('.panel');

function newElement(elem) {
    return document.createElement(elem);
}

for (let i = 1; i <= 15; i++) {
    let wrapperPoint = newElement('div');
    wrapperPoint.classList.add('wrapper-point');

    for (let j = 1; j <= 4; j++) {
        let point = newElement('div');
        point.classList.add(`point-${j}`);

        wrapperPoint.appendChild(point);
    }


    wrapperPoint.style.transform = `rotate(${(i / 60) * 360}deg)`;

    panel.appendChild(wrapperPoint);
}

const time = document.querySelector('.time');
const date = document.querySelector('.date');
const dayTime = document.querySelector('.day-time');

let today = new Date();
let hour = today.getHours();
let minute = today.getMinutes();
let week = today.getDay();
let day = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

switch (week) {
    case (0): date.innerHTML = 'DOM, '
        break;
    case (1): date.innerHTML = 'SEG, '
        break;
    case (2): date.innerHTML = 'TER, '
        break;
    case (3): date.innerHTML = 'QUA, '
        break;
    case (4): date.innerHTML = 'QUI, '
        break;
    case (5): date.innerHTML = 'SEX, '
        break;
    case (6): date.innerHTML = 'SAB, '
        break;
    default: console.log('Erro ao buscar dia da semana');
}

date.innerHTML += `${day} - ${month + 1} - ${year}`;
dayTime.innerHTML = `${hour} : ${minute}`;

