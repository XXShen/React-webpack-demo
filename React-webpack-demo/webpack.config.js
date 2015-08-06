var webpack = require('webpack');

module.exports = {
    entry: {
        'hello-world': './assets/js/index.js',
    },
    output: {
        'path': 'js',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader' // 链式调用
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.jsx?$/,
            loaders: ['react-hot', 'jsx?harmony'],
            exclude: /node_modules/
        }]
    },
     resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};


