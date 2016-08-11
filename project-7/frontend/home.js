'use strict';

exports.showMenu = function() {

    require.ensure([], function() {
        let Menu = require('./menu').default;

        let menu = new Menu({
            title: 'Комнаты дома',
            items: [{
                text: 'Детская',
                href: '#childrenroom'
            }, {
                text: 'Кухня',
                href: '#kitchen'
            }, {
                text: 'Гостинная',
                href: '#guestroom'
            }]
        });

        document.body.appendChild(menu.elem);
    });

};
