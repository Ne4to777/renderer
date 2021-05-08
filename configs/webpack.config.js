/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
    },
    devServer: {
        historyApiFallback: true,
        publicPath: '/',
        contentBase: path.resolve(__dirname, '../public'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '#': 'src',
        },
    },

    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-typescript',
                            '@babel/preset-react',
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            stylusOptions: {
                                define: [
                                ],
                                includeCSS: false,
                                resolveURL: true,
                                lineNumbers: true,
                                hoistAtrules: true,
                                compress: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
};
