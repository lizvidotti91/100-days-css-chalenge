var input = document.querySelector('input');
var list = document.querySelector('.suggestions');
var btn = document.querySelector('button');

var modal = document.querySelector('.modal');
var item = document.querySelector('li');

var close = document.querySelector('.fa-times');

async function words() {
    list.innerHTML = '';
    var quest = input.value;
    await fetch(`https://api.dicionario-aberto.net/infix/${quest}`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            //console.log(res);
            if (res.status != 'error') {
                console.log(Object.keys(res).length);
                for (data in res) {
                    list.innerHTML += `<li onclick=meanings(this) data-id=${res[data].word} > ${res[data].word}</li > `;
                }
            } else {
                list.innerHTML = `< li > ${res.error}</li > `
            }
        });
}

async function meanings(e) {
    modal.innerHTML = '';
    var word = e.getAttribute("data-id");
    //console.log(word);
    await fetch(`https://api.dicionario-aberto.net/word/${word}`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            for (data in res) {
                modal.innerHTML += `<li> ${res[data].xml}</li > `;
            }
        });

    close.style.opacity = '100%';
    modal.style.height = '40%';
    modal.style.width = '60%';
}

function closeModal() {
    close.style.opacity = '0%';
    modal.style.height = '0';
    modal.style.width = '0';
}

btn.addEventListener('click', words);
input.addEventListener('keyup', () => btn.disabled = false);

document.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        btn.click();
    }
});

close.addEventListener('click', closeModal);