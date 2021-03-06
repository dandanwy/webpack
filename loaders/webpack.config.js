const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    module: {
        rules: [
            { 
                test: /.css$/, 
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /.less$/, 
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src//index.html'
        })
    ]
}