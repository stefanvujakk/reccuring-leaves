let hamburgerButton = document.querySelector('#hamburgerButton');
let dropDownMenu = document.querySelector('#dropDownMenu');

document.querySelector('#hamburgerButton').addEventListener('click', (e) => {

    dropDownMenu.classList.toggle("open");
});

document.addEventListener('click', (e) => {


    if(!dropDownMenu.contains(e.target) && !hamburgerButton.contains(e.target)) {
        dropDownMenu.classList.remove('open');
    }
});