const dropdowns = document.querySelectorAll('.dropdown');
const icons = document.querySelectorAll('.arrow-icon');

dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('mouseenter', () => {
        icons[index].src='images/icon-arrow-up.svg';
    });

    dropdown.addEventListener('mouseleave', () => {
        icons[index].src = 'images/icon-arrow-down.svg';
    });
})