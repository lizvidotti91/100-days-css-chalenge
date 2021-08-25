const toggle = document.querySelector('.toggle');

function animate() {
    let lineOne = document.querySelector('.line-one');
    let lineTwo = document.querySelector('.line-two');
    let lineThree = document.querySelector('.line-three');

    toggle.classList.toggle('active');

    lineOne.classList.remove('no-animation');
    lineTwo.classList.remove('no-animation');
    lineThree.classList.remove('no-animation');

    lineOne.classList.toggle('animation-line-1');
    lineTwo.classList.toggle('animation-line-2');
    lineThree.classList.toggle('animation-line-3');
}

toggle.addEventListener('click', animate);