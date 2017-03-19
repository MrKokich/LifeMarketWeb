var webpack = require('webpack');
var path = require('path');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192&name=img/[name].[ext]' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url' }
        ]
    }
    //,
//    resolve: {
//        extensions: ['', '.js', '.jsx'],
//    },
//    plugins: [
//        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
//        new ExtractTextPlugin("css/bundle.css"),
//        new webpack.HotModuleReplacementPlugin(),
//        new OpenBrowserPlugin({ url: 'http://localhost:8090' })
//    ]
};