const sky = document.querySelector('.sky');

function newElement(elem) {
    return document.createElement(elem);
}

for (let i = 1; i <= 10; i++) {
    let rainBig = newElement('div');
    rainBig.classList.add('rain-big');
    rainBig.classList.add('rain-' + i);

    let rainMedium = newElement('div');
    rainMedium.classList.add('rain-medium');
    rainMedium.classList.add('rain-' + i);

    let rainSmall = newElement('div');
    rainSmall.classList.add('rain-small');
    rainSmall.classList.add('rain-' + i);

    sky.appendChild(rainBig);
    sky.appendChild(rainMedium)
    sky.appendChild(rainSmall);
}