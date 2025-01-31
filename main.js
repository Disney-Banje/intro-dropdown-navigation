import { dropdonwMenu } from './modules/menu.js';

const dropdowns = document.querySelectorAll('.dropdown');
const icons = document.querySelectorAll('.arrow-icon');
const navigationBtn = document.querySelector('.navigation-btn');
const navMenu = document.querySelector('nav');

dropdowns[0].appendChild(dropdonwMenu(1));
dropdowns[1].appendChild(dropdonwMenu(2));

const dropdonwArticles = document.querySelectorAll('.dropdown-menu');


dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('mouseenter', (event) => {
        event.stopPropagation();
        icons[index].src='images/icon-arrow-up.svg';
    });

    dropdown.addEventListener('mouseleave', () => {
        icons[index].src = 'images/icon-arrow-down.svg';
    });
});



function createFloatingMenu() {
    const floatingMenu = document.createElement('div');
    floatingMenu.classList.add('floating-menu');

    const closeIcon = document.createElement('button');
    closeIcon.classList.add('close-icon');
    closeIcon.innerHTML = `<img src="images/icon-close-menu.svg" alt="Close icon" />`;
    closeIcon.onclick = () => floatingMenu.remove();

    navMenu.style.display = 'block';

    floatingMenu.appendChild(closeIcon);
    floatingMenu.appendChild(navMenu);

    return floatingMenu;
}

console.log(createFloatingMenu());



navigationBtn.addEventListener('click', (event) => {
    console.log('menu clicked');
    const menu = createFloatingMenu();
    document.body.appendChild(menu);
})