module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
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
