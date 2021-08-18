var list = window.document.querySelector('.list');

function newElement(element) {
    return window.document.createElement(element);
}

for (var i = 1; i <= 5; i++) {
    var newItem = newElement('li');
    newItem.innerHTML = `
            <a class="btn-home" href="./Dia ${i}/index.html">Dia #${i}</a>
        `;
    list.appendChild(newItem);
}