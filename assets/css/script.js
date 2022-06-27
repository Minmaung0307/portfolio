const menu = document.querySelector('#humburger-menu');
const menuLink = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
})