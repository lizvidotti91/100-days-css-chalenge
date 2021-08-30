const gallery = document.querySelector('.gallery');
const btnPlus = document.querySelector('.btn-plus');
const btnClose = document.querySelector('.btn-close');

// Array com alguns nomes de usuários dos meus amigos no Github
const profiles = ['AlbusQuercus94', 'plgisele', 'romulocraveiro', 'huduarte'];

// Gerar galeria
for (let i = 1; i <= 4; i++) {
    let profile = document.createElement('div');
    let button = document.createElement('div');

    profile.classList.add('profile');
    profile.innerHTML = `<img src="https://github.com/${profiles[i - 1]}.png"/>`;

    button.classList.add('btn-plus');
    button.id = `profile-${i}`;
    button.innerHTML = "<i class='fas fa-plus'></i>";

    // Função abrir detalhes do perfil
    button.onclick = function () {
        let id = this.id
        showProfile(id);
    }

    profile.appendChild(button);
    gallery.appendChild(profile);
}

function showProfile(id) {
    const picProfile = document.querySelector('.pic-profile');
    const banner = document.querySelector('.banner');
    const content = document.querySelector('.content');
    var nameProfile = document.querySelector('.name-profile');

    // Pego o Id do elemento clicado
    var buttonId = id;
    // Quebro a string para que apareça apenas o número
    var number = buttonId.split('-', 2)[1];

    // A posição da imagem no array de amigos do github
    picProfile.style.backgroundImage = `url("https://github.com/${profiles[number - 1]}.png")`;

    btnClose.classList.add('active');
    picProfile.classList.add('active');
    banner.classList.add('active');
    content.classList.add('active');

    nameProfile.innerHTML = profiles[number - 1];
}

btnClose.addEventListener('click', function () {
    const picProfile = document.querySelector('.pic-profile');
    const banner = document.querySelector('.banner');
    const content = document.querySelector('.content');

    btnClose.classList.remove('active');
    picProfile.classList.remove('active');
    banner.classList.remove('active');
    content.classList.remove('active');
})