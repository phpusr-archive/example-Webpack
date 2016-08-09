'use strict';

document.getElementById('loginButton').onclick = function() {

    require.ensure([], function() {
        let login = require('./login');
        login();
    }, 'auth');

};

document.getElementById('logoutButton').onclick = function() {

    require.ensure([], function() {
        let logout = require('./logout');
        logout();
    }, 'auth');

};