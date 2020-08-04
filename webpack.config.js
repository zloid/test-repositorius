const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // resolve: {
    //     root: [
    //         path.resolve('./node_modules'),
    //         path.resolve('./src'),
    //     ],
    // },
    /* resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
        },
    },  */
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'js calc',
        }),
    ],
    devServer: {
        contentBase: './public',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] },
                },
            },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        ],
    },
}
