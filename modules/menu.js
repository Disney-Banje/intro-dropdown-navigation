const companyDropdown = [
    'History',
    'Our Team',
    'Blog'
];

const featuresDropdown = [
    {
        icon: 'images/icon-todo.svg',
        name: 'Todo List'
    },
    {
        icon: 'images/icon-calendar.svg',
        name: 'Calendar'
    },
    {
        icon: 'images/icon-reminders.svg',
        name: 'Reminders'
    },
    {
        icon: 'images/icon-planning.svg',
        name: 'Planning'
    }
];


export function dropdonwMenu(index) {
    const drodownWrapper = document.createElement('article');
    drodownWrapper.classList.add('dropdown-menu');

    const ul = document.createElement('ul');

    if (index === 1) {
        featuresDropdown.forEach(feature => {
            const li = document.createElement('li');
            const iconElement = document.createElement('img');
            iconElement.src = feature.icon;
            iconElement.alt = `${feature.name} icon`;
            const tag = document.createElement('span');
            tag.textContent = feature.name;

            li.appendChild(iconElement);
            li.appendChild(tag);

            ul.appendChild(li);
        });
    } else {
        companyDropdown.forEach(element => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = "#";
            link.textContent = element;
            li.appendChild(link);

            ul.appendChild(li);
        });
    }

    drodownWrapper.appendChild(ul);

    return drodownWrapper;
}