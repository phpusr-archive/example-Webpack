'use strict';

require.ensure([], function() {
    let Menu = require('./menu').default;

    let pandaMenu = new Menu({
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
});
