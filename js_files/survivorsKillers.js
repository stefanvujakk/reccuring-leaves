let basics = document.querySelectorAll('.basic');
let cathegories = document.querySelectorAll('.cathegory');

basics.forEach(basic => {
    basic.addEventListener('click', () => {
        basic.parentElement.querySelector('.actual').classList.toggle("open");
    });
});

cathegories.forEach(cathegory => {
    cathegory.addEventListener('click', () => {
        cathegory.nextElementSibling.classList.toggle("open");
    });
});

