// Paginação Home

var list = new Array();
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 5;
var numberOfPages = 0;

function makeList() {
    // Lista dos botões para cada dia do desafio
    for (var i = 1; i <= 23; i++) {
        // Se o dia é entre o 1 e 10
        if (i < 10) {
            var newItem = `
                 <li> <a class="btn-home" href="./Dia 00${i}/index.html">Dia #00${i}</a> </li>
            `;
            // Colocar cada dia em uma posição do array
            list.push(newItem);
            // Se o dia é entre 10 e 100
        } else if (i >= 10 && i < 100) {
            var newItem = `
                 <li> <a class="btn-home" href="./Dia 0${i}/index.html">Dia #00${i}</a> </li>
            `;
            // Colocar cada dia em uma posição do array
            list.push(newItem);
            // Exceção
        } else {
            var newItem = `
                 <li> <a class="btn-home" href="./Dia 00${i}/index.html">Dia #00${i}</a> </li>
            `;
            // Colocar cada dia em uma posição do array
            list.push(newItem);
        }
    }
    numberOfPages = getNumberOfPages();
}

function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

function nextPage() {
    currentPage = currentPage + 1;
    loadList();
}

function previousPage() {
    currentPage = currentPage - 1;
    loadList();
}

function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();
    check();
}

function drawList() {
    var drawList = window.document.querySelector('.list');
    drawList.innerHTML = '';
    for (x = 0; x < pageList.length; x++) {
        drawList.innerHTML += `${pageList[x]}`;
    }
}

function check() {
    var next = window.document.getElementById('next');
    var previous = window.document.getElementById('previous');

    next.disabled = currentPage == numberOfPages ? true : false;
    previous.disabled = currentPage == 1 ? true : false;
}

function load() {
    makeList();
    loadList();
}

window.load = load();