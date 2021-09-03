const wrapper = document.querySelector('.wrapper');

const container = document.createElement('div');
container.classList.add('container');

wrapper.appendChild(container);

for (let i = 0; i < 40; i++) {
    let line = document.createElement('div');
    line.classList.add('line');
    container.appendChild(line);
}