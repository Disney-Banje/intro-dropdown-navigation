import { dropdownMenu } from './modules/menu.js';

const dropdowns = document.querySelectorAll('.dropdown');
const icons = document.querySelectorAll('.arrow-icon');
const navigationBtn = document.querySelector('.navigation-btn');
const navMenu = document.querySelector('nav');



// Event listeners for the desktop dropdown menu
dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('mouseenter', (event) => {
        event.stopPropagation();
        icons[index].src='images/icon-arrow-up.svg';
        dropdowns[index].appendChild(dropdownMenu(index + 1)); // Applying the adequate menu to the specific dropdown
    });

    dropdown.addEventListener('mouseleave', () => {
        icons[index].src = 'images/icon-arrow-down.svg';
        dropdowns[index].lastElementChild.remove(); // Removing the menu after leaving the dropdown element..
    });
});



function createFloatingMenu() {  // create the mobile menu wrapper
    const floatingMenu = document.createElement('div');
    floatingMenu.classList.add('floating-menu');

    const closeIcon = document.createElement('button');
    closeIcon.classList.add('close-icon');
    closeIcon.innerHTML = `<img src="images/icon-close-menu.svg" alt="Close icon" />`;
    closeIcon.onclick = () => floatingMenu.remove();

    const cloneNavMenu = navMenu.cloneNode(true);
    cloneNavMenu.classList.add('float-active');
    
    const clonedropdowns = cloneNavMenu.querySelectorAll('.dropdown');
    const clonedIcons = cloneNavMenu.querySelectorAll('.arrow-icon');

    clonedropdowns.forEach((dropdown, index) => {

        let menuOpen = false; // State tracker for each dropdown
        let menuElement = null; // Store reference to created menu
    
        //  event listeners for the mobile dropdown menu...
        dropdown.addEventListener('click', (event) => {
            event.stopPropagation();
            
            // Toggle the state first
            menuOpen = !menuOpen;
            
            // Update arrow icon
            const icon = clonedIcons[index];
            icon.src = menuOpen ? 'images/icon-arrow-up.svg' : 'images/icon-arrow-down.svg';
            
            // Toggle menu
            if (menuOpen) {
                // Create and store menu reference
                menuElement = dropdownMenu(index + 1);
                dropdown.appendChild(menuElement);
            } else {
                // Remove using stored reference
                if (menuElement) {
                    menuElement.remove();
                    menuElement = null;
                }
            }
        });
    });

    floatingMenu.appendChild(closeIcon);
    floatingMenu.appendChild(cloneNavMenu);

    return floatingMenu;
}

// console.log(createFloatingMenu());



navigationBtn.addEventListener('click', (event) => {
    console.log('menu clicked');
    const menu = createFloatingMenu();
    document.body.appendChild(menu);
});