'use strict';

const path = require('path');

module.exports = {
    context: path.join(__dirname, 'frontend'),
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.styl']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'frontend'),
            loader: 'babel?presets[]=es2015',
        }, {
            test: /\.jade$/,
            loader: 'jade'
        }, {
            test: /\.styl$/,
            loader: 'style!css!stylus?resolve url'
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]?[hash]'
        }],
    },

    devServer: {
        host: 'localhost', // default
        port: 8080, // default
        proxy: [{
            path: /.*/,
            target: 'http://localhost:3000'
        }],
        contentBase: path.join(__dirname, 'backend')
    }
};