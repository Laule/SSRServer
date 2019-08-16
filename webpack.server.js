const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.js');
const nodeExternals = require('webpack-node-externals');
const serverConfig = {
    target: "node",
    entry: './src/server/index.js',
    mode: 'development',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.css?$/,
            use: [
                'isomorphic-style-loader',
                {
                    loader: 'css-loader',
                    options:{
                        importLoaders: 1,
                        modules:true
                    }
                }
            ]
        }
        ]
    }
};

module.exports = merge(config, serverConfig);