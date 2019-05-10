const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',//production
    target: 'web',
    entry: './src/index.js',
    plugins: [
        // new CleanWebpackPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime', "transform-class-properties"]
                    }
                }
            },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.(jpg|png|ico)$/, loader: "url?limit=8192" },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico) $/,
                loader: 'file'
            }
        ]
    },
    watch: true,
    devServer: {
        contentBase: './dist',
        port: 9000
    },
    devtool: "source-map"
};