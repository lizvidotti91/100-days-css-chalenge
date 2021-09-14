// var list = window.document.querySelector('.list');

function newElement(element) {
    return window.document.createElement(element);
}
//Para substituir esse código coloquei um if... else if... else...
// for (var i = 1; i <= 10; i++) {
//     var newItem = newElement('li');
//     newItem.innerHTML = `
//             <a class="btn-home" href="./Dia 0000${i}/index.html">Dia #${i}</a>
//         `;
//     list.appendChild(newItem);
// }

// for (var i = 1; i <= 21; i++) {
//     if (i < 10) {
//         var newItem = newElement('li');
//         newItem.innerHTML = `
//                  <a class="btn-home" href="./Dia 00${i}/index.html">Dia #00${i}</a>
//         `;
//         list.appendChild(newItem);
//     } else if (i >= 10 && i < 100) {
//         var newItem = newElement('li');
//         newItem.innerHTML = `
//                  <a class="btn-home" href="./Dia 0${i}/index.html">Dia #0${i}</a>
//         `;
//         list.appendChild(newItem);
//     } else {
//         var newItem = newElement('li');
//         newItem.innerHTML = `
//                  <a class="btn-home" href="./Dia ${i}/index.html">Dia #${i}</a>
//         `;
//         list.appendChild(newItem);
//     }
// }//Assim o código modifica conforme o dia até a casa das centenas

// Paginação

var list = new Array();
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 5;
var numberOfPages = 0;

function makeList() {
    for (var i = 1; i <= 21; i++) {
        if (i < 10) {
            var newItem = `
                 <li> <a class="btn-home" href="./Dia 00${i}/index.html">Dia #00${i}</a> </li>
            `;
            list.push(newItem);
        } else if (i >= 10 && i < 100) {
            var newItem = `
                 <li> <a class="btn-home" href="./Dia 00${i}/index.html">Dia #00${i}</a> </li>
            `;
            list.push(newItem);
        } else {
            var newItem = `
                 <li> <a class="btn-home" href="./Dia 00${i}/index.html">Dia #00${i}</a> </li>
            `;
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