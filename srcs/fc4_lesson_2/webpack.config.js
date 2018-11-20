var path = require('path');

module.exports = {
    entry: './scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    mode: 'development',
    stats: {
        colors: true
    },
    devtool: 'source-map'
};