'use strict';

exports.showMenu = function() {

    require.ensure([], function() {
        let Menu = require('./menu').default;

        let pandaMenu = new Menu({
            title: 'О сайте 2',
            items: [{
                text: 'Кто придумал?',
                href: '#think'
            }, {
                text: 'Кто сделал?',
                href: '#do'
            }, {
                text: 'Кто оплатил?',
                href: '#pay'
            }]
        });

        document.body.appendChild(pandaMenu.elem);
    });

};

