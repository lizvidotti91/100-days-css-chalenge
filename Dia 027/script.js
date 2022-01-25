var header = document.querySelector('.header');

function currentMonth(month) {
    switch (month) {
        case 0: return 'janeiro';
            break;
        case 1: return 'fevereiro';
            break;
        case 2: return 'março';
            break;
        case 3: return 'abril';
            break;
        case 4: return 'maio';
            break;
        case 5: return 'junho';
            break;
        case 6: return 'julho';
            break;
        case 7: return 'agosto';
            break;
        case 8: return 'setembro';
            break;
        case 9: return 'outubro';
            break;
        case 10: return 'novembro';
            break;
        case 11: return 'dezembro';
            break;
        default: 'invalid';
    }
}

function currentDayWeek(day_week) {
    switch (day_week) {
        case 0: return 'domingo';
            break;
        case 1: return 'segunda-feira';
            break;
        case 2: return 'terça-feira';
            break;
        case 3: return 'quarta-feira';
            break;
        case 4: return 'quinta-feira';
            break;
        case 5: return 'sexta-feira';
            break;
        case 6: return 'sábado';
            break;
        default: 'invalid';
    }
}

function currentTime() {
    var data = new Date();
    var day_month = data.getDate();
    var month = data.getMonth();
    var year = data.getFullYear();
    var day_week = data.getDay();

    header.innerHTML = `
        ${currentDayWeek(day_week)}
        <span> ${day_month} de ${currentMonth(month)} de ${year} </span>
    `;
}

window.onload = currentTime();