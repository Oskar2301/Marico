document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.burger_menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});