'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '/frontend'),
    entry: {
        main: './main',
        //styles: './styles', // Можно подключить стили как точку входа и не импортировать их в других местах
    },
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.styl']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, '/frontend'),
            loader: 'babel?presets[]=es2015',
        }, {
            test: /\.jade$/,
            loader: 'jade'
        }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract('css!stylus?resolve url')
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }],
    },

    plugins: [
        new ExtractTextPlugin('[name].css', { allChunks: true }) // Вытаскивает стили в файл со всех скриптов, включая динамически подргужаемые
    ]
};