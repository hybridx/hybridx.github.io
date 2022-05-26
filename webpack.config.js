const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'dist' ),
        publicPath: '/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4200,
    },
    optimization : {
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                  },
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: 'file-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                  ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.scss', '.css'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['app'],
            template: './public/index.html',
        }),
    ],
};
