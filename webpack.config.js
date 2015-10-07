var path = require("path");
var webpack = require("webpack");
module.exports = {
    cache: true,
    context: __dirname,
    entry: "./app/index.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }
        ]
    }
}