var btnSort = document.querySelector('.btn-sort');
var card = document.querySelector('.card');
var cardText = document.querySelector('.text');
var cardNumber = document.querySelector('.number');

var frases = [
    'O amor é o que nos une, através de tempos bons ou ruins.',
    'Os sonhadores precisam dos realistas para não voarem perto demais do sol. E os realistas, sem os sonhadores, poderiam nunca levantar voo.',
    'Dizemos aos nossos filhos que não importa ganhar ou perder, mas vamos ser sinceros, ganhar é muito bom.',
    'É difícil dizer adeus. Sempre é. Ninguém gosta de mudanças, mas aprender a mudar, faz parte da vida.',
    'Uma vez ou outra, não tenha medo de quebrar as regras. Nunca se sabe o que pode acontecer.',
    'Fazemos coisas estranhas pelas pessoas que amamos.',
    'O amor não conhece raça, crença ou sexo.',
    'As coisas mais incríveis que podem acontecer com um ser humano vai acontecer com você, basta ter baixas expectativas.',
    'Se você ama algo, deixe-o  livre. A menos que seja um tigre.',
    'Sucesso é 1% inspiração, 98% transpiração e 2% atenção aos detalhes.',
    'Sempre olhe as pessoas nos olhos, mesmo que seja cega. Apenas diga: "estou te olhando nos olhos."',
    'Um sábio uma vez me disse: "Eu não entendo, mas, se você é assim, não se atreva a sentir vergonha de si mesmo".'
];

function numberSort(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function sortFrase() {
    var random = numberSort(0, frases.length);
    var frase = frases[random];

    cardText.innerHTML = frase;
    cardNumber.innerHTML = random;
    //console.log(frase, random);
}

function noAnimation() {
    card.style.animation = 'none';
}

function changeCard() {
    setTimeout(noAnimation, 1000);
    card.style.animation = 'changeCard 1s linear';
}

function showCard() {
    card.style.animation = 'showCard 1s linear';
}

window.onload = sortFrase();
window.onload = showCard();
btnSort.addEventListener('click', changeCard);
btnSort.addEventListener('click', () => {
    setTimeout(sortFrase, 500);
});