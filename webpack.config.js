// stopped at lec19
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// path source code?
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]
};

module.exports = config;