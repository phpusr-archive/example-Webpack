'use strict';

module.exports = {
    context: __dirname + '/frontend',
    entry: './app',

    output: {
        path: __dirname + '/public',
        filename: 'app.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            //exclude: /(node_modules|bower_components)/, // Отключение преобразования бабалем зависимостей
            include: __dirname + '/frontend', // Включение только той директории, которую нужно обрабатывать (можно массив указывать)
            loader: 'babel',
            query: {
                presets: ['es2015'],
            }
        }],

        noParse: /angular\\angular.js/ // Отключение парсинга больших библиотек, состоящих из одного файла
    }

};