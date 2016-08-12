'use strict';

let Menu;
let pandaMenu;

function showMenu() {
    Menu = require('./menu').default;
    pandaMenu = new Menu({
        title: 'Меню панды',
        items: [{
            text: 'Яйца',
            href: '#eggs'
        }, {
            text: 'Мясо',
            href: '#meat'
        }, {
            text: '99% еды - бамбук.1',
            href: '#bamboo'
        }]
    });
    document.body.appendChild(pandaMenu.elem);
}
showMenu();

if (module.hot) { // Для того, чтобы в продакшэне код удалился
    module.hot.accept('./menu', () => {
        document.body.removeChild(pandaMenu.elem);
        showMenu();
    });
}

