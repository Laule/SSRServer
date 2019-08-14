const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    target: "node",
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'stage-0', ['env', {
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }]]
                }
            }
        ]
    }
}