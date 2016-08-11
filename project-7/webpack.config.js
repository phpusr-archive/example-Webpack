'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rimraf = require('rimraf');

module.exports = {
    context: path.join(__dirname, '/frontend'),
    entry: {
        home: './home',
        about: './about',
        common: './common',
    },
    output: {
        path: path.join(__dirname, '/public/assets'),
        publicPath: '/assets/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        library: '[name]'
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
            //loader: 'style!css!stylus?resolve url'
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }],
    },

    plugins: [
        { // Кастомный плагин, удаляет файлы от сборки, перед новой сборкой
            apply: (compiler) => {
                rimraf.sync(compiler.options.output.path);
            }
        },
        new ExtractTextPlugin('[name].css', { allChunks: true }),
        new webpack.optimize.CommonsChunkPlugin({ //TODO общие стили не выносятся
            name: 'common'
        })
    ]
};