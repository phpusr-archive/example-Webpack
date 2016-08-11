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
            test: /\.styl$/,
            loader: 'style-loader!css-loader!postcss-loader!stylus?resolve url'
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }],
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};