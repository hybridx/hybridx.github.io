const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization : {
        minimizer: [new TerserPlugin()],
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                query: {
                    presets: [
                    ['@babel/env', {
                        targets: {
                        browsers: 'last 2 chrome versions'
                        }
                    }]
                    ]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                  ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin, 'css-loader']
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img',
                            name: '[name].[ext]',
                            esModule: false,
                        },
                    }
                ]
            },        
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.scss', '.css'],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['app'],
            template: './src/index.html',
        }),
    ],
};