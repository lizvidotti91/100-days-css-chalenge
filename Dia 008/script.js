const menuButton = document.querySelector(".fa-bars");
const searchButton = document.querySelector(".fa-search");

function showMenu() {
    let sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle("active");
}

function showSearch() {
    let inputSearch = document.querySelector(".search");
    inputSearch.classList.toggle("active");
}

menuButton.addEventListener('click', showMenu);
searchButton.addEventListener('click', showSearch);