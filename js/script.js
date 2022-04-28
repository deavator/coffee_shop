// menu lay out
const   menu = document.querySelector('.navbar'),
        menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});