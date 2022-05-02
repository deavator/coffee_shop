// menu lay out
const   menu = document.querySelector('.navbar'),
        menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});

menu.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('fa-times');
});
