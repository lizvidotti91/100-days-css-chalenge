var list = window.document.querySelector('.list');

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

for (var i = 1; i <= 10; i++) {
    if(i<10){
        var newItem = newElement('li');
        newItem.innerHTML = `
                 <a class="btn-home" href="./Dia 00${i}/index.html">Dia #00${i}</a>
        `;
         list.appendChild(newItem);
    }else if(i>=10 && i<100){
        var newItem = newElement('li');
        newItem.innerHTML = `
                 <a class="btn-home" href="./Dia 0${i}/index.html">Dia #0${i}</a>
        `;
         list.appendChild(newItem);
    }else{
        var newItem = newElement('li');
        newItem.innerHTML = `
                 <a class="btn-home" href="./Dia ${i}/index.html">Dia #${i}</a>
        `;
         list.appendChild(newItem);
    }
}//Assim o código modifica conforme o dia até a casa das centenas