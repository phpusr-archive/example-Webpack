'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'frontend'),
    entry: {
        main: ['./main'] // webpack-dev-server --inline --hot
        //main: ['webpack-dev-server/client', 'webpack/hot/dev-server', './main']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: '[name].js',
        library: '[name]'
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
            loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]' // Обновление благодаря hash
        }],
    },

    plugins: [
        new ExtractTextPlugin('[name].css', { allChunks: true, disable: process.env.NODE_ENV == 'development' })
        //new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: path.join(__dirname, 'backend'),
        hot: true
    }
};