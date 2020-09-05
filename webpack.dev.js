const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'ts/index.ts'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contentHash].js'
    },

    mode: "development",

    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.ts?$/,
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {   
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
                use: "file-loader"
            },
            {
                test: /\.(png|jpg)$/,
                use: "url-loader"
            }
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, 'data/images.json'), 
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'img'),
                    to: path.resolve(__dirname, 'dist/img')
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'template.html')
        })
    ]
}