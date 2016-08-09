'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',
    entry: {
        home: './home',
        about: './about',
        common: ['./welcome', './common'] // Экспортируется только последний
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        library: '[name]'
    },

    watch: NODE_ENV == 'development',

    watchOptions: { // Опция для ускорения пересборки
        aggregateTimeout: 100 // default: 300
    },

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({ NODE_ENV: JSON.stringify(NODE_ENV) }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],

    resolve: {
        modulesDirectories: ['node_modules'], // Где искать модули
        extensions: ['', '.js'] // С какими расширениями
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'], // Где искать лоадеры
        moduleTemplates: ['*-loader', '*'], // Шаблон поиска
        extensions: ['', '.js'] // С какими расширениями
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }]
    }

};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}