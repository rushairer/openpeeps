const path = require('path')

module.exports = {
    mode: 'production',
    stats: {
        warnings: false,
    },
    entry: './src/main.js',
    target: 'node',
    output: {
        filename: 'openpeeps.js',
        path: path.resolve(__dirname, 'dist')
    },
    node: {
        fs: 'empty',
        net: 'empty',
    },
    externals: {
        uws: 'uws',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|test)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.node$/i,
            use: 'node-loader',
        }],
    }
}