var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "src/client/public");
var APP_DIR = path.resolve(__dirname, "src/client/app");

module.exports = {
    devServer: {
        port: 3000,
        hot: true,
        inline: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Max-Age": "3600",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
    },
    entry: APP_DIR + "/app.jsx",
    output: {
        path: BUILD_DIR,
        filename: "app.bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: APP_DIR,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.jsx$/,
            include: APP_DIR,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    // Configure webpack to import React when it is referenced
    // in a module that doesn't explicitly import it
    // (e.g. stateless component functions)
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react"
        })
    ],
};
