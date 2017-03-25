'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

    devtool: '#inline-source-map',

    entry: [
       './controllers/App.jsx' // entry point for the client app
    ],

    //
    output: {
        path: __dirname,
        filename: 'default.js',
        publicPath: '/static/'
    },

    //
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    //
    resolve: {
        alias: {
        },
        // require() file without adding .jsx and .js .suffix
        extensions: ['', '.js', '.jsx']
    },

    // be sure to add 'stage-0' in .babelrc to support es7 syntax
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: ['react-hmre', "es2015", "stage-0", "react"],
                    plugins: ["transform-decorators-legacy"],
                }
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: ['react-hmre', "es2015", "stage-0", "react"],
                    plugins: ["transform-decorators-legacy"],
                }
            },
        ]
    }
};