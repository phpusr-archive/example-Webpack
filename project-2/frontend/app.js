'use strict';

document.getElementById('loginButton').onclick = function() {

    require.ensure([], function() {
        let login = require('./login');
        login();
    });

};