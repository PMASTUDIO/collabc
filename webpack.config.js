const TerserJS = require('terser-webpack-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminOptipng = require('imagemin-optipng')
const imageminJpegtran = require('imagemin-jpegtran')

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/html/index.html'
        }),
        new CopyPlugin([{
            from: 'dist/images/'
        }]),
        new ImageminPlugin({
            imageminOptions: {
                plugins: [
                    imageminJpegtran({
                        progressive: true
                    }),
                    imageminOptipng({
                        optimizationLevel: 1
                    }),
                ]
            }
        }),
    ],
    devtool: process.env.NODE_ENV === 'development'? "source-map" : "",
    optimization: {
        minimizer: [new TerserJS({}), new OptimizeCssAssets({})],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

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
                use: [ {
                    loader: MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: 'dist',
                        hmr: process.env.NODE_ENV === 'development',
                        reloadAll: true,
                    },
                }, 
                "css-loader" ]
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
