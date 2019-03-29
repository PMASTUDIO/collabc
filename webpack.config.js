module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        port: 9090,
        contentBase: 'dist',
        hot: true,
        open: true,
        historyApiFallback: true
    }
}
