var header = document.querySelector('.header');
var inputFile = document.querySelector('#upload-file');
var fileChosen = document.querySelector('.file-chosen');
var buttonUpload = document.querySelector('.btn-upload');

var fileName = '';
var loadingIcon = '<i class="fas fa-spinner"></i>';
var checkIcon = '<i class="fas fa-check"></i>';

var barLoading = document.createElement('div');
barLoading.classList.add('bar-load');

function changeFileChosen(file) {
    fileChosen.classList.add('active');
    fileName = inputFile.files[0].name;
    fileChosen.innerHTML = fileName;
}

function uploading() {
    if (fileName != '') {
        buttonUpload.innerHTML = 'Carregando...';
        fileChosen.innerHTML = loadingIcon;
        header.appendChild(barLoading);
        fileName = '';

        setTimeout(stopLoading, 2000);
    }
}

function stopLoading() {
    buttonUpload.innerHTML = 'Arquivo completo!';
    fileChosen.innerHTML = checkIcon;
}

inputFile.addEventListener('change', changeFileChosen);
buttonUpload.addEventListener('click', uploading);