'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',
    entry: {
        app: './app',
    },
    output: {
        path: __dirname + '/public/js',
        publicPath: '/js/', // Путь по которому браузер будет искать скрипты, т.к. некоторые будут подргужаться динамически
        filename: '[name].js'
    },

    watch: false,

    watchOptions: { // Опция для ускорения пересборки
        aggregateTimeout: 100 // default: 300
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

};