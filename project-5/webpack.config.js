'use strict';

module.exports = {
    context: __dirname + '/frontend',
    entry: './home',

    output: {
        path: __dirname + '/public',
        filename: 'home.js'
    },

    module: {
        loaders: [{
            test: /old.js$/,
            loader: "imports?workSettings=>{delay:500}!exports?Work"
        }]
    },

    resolve: {
        root: __dirname + '/vendor', // Задает директорию для поиска скриптов помимо node_modules
        alias: {
            old: 'old/dist/old' // Задает алиас "old" вместо "old/dist/old" для использования модуля
        }
    }

};