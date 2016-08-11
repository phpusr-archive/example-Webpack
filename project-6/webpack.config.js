'use strict';

let path = require('path');
let autoprefixer = require('autoprefixer');

module.exports = {
    context: path.join(__dirname, '/frontend'),
    entry: './main',
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: '[name].js'
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
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/, // loader для файлов, при длине файла < 4096 байт, используется data url
            loader: 'url?name=[path][name].[ext]&limit=4096'
        }],
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};